import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, SITE_URL } from "@/data/services";
import heroImg from "@/assets/wirkstatt/hero.jpg";

const s = services.find((x) => x.slug === "golf-fitness")!;
const url = `${SITE_URL}/angebot/golf-fitness`;

export const Route = createFileRoute("/angebot/golf-fitness")({
  head: () => ({
    meta: [
      { title: `Golf-Fitness in Thalwil & Horgen — Wirkstattnatur` },
      { name: "description", content: s.metaDesc },
      { property: "og:title", content: `Golf-Fitness — Wirkstattnatur` },
      { property: "og:description", content: s.metaDesc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: () => <ServicePage {...s} heroImg={heroImg} />,
});
