import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug.karate;

export const Route = createFileRoute("/angebot/karate")({
  head: () => ({
    meta: [
      { title: "Karate in Thalwil & Horgen — Wirkstattnatur" },
      { name: "description", content: service.description },
    ],
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/angebot/karate" }],
  }),
  component: KaratePage,
});

function KaratePage() {
  return <ServiceDetailPage service={service} />;
}
