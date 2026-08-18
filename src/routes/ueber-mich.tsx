import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about-page";
import { getProfilePageSchema, getSeoHead, jsonLdScript } from "@/lib/seo";

const title = "Über Urs Gremlich — Wirkstattnatur";
const description =
  "Porträt, Qualifikationen und fachliches Netzwerk von Urs Gremlich, Bewegungstrainer, Therapeut und Karatelehrer.";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    ...getSeoHead({ path: "/ueber-mich", title, description, locale: "de-CH" }),
    scripts: [
      jsonLdScript(
        getProfilePageSchema({
          path: "/ueber-mich",
          name: title,
          description,
          inLanguage: "de-CH",
        }),
      ),
    ],
  }),
  component: AboutPage,
});
