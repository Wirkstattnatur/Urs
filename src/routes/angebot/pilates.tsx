import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug.pilates;

export const Route = createFileRoute("/angebot/pilates")({
  head: () => ({
    meta: [
      { title: "Pilates in Thalwil & Horgen — Wirkstattnatur" },
      { name: "description", content: service.description },
    ],
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/angebot/pilates" }],
  }),
  component: PilatesPage,
});

function PilatesPage() {
  return <ServiceDetailPage service={service} />;
}
