import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["personal-training"];

export const Route = createFileRoute("/angebot/personal-training")({
  head: () => ({
    meta: [
      { title: "Personal Training in Thalwil & Horgen — Wirkstattnatur" },
      { name: "description", content: service.description },
    ],
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/angebot/personal-training" }],
  }),
  component: PersonalTrainingPage,
});

function PersonalTrainingPage() {
  return <ServiceDetailPage service={service} />;
}
