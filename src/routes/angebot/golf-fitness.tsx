import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";
import { getSeoHead, getServicePageSchema, jsonLdScript } from "@/lib/seo";

const service = servicesBySlug["golf-fitness"];

export const Route = createFileRoute("/angebot/golf-fitness")({
  head: () => ({
    ...getSeoHead({
      path: service.path,
      title: "Golf-Fitness in Thalwil & Horgen — Wirkstattnatur",
      description: service.description,
      locale: "de-CH",
      imageUrl: service.image,
      imageAlt: service.imageAlt,
    }),
    scripts: [
      jsonLdScript(
        getServicePageSchema({
          path: service.path,
          name: "Golf-Fitness in Thalwil & Horgen — Wirkstattnatur",
          description: service.description,
          inLanguage: "de-CH",
          imageUrl: service.image,
        }),
      ),
    ],
  }),
  component: GolfFitnessPage,
});

function GolfFitnessPage() {
  return <ServiceDetailPage service={service} />;
}
