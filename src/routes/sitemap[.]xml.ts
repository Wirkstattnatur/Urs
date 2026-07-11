import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, SITE_URL } from "@/data/services";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const entries: { path: string; priority: string; changefreq: string }[] = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/angebot", priority: "0.9", changefreq: "monthly" },
          { path: "/ueber-mich", priority: "0.7", changefreq: "monthly" },
          { path: "/stimmen", priority: "0.6", changefreq: "monthly" },
          { path: "/kontakt", priority: "0.8", changefreq: "monthly" },
          ...services.map((s) => ({
            path: `/angebot/${s.slug}`,
            priority: "0.8",
            changefreq: "monthly",
          })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            `  <url><loc>${SITE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
