import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/wirkstatt/hero.jpg";
import review1 from "@/assets/wirkstatt/review1.png";
import review2 from "@/assets/wirkstatt/review2.png";
import review3 from "@/assets/wirkstatt/review3.png";
import review4 from "@/assets/wirkstatt/review4.png";
import review5 from "@/assets/wirkstatt/review5.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { title: "Personal Training", desc: "Individuelle Trainingspläne, die zu deinem Alltag und Tempo passen.", num: "01" },
  { title: "Pilates", desc: "Kontrolle, Atmung, Beweglichkeit — für einen stabilen, starken Körper.", num: "02" },
  { title: "Golf-Fitness", desc: "Mehr Länge, weniger Verletzungen. Kraft und Rotation für dein Spiel.", num: "03" },
  { title: "Karate", desc: "Disziplin und Bewegung im traditionellen Karate — für Körper und Geist.", num: "04" },
  { title: "Massagen", desc: "Gezielte Massage zur Regeneration nach Training oder anstrengendem Alltag.", num: "05" },
  { title: "Just Me", desc: "Zeit nur für dich — Bewegung, Entspannung und persönliche Begleitung.", num: "06" },
];

const reviews = [review1, review2, review3, review4, review5];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight text-primary-foreground drop-shadow">
            Wirkstatt<span className="text-accent">natur</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium text-primary-foreground/90 md:flex">
            <a href="#angebot" className="hover:text-accent">Angebot</a>
            <a href="#ueber" className="hover:text-accent">Über</a>
            <a href="#stimmen" className="hover:text-accent">Stimmen</a>
            <a href="#kontakt" className="hover:text-accent">Kontakt</a>
          </div>
          <a
            href="tel:+41794131830"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg transition hover:brightness-95 md:inline-flex"
          >
            079 413 18 30
          </a>
        </nav>
      </header>

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
          <h1 className="max-w-4xl font-display text-5xl font-500 leading-[1.02] text-primary-foreground sm:text-6xl lg:text-8xl">
            Bewegung, die <em className="not-italic text-accent">wirkt</em> — <br className="hidden sm:block" />
            im Rhythmus deines Lebens.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/85 lg:text-xl">
            Kein 08/15-Programm. Wir starten dort, wo du stehst — mit einem Trainingsplan,
            der zu deinem Alltag, deiner Verfassung und deinen Zielen passt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#kontakt" className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-xl transition hover:brightness-95">
              Kennenlerngespräch buchen
            </a>
            <a href="#angebot" className="rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
              Angebot ansehen
            </a>
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
              <article key={s.title} className="group relative flex flex-col justify-between gap-10 bg-primary p-8 transition hover:bg-primary-foreground/5 lg:p-10">
                <span className="font-display text-sm text-accent">{s.num}</span>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-primary-foreground/70">{s.desc}</p>
                </div>
                <span className="text-accent opacity-0 transition group-hover:opacity-100">→ mehr erfahren</span>
              </article>
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
      </section>

      {/* TESTIMONIALS */}
      <section id="stimmen" className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Kundenstimmen</p>
              <h2 className="font-display text-4xl leading-tight lg:text-5xl">Was andere sagen.</h2>
            </div>
            <a
              href="https://www.google.ch/maps/place/Wirkstattnatur+-+Personal+Training+GolfFitness+Pilates+%26+Massage/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent-foreground"
            >
              Alle Rezensionen auf Google Maps →
            </a>
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

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Wirkstattnatur · Urs Gremlich</p>
          <p>Personal Training · Pilates · Golf-Fitness · Karate · Massagen</p>
        </div>
      </footer>
    </div>
  );
}
