import { createFileRoute } from "@tanstack/react-router";
import { EnglishHomePage } from "@/components/english-home-page";
import { getSeoHead, getWebPageSchema, jsonLdScript } from "@/lib/seo";

const title = "Wirkstattnatur — Personal Training in Thalwil and Horgen";
const description =
  "Personal Training, Pilates, Golf-Fitness and Karate with Urs Gremlich. Individually guided — for greater strength, mobility and quality of life.";

export const Route = createFileRoute("/en/")({
  head: () => ({
    ...getSeoHead({
      path: "/en",
      title,
      description,
      locale: "en",
      imageAlt: "Urs Gremlich during personal training at Wirkstattnatur",
    }),
    scripts: [
      jsonLdScript(getWebPageSchema({ path: "/en", name: title, description, inLanguage: "en" })),
    ],
  }),
  component: EnglishHomePage,
});
