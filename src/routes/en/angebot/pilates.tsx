import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { servicesBySlug } from "@/lib/services";
import { getLocalizedService } from "@/lib/services-en";
import { getSeoHead, getServicePageSchema, jsonLdScript } from "@/lib/seo";

const service = getLocalizedService(servicesBySlug.pilates, "en");
const title = "Pilates in Thalwil and Horgen — Wirkstattnatur";

export const Route = createFileRoute("/en/angebot/pilates")({
  head: () => ({
    ...getSeoHead({
      path: "/en/angebot/pilates",
      title,
      description: service.description,
      locale: "en",
      imageUrl: service.image,
      imageAlt: service.imageAlt,
    }),
    scripts: [
      jsonLdScript(
        getServicePageSchema({
          path: "/en/angebot/pilates",
          name: title,
          description: service.description,
          inLanguage: "en",
          imageUrl: service.image,
        }),
      ),
    ],
  }),
  component: () => <ServiceDetailPage service={service} locale="en" />,
});
