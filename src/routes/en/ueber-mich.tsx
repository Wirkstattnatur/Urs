import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about-page";
import { getProfilePageSchema, getSeoHead, jsonLdScript } from "@/lib/seo";

const title = "About Urs Gremlich — Wirkstattnatur";
const description =
  "Portrait, qualifications and professional network of Urs Gremlich, movement trainer, therapist and karate instructor.";

export const Route = createFileRoute("/en/ueber-mich")({
  head: () => ({
    ...getSeoHead({ path: "/en/ueber-mich", title, description, locale: "en" }),
    scripts: [
      jsonLdScript(
        getProfilePageSchema({
          path: "/en/ueber-mich",
          name: title,
          description,
          inLanguage: "en",
        }),
      ),
    ],
  }),
  component: () => <AboutPage locale="en" />,
});
