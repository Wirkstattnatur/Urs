import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["golf-fitness"];

export const Route = createFileRoute("/angebot/golf-fitness")({
  head: () => ({
    meta: [
      { title: "Golf-Fitness in Thalwil & Horgen — Wirkstattnatur" },
      { name: "description", content: service.description },
    ],
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/angebot/golf-fitness" }],
  }),
  component: GolfFitnessPage,
});

function GolfFitnessPage() {
  return <ServiceDetailPage service={service} />;
}
