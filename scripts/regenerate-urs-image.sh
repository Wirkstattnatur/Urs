#!/bin/sh
# Regenerate the responsive Über-mich portrait assets from a full-resolution original.
#
# The About section displays the photo in a 4:5 slot. The site previously shipped
# 3:2 assets that the browser upscaled on retina screens, which read as blurry.
# This script bakes the 4:5 crop (matching the previous objectPosition 22%
# framing) into the assets and exports sharp sizes up to 1200px wide.
#
# Usage: scripts/regenerate-urs-image.sh "path/to/original.jpeg"
#
# Requires: sips and cwebp (brew install webp).
set -eu

SRC="${1:?Usage: scripts/regenerate-urs-image.sh <original.jpeg>}"
OUT_DIR="src/assets/wirkstatt"

command -v sips >/dev/null || { echo "sips not found" >&2; exit 1; }
command -v cwebp >/dev/null || { echo "cwebp not found (brew install webp)" >&2; exit 1; }
[ -f "$SRC" ] || { echo "File not found: $SRC" >&2; exit 1; }

WIDTH=$(sips -g pixelWidth "$SRC" | awk '/pixelWidth/{print $2}')
HEIGHT=$(sips -g pixelHeight "$SRC" | awk '/pixelHeight/{print $2}')

# 4:5 crop window, anchored like the previous CSS crop (22% from the left on a
# 3:2 source; identical framing whenever the original shares the export's 3:2).
CROP_W=$(python3 -c "print(round(min($WIDTH, $HEIGHT * 0.8)))")
CROP_H=$HEIGHT
OFFSET_X=$(python3 -c "print(round(max(0, ($WIDTH - $CROP_W) * 0.22)))")

TMP_DIR=$(mktemp -d)
trap 'rm -rf "$TMP_DIR"' EXIT
cp "$SRC" "$TMP_DIR/original.jpg"
sips --cropOffset 0 "$OFFSET_X" -c "$CROP_H" "$CROP_W" "$TMP_DIR/original.jpg" \
  --out "$TMP_DIR/cropped.jpg" >/dev/null

for SIZE in 480 720 960 1200; do
  CROP_H_OUT=$((SIZE * 5 / 4))
  sips --resampleWidth "$SIZE" "$TMP_DIR/cropped.jpg" \
    --out "$TMP_DIR/urs-gremlich-$SIZE.jpg" >/dev/null
  cwebp -quiet -q 82 "$TMP_DIR/urs-gremlich-$SIZE.jpg" \
    -o "$OUT_DIR/urs-gremlich-$SIZE.webp"
  echo "wrote $OUT_DIR/urs-gremlich-$SIZE.webp (${SIZE}x$CROP_H_OUT)"
done

echo "Done. Commit the updated files in $OUT_DIR."
