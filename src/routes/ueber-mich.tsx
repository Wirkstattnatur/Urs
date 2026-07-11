import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/data/services";
import heroImg from "@/assets/wirkstatt/hero.jpg";

const url = `${SITE_URL}/ueber-mich`;

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Urs Gremlich | Wirkstattnatur" },
      { name: "description", content: "Urs Gremlich, Personal Trainer und Karate-Meister in Thalwil. Persönliche Begleitung für Kraft, Beweglichkeit und Wohlbefinden." },
      { property: "og:title", content: "Über mich — Urs Gremlich" },
      { property: "og:description", content: "Persönliche Begleitung für den ganzen Menschen." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: UeberPage,
});

function UeberPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Urs Gremlich" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/85" />
        </div>
        <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Über mich</p>
          <h1 className="font-display text-5xl leading-[1.05] text-primary-foreground lg:text-7xl">
            Urs Gremlich — <em className="not-italic text-accent">deine Wirkstatt.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28 text-lg leading-relaxed text-muted-foreground space-y-6">
        <p>
          Seit über zwanzig Jahren begleite ich Menschen in ihrer Bewegung — als Personal Trainer,
          Pilates-Instruktor, Golf-Fitness-Coach, Karate-Lehrer und Masseur.
        </p>
        <p>
          Meine Überzeugung: Es geht nicht nur um Trainingsziele, sondern um den ganzen Menschen.
          Wenn Bewegung, Gesundheit und Entspannung zusammenkommen, verändert sich mehr als nur die
          Fitness — es entsteht Lebensqualität.
        </p>
        <p>
          Ich arbeite mit dir individuell: keine Programme von der Stange, sondern Trainings, die zu
          deinem Alltag, deinem Körper und deiner aktuellen Verfassung passen.
        </p>
        <h2 className="font-display text-3xl text-foreground pt-6">Qualifikationen</h2>
        <ul className="grid gap-3 sm:grid-cols-2 text-base">
          {[
            "Diplomierter Personal Trainer",
            "Pilates-Instruktor",
            "TPI Golf-Fitness Coach",
            "Masseur EMR/ASCA anerkannt",
            "Dan-Träger Karate",
            "Über 20 Jahre Praxiserfahrung",
          ].map((q) => (
            <li key={q} className="flex items-start gap-3 text-foreground">
              <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">✓</span>
              {q}
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <Link to="/kontakt" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">
            Kennenlerngespräch buchen
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
