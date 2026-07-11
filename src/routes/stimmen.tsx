import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/data/services";
import review1 from "@/assets/wirkstatt/review1.png";
import review2 from "@/assets/wirkstatt/review2.png";
import review3 from "@/assets/wirkstatt/review3.png";
import review4 from "@/assets/wirkstatt/review4.png";
import review5 from "@/assets/wirkstatt/review5.png";

const url = `${SITE_URL}/stimmen`;
const reviews = [review1, review2, review3, review4, review5];

export const Route = createFileRoute("/stimmen")({
  head: () => ({
    meta: [
      { title: "Kundenstimmen — Wirkstattnatur" },
      { name: "description", content: "Was Kund:innen über das Training, die Massagen und die persönliche Begleitung von Urs Gremlich sagen." },
      { property: "og:title", content: "Kundenstimmen — Wirkstattnatur" },
      { property: "og:description", content: "Echte Rezensionen von Google Maps." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: StimmenPage,
});

function StimmenPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="dark" />
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-20 lg:px-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Kundenstimmen</p>
        <h1 className="font-display text-5xl leading-[1.05] lg:text-7xl">
          Was andere <em className="text-primary">sagen.</em>
        </h1>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((src, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] ring-1 ring-border">
              <img src={src} alt={`Kundenrezension ${i + 1}`} className="h-full w-full rounded-xl object-contain" loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
