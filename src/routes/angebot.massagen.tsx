import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, SITE_URL } from "@/data/services";
import heroImg from "@/assets/wirkstatt/hero.jpg";

const s = services.find((x) => x.slug === "massagen")!;
const url = `${SITE_URL}/angebot/massagen`;

export const Route = createFileRoute("/angebot/massagen")({
  head: () => ({
    meta: [
      { title: `Massagen in Thalwil — Wirkstattnatur` },
      { name: "description", content: s.metaDesc },
      { property: "og:title", content: `Massagen — Wirkstattnatur` },
      { property: "og:description", content: s.metaDesc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: () => <ServicePage {...s} heroImg={heroImg} />,
});
