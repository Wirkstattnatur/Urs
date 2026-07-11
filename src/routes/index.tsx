import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/wirkstatt/hero.jpg";
import review1 from "@/assets/wirkstatt/review1.png";
import review2 from "@/assets/wirkstatt/review2.png";
import review3 from "@/assets/wirkstatt/review3.png";
import review4 from "@/assets/wirkstatt/review4.png";
import review5 from "@/assets/wirkstatt/review5.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, SITE_URL } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wirkstattnatur — Personal Training, Pilates & Massagen in Thalwil & Horgen" },
      { name: "description", content: "Personal Training, Pilates, Golf-Fitness, Karate und Massagen mit Urs Gremlich in Thalwil & Horgen. Individuell begleitet — für mehr Kraft, Beweglichkeit und Lebensqualität." },
      { property: "og:title", content: "Wirkstattnatur — Personal Training in Thalwil & Horgen" },
      { property: "og:description", content: "Individuelles Training, das zu deinem Leben passt. Kraft, Mobilität, Entspannung." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Wirkstattnatur",
        image: `${SITE_URL}/og.jpg`,
        telephone: "+41794131830",
        email: "info@wirkstattnatur.ch",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Zürcherstrasse 73",
          postalCode: "8800",
          addressLocality: "Thalwil",
          addressCountry: "CH",
        },
        areaServed: ["Thalwil", "Horgen", "Zürichsee", "Zürich"],
      }),
    }],
  }),
  component: Home,
});

const reviews = [review1, review2, review3, review4, review5];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Personal Training im Wirkraum Thalwil" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/85" />
        </div>
        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Personal Training · Thalwil & Horgen
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-primary-foreground sm:text-6xl lg:text-8xl">
            Bewegung, die <em className="not-italic text-accent">wirkt</em> —{" "}
            <br className="hidden sm:block" />
            im Rhythmus deines Lebens.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/85 lg:text-xl">
            Kein 08/15-Programm. Wir starten dort, wo du stehst — mit einem Trainingsplan,
            der zu deinem Alltag, deiner Verfassung und deinen Zielen passt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/kontakt" className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-xl transition hover:brightness-95">
              Kennenlerngespräch buchen
            </Link>
            <Link to="/angebot" className="rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
              Angebot ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO / VALUES */}
      <section id="ueber" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Die Idee</p>
            <h2 className="font-display text-4xl leading-tight lg:text-5xl">
              Kraft, Ruhe und Klarheit — <em className="text-primary">für den ganzen Menschen.</em>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:pt-4">
            <p>
              Bei mir gibt es keine Lösungen von der Stange. Ich nehme mir Zeit, deine Wünsche
              und Ziele kennenzulernen — und erstelle daraus ein Trainingsprogramm, das sich
              wirklich an dir orientiert.
            </p>
            <p>
              Bewegung ist wichtig. Ruhephasen ebenso. Gemeinsam finden wir die Balance,
              damit du motiviert bleibst, Überlastung vermeidest und langfristig Fortschritte spürst.
            </p>
            <ul className="grid gap-4 pt-4 sm:grid-cols-2">
              {[
                "Persönlicher Trainingsplan",
                "Kraft, Mobilität, Entspannung",
                "Gezielte Regenerationszeiten",
                "Anerkannt von Zusatzversicherungen",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">✓</span>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="angebot" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Angebot</p>
              <h2 className="max-w-2xl font-display text-4xl leading-tight lg:text-6xl">
                Sechs Wege, wie du dich <em className="text-accent">stärker fühlst.</em>
              </h2>
            </div>
            <p className="max-w-md text-primary-foreground/70">
              Ob Einstieg oder nächstes Level — jedes Angebot kombiniert Bewegung, Fokus und
              Regeneration zu einem stimmigen Ganzen.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/angebot/${s.slug}` as string}
                className="group relative flex flex-col justify-between gap-10 bg-primary p-8 transition hover:bg-primary-foreground/5 lg:p-10"
              >
                <span className="font-display text-sm text-accent">{s.num}</span>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-primary-foreground/70">{s.short}</p>
                </div>
                <span className="text-accent opacity-70 transition group-hover:opacity-100">→ mehr erfahren</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Urs Gremlich</p>
        <blockquote className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
          «Ich habe nicht nur Trainingsziele im Blick, sondern den ganzen Menschen.
          Wenn Bewegung, Gesundheit und Entspannung zusammenkommen,
          <em className="text-primary"> verändert sich mehr als nur die Fitness.</em>»
        </blockquote>
        <Link to="/ueber-mich" className="mt-10 inline-flex rounded-full border border-border px-7 py-3.5 text-sm font-semibold">
          Mehr über mich
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section id="stimmen" className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Kundenstimmen</p>
              <h2 className="font-display text-4xl leading-tight lg:text-5xl">Was andere sagen.</h2>
            </div>
            <Link to="/stimmen" className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent-foreground">
              Alle Stimmen ansehen →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((src, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] ring-1 ring-border">
                <img src={src} alt={`Kundenrezension ${i + 1}`} className="h-full w-full rounded-xl object-contain" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="kontakt" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 rounded-3xl bg-primary p-10 text-primary-foreground shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-16">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Bereit, loszulegen?</p>
              <h2 className="font-display text-4xl leading-tight lg:text-5xl">
                Ein Gespräch. <br />Ein erster Schritt. <em className="text-accent">Unverbindlich.</em>
              </h2>
              <p className="mt-6 max-w-md text-primary-foreground/80">
                Melde dich per Telefon oder Mail — wir finden einen Termin, an dem wir in Ruhe
                über deine Ziele sprechen können.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+41794131830" className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:brightness-95">
                  079 413 18 30
                </a>
                <a href="mailto:info@wirkstattnatur.ch" className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10">
                  info@wirkstattnatur.ch
                </a>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary-foreground/15 p-6">
                <p className="text-xs uppercase tracking-widest text-accent">Wirkraum</p>
                <p className="mt-3 font-display text-xl">Thalwil</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Zürcherstrasse 73<br />8800 Thalwil</p>
              </div>
              <div className="rounded-2xl border border-primary-foreground/15 p-6">
                <p className="text-xs uppercase tracking-widest text-accent">Büro & Lieferadresse</p>
                <p className="mt-3 font-display text-xl">Horgen</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Hernerholzgasse 30<br />8810 Horgen</p>
              </div>
              <div className="rounded-2xl bg-accent p-6 text-accent-foreground sm:col-span-2">
                <p className="font-display text-lg leading-snug">
                  Anerkannt von den Zusatzversicherungen der Krankenkassen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
