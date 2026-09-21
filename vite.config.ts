import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

// Hostpoint serves the node-server build; Vercel needs its own preset to emit a
// Build Output API bundle. Vercel sets VERCEL=1 during its builds, so the two
// targets can share one build script without an environment variable on Vercel.
const nitroPreset = process.env.NITRO_PRESET ?? (process.env.VERCEL ? "vercel" : "node-server");

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: false,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        failOnError: true,
        headers: { "Accept-Language": "de-CH" },
        // Anchor links resolve to the same output file as their bare route;
        // rendering both would write index.html concurrently and
        // intermittently truncate it to zero bytes.
        filter: (page) => !page.path.includes("#"),
      },
      server: { entry: "server" },
    }),
    nitro({ preset: nitroPreset }),
    viteReact(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
});
