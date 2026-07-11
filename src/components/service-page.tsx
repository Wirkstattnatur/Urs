import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  lead: string;
  heroImg: string;
  intro: string;
  benefits: string[];
  forWhom: string[];
  process: { step: string; text: string }[];
  price?: string;
}

export function ServicePage(p: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={p.heroImg} alt={p.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/85" />
        </div>
        <div className="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">{p.eyebrow}</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground lg:text-7xl">
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 lg:text-xl">{p.lead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{p.intro}</p>
            <h2 className="mt-14 font-display text-3xl">Für wen ist das Angebot?</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.forWhom.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-widest text-accent">Was du bekommst</p>
              <ul className="mt-4 space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-primary-foreground/90">
                    <span className="mt-1 text-accent">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {p.price && <p className="mt-6 text-sm text-primary-foreground/70">{p.price}</p>}
              <Link
                to="/kontakt"
                className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
              >
                Kennenlerngespräch buchen
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <h2 className="font-display text-3xl lg:text-4xl">So läuft es ab</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {p.process.map((s, i) => (
              <li key={s.step} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-accent">0{i + 1}</p>
                <p className="mt-3 font-display text-xl">{s.step}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap gap-3">
            <Link to="/kontakt" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">Termin vereinbaren</Link>
            <Link to="/angebot" className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold">Weitere Angebote</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
