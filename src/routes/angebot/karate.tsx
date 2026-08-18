import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";
import { getSeoHead, getServicePageSchema, jsonLdScript } from "@/lib/seo";

const service = servicesBySlug.karate;

export const Route = createFileRoute("/angebot/karate")({
  head: () => ({
    ...getSeoHead({
      path: service.path,
      title: "Karate in Thalwil & Horgen — Wirkstattnatur",
      description: service.description,
      locale: "de-CH",
      imageUrl: service.image,
      imageAlt: service.imageAlt,
    }),
    scripts: [
      jsonLdScript(
        getServicePageSchema({
          path: service.path,
          name: "Karate in Thalwil & Horgen — Wirkstattnatur",
          description: service.description,
          inLanguage: "de-CH",
          imageUrl: service.image,
        }),
      ),
    ],
  }),
  component: KaratePage,
});

function KaratePage() {
  return <ServiceDetailPage service={service} />;
}
