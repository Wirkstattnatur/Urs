import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

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
