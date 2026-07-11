import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, SITE_URL } from "@/data/services";
import heroImg from "@/assets/wirkstatt/hero.jpg";

const s = services.find((x) => x.slug === "personal-training")!;
const url = `${SITE_URL}/angebot/personal-training`;

export const Route = createFileRoute("/angebot/personal-training")({
  head: () => ({
    meta: [
      { title: `${s.title} in Thalwil & Horgen — Wirkstattnatur` },
      { name: "description", content: s.metaDesc },
      { property: "og:title", content: `${s.title} — Wirkstattnatur` },
      { property: "og:description", content: s.metaDesc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.title,
        provider: { "@type": "LocalBusiness", name: "Wirkstattnatur", telephone: "+41794131830" },
        areaServed: ["Thalwil", "Horgen", "Zürichsee"],
        description: s.metaDesc,
      }),
    }],
  }),
  component: () => <ServicePage {...s} heroImg={heroImg} />,
});
