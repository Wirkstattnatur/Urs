import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, SITE_URL } from "@/data/services";
import heroImg from "@/assets/wirkstatt/hero.jpg";

const url = `${SITE_URL}/angebot`;

export const Route = createFileRoute("/angebot")({
  head: () => ({
    meta: [
      { title: "Angebot — Personal Training, Pilates, Golf-Fitness | Wirkstattnatur" },
      { name: "description", content: "Alle Angebote von Wirkstattnatur: Personal Training, Pilates, Golf-Fitness, Karate, Massagen und Just Me in Thalwil & Horgen." },
      { property: "og:title", content: "Angebot — Wirkstattnatur" },
      { property: "og:description", content: "Sechs Wege zu mehr Kraft, Beweglichkeit und Wohlbefinden." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: AngebotPage,
});

function AngebotPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Angebot Wirkstattnatur" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/55 to-primary/85" />
        </div>
        <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Angebot</p>
          <h1 className="font-display text-5xl leading-[1.05] text-primary-foreground lg:text-7xl">
            Sechs Wege zu <em className="not-italic text-accent">deiner Bewegung.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Jedes Angebot lässt sich einzeln buchen oder kombinieren. Wähle, was jetzt zu dir passt — ich begleite dich persönlich.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/angebot/${s.slug}` as string}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <p className="font-display text-sm text-accent">{s.num}</p>
                <h2 className="mt-4 font-display text-2xl lg:text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.short}</p>
              </div>
              <span className="mt-8 text-sm font-semibold text-primary group-hover:text-accent">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
