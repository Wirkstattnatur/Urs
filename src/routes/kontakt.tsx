import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/data/services";

const url = `${SITE_URL}/kontakt`;

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Wirkstattnatur in Thalwil & Horgen" },
      { name: "description", content: "Kontaktiere Urs Gremlich für Personal Training, Pilates, Golf-Fitness oder Massagen in Thalwil & Horgen. 079 413 18 30 · info@wirkstattnatur.ch" },
      { property: "og:title", content: "Kontakt — Wirkstattnatur" },
      { property: "og:description", content: "Vereinbare dein kostenloses Kennenlerngespräch." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Wirkstattnatur",
        telephone: "+41794131830",
        email: "info@wirkstattnatur.ch",
        address: [
          { "@type": "PostalAddress", streetAddress: "Zürcherstrasse 73", postalCode: "8800", addressLocality: "Thalwil", addressCountry: "CH" },
          { "@type": "PostalAddress", streetAddress: "Hernerholzgasse 30", postalCode: "8810", addressLocality: "Horgen", addressCountry: "CH" },
        ],
        url: SITE_URL,
      }),
    }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="dark" />
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-20 lg:px-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Kontakt</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] lg:text-7xl">
          Ein Gespräch. Ein <em className="text-primary">erster Schritt.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Melde dich per Telefon oder Mail — wir vereinbaren einen Termin, an dem wir in Ruhe über
          deine Ziele sprechen.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <a href="tel:+41794131830" className="rounded-3xl bg-primary p-8 text-primary-foreground transition hover:brightness-110">
            <p className="text-xs uppercase tracking-widest text-accent">Telefon</p>
            <p className="mt-3 font-display text-3xl">079 413 18 30</p>
            <p className="mt-2 text-sm text-primary-foreground/70">Am liebsten Mo–Fr, 8–18 Uhr</p>
          </a>
          <a href="mailto:info@wirkstattnatur.ch" className="rounded-3xl bg-accent p-8 text-accent-foreground transition hover:brightness-95">
            <p className="text-xs uppercase tracking-widest">E-Mail</p>
            <p className="mt-3 font-display text-2xl break-all">info@wirkstattnatur.ch</p>
            <p className="mt-2 text-sm">Antwort meist am selben Tag.</p>
          </a>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Krankenkassen</p>
            <p className="mt-3 font-display text-2xl">Anerkannt</p>
            <p className="mt-2 text-sm text-muted-foreground">Massagen mit EMR/ASCA. Training über viele Zusatzversicherungen.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-border p-8">
            <p className="text-xs uppercase tracking-widest text-accent">Wirkraum</p>
            <p className="mt-3 font-display text-2xl">Thalwil</p>
            <p className="mt-2 text-muted-foreground">Zürcherstrasse 73<br />8800 Thalwil</p>
          </div>
          <div className="rounded-3xl border border-border p-8">
            <p className="text-xs uppercase tracking-widest text-accent">Büro & Lieferadresse</p>
            <p className="mt-3 font-display text-2xl">Horgen</p>
            <p className="mt-2 text-muted-foreground">Hernerholzgasse 30<br />8810 Horgen</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
