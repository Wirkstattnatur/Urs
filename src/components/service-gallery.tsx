import { useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/lib/locale";
import type { ServiceGalleryImage } from "@/lib/services";

type ServiceGalleryProps = {
  images: readonly ServiceGalleryImage[];
  label: string;
  locale?: Locale;
};

export function ServiceGallery({ images, label, locale = "de" }: ServiceGalleryProps) {
  const isEnglish = locale === "en";
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = images[activeIndex] ?? images[0];

  function showImage(index: number) {
    const nextIndex = Math.min(Math.max(index, 0), images.length - 1);
    const track = trackRef.current;

    setActiveIndex(nextIndex);
    track?.scrollTo({
      left: track.clientWidth * nextIndex,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    if (nextIndex >= 0 && nextIndex < images.length) {
      setActiveIndex(nextIndex);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(activeIndex + 1);
    }
  }

  if (!currentImage) return null;

  return (
    <figure aria-label={label}>
      <div className="group relative overflow-hidden rounded-panel bg-secondary shadow-soft">
        <div
          ref={trackRef}
          role="region"
          aria-roledescription={isEnglish ? "Carousel" : "Karussell"}
          aria-label={label}
          tabIndex={0}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          className="site-gallery-track flex snap-x snap-mandatory overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {images.map((image, index) => (
            <div
              key={image.src}
              role="group"
              aria-roledescription={isEnglish ? "Image" : "Bild"}
              aria-label={
                isEnglish ? `${index + 1} of ${images.length}` : `${index + 1} von ${images.length}`
              }
              className="w-full flex-none snap-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: image.position }}
                className={`aspect-square h-full w-full ${
                  image.fit === "contain"
                    ? "bg-secondary object-contain p-10 lg:p-16"
                    : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label={isEnglish ? "Previous image" : "Vorheriges Bild"}
              disabled={activeIndex === 0}
              onClick={() => showImage(activeIndex - 1)}
              className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow-card transition hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-0"
            >
              <GalleryArrow direction="left" />
            </button>
            <button
              type="button"
              aria-label={isEnglish ? "Next image" : "Nächstes Bild"}
              disabled={activeIndex === images.length - 1}
              onClick={() => showImage(activeIndex + 1)}
              className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow-card transition hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-0"
            >
              <GalleryArrow direction="right" />
            </button>
          </>
        ) : null}
      </div>

      <figcaption className="mt-4 flex min-h-11 items-center justify-between gap-4 text-sm text-muted-foreground">
        <span aria-live="polite">{currentImage.caption}</span>
        {images.length > 1 ? (
          <span className="shrink-0 font-semibold text-primary">
            {activeIndex + 1} / {images.length}
          </span>
        ) : null}
      </figcaption>

      {images.length > 1 ? (
        <div className="mt-2 flex gap-2" aria-label={isEnglish ? "Select image" : "Bild auswählen"}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={
                isEnglish
                  ? `Image ${index + 1}: ${image.caption}`
                  : `Bild ${index + 1}: ${image.caption}`
              }
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => showImage(index)}
              className="h-1.5 min-w-8 flex-1 rounded-control bg-border transition hover:bg-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary aria-[current=true]:bg-primary"
            />
          ))}
        </div>
      ) : null}
    </figure>
  );
}

function GalleryArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path
        d={direction === "left" ? "m12.5 4.5-5.5 5.5 5.5 5.5" : "m7.5 4.5 5.5 5.5-5.5 5.5"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}
