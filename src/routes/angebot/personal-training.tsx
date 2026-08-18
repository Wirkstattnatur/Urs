import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";
import { getSeoHead, getServicePageSchema, jsonLdScript } from "@/lib/seo";

const service = servicesBySlug["personal-training"];

export const Route = createFileRoute("/angebot/personal-training")({
  head: () => ({
    ...getSeoHead({
      path: service.path,
      title: "Personal Training in Thalwil & Horgen — Wirkstattnatur",
      description: service.description,
      locale: "de-CH",
      imageUrl: service.image,
      imageAlt: service.imageAlt,
    }),
    scripts: [
      jsonLdScript(
        getServicePageSchema({
          path: service.path,
          name: "Personal Training in Thalwil & Horgen — Wirkstattnatur",
          description: service.description,
          inLanguage: "de-CH",
          imageUrl: service.image,
        }),
      ),
    ],
  }),
  component: PersonalTrainingPage,
});

function PersonalTrainingPage() {
  return <ServiceDetailPage service={service} />;
}
