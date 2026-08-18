import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";
import { getSeoHead, getServicePageSchema, jsonLdScript } from "@/lib/seo";

const service = servicesBySlug.pilates;

export const Route = createFileRoute("/angebot/pilates")({
  head: () => ({
    ...getSeoHead({
      path: service.path,
      title: "Pilates in Thalwil & Horgen — Wirkstattnatur",
      description: service.description,
      locale: "de-CH",
      imageUrl: service.image,
      imageAlt: service.imageAlt,
    }),
    scripts: [
      jsonLdScript(
        getServicePageSchema({
          path: service.path,
          name: "Pilates in Thalwil & Horgen — Wirkstattnatur",
          description: service.description,
          inLanguage: "de-CH",
          imageUrl: service.image,
        }),
      ),
    ],
  }),
  component: PilatesPage,
});

function PilatesPage() {
  return <ServiceDetailPage service={service} />;
}
