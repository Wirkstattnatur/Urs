import { Link, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ChatIcon, MailIcon, PhoneIcon } from "@/components/contact-icons";
import { openTidioChat } from "@/lib/tidio";

export const Route = createFileRoute("/cta-demo")({
  component: CtaDemo,
  head: () => ({
    meta: [
      { title: "CTA- und Footer-Vergleich | Wirkstattnatur" },
      {
        name: "description",
        content: "Interner Vergleich für den Kontaktabschluss und Footer der Wirkstattnatur.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

const phoneLabel = "079 413 18 30";
const phoneHref = "tel:+41794131830";
const email = "info@wirkstattnatur.ch";

const locations = [
  {
    label: "Wirkraum",
    city: "Thalwil",
    lines: ["Zürcherstrasse 73", "8800 Thalwil"],
  },
  {
    label: "Büro & Lieferadresse",
    city: "Horgen",
    lines: ["Hernerholzgasse 30", "8810 Horgen"],
  },
] as const;

const concepts = [
  { href: "#variante-1", label: "1 · Einheitlich + Footer" },
  { href: "#variante-2", label: "2 · Kontaktleiste" },
  { href: "#variante-3", label: "3 · Kompakter Abschluss" },
  { href: "#variante-4", label: "4 · Footer als Kontakt-Hub" },
] as const;

function CtaDemo() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground">
        <div className="site-container flex items-center justify-between gap-5 py-5">
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
            Wirkstatt<span className="text-accent">natur</span>
          </Link>
          <Link
            to="/"
            hash="kontakt"
            className="site-button site-button-sm site-button-ghost-inverse"
          >
            Zur Website
          </Link>
        </div>
      </header>

      <section className="site-container site-section">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_28rem]">
          <div>
            <p className="site-eyebrow text-muted-foreground">CTA- und Footer-Vergleich</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-8xl">
              Ein klarer Abschluss — <em className="text-primary">ohne leere Flächen.</em>
            </h1>
          </div>
          <div className="rounded-2xl bg-secondary p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Meine Empfehlung
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Variante 1</strong> verbindet die klare Sprache
              der Angebotsseiten mit drei echten Kontaktaktionen. Die Adressen wandern in einen
              vollwertigen Footer und konkurrieren nicht mehr mit der CTA.
            </p>
          </div>
        </div>

        <nav aria-label="CTA-Varianten" className="mt-12 flex flex-wrap gap-3">
          {concepts.map((concept) => (
            <a
              key={concept.href}
              href={concept.href}
              className="site-card site-card-interactive rounded-control px-5 py-2.5 text-sm font-medium"
            >
              {concept.label}
            </a>
          ))}
        </nav>
      </section>

      <section id="variante-1" className="site-anchor">
        <div className="site-container pb-28">
          <ConceptIntro
            number="01"
            title="Einheitliche CTA + richtiger Footer"
            description="Die CTA folgt derselben klaren, dunkelgrünen Sprache wie auf den Angebotsseiten. Die drei Kontaktwege sind gross und gleichwertig; Standorte und Vertrauenssignal bekommen ihren natürlichen Platz im Footer."
            recommendation="Empfehlung"
          />

          <div className="mt-12 rounded-panel bg-primary p-8 text-primary-foreground shadow-soft sm:p-12 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="site-eyebrow text-accent">Einfach kennenlernen</p>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  Lass uns über <em className="text-accent">deine Ziele sprechen.</em>
                </h2>
                <p className="mt-6 max-w-xl text-primary-foreground/75">
                  Ruf an, schreib eine E-Mail oder starte direkt den Chat — ganz so, wie es für dich
                  am einfachsten ist.
                </p>
              </div>
              <ContactActions className="lg:col-span-7" />
            </div>
          </div>
          <ExpandedFooter className="mt-5" />
        </div>
      </section>

      <section id="variante-2" className="site-anchor bg-card">
        <div className="site-container site-section">
          <ConceptIntro
            number="02"
            title="Zentrierte Kontaktleiste"
            description="Eine ruhige, offene Einladung führt zu drei kräftigen Aktionen in einer eigenen Zeile. Der Footer bleibt separat und sachlich; dadurch entsteht eine besonders klare visuelle Reihenfolge."
          />

          <div className="mt-12 rounded-panel bg-background p-8 shadow-soft sm:p-12 lg:p-16">
            <div className="mx-auto max-w-4xl text-center">
              <p className="site-eyebrow text-muted-foreground">Dein nächster Schritt</p>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Wie möchtest du <em className="text-primary">Kontakt aufnehmen?</em>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Drei direkte Wege zu einem unverbindlichen ersten Gespräch.
              </p>
            </div>
            <ContactActions light className="mx-auto mt-10 max-w-5xl" />
          </div>
          <ExpandedFooter className="mt-5" compact />
        </div>
      </section>

      <section id="variante-3" className="site-anchor">
        <div className="site-container site-section">
          <ConceptIntro
            number="03"
            title="Kompakter Abschluss"
            description="Weniger Höhe, kein separates Einleitungsfeld: Überschrift und Kontaktaktionen sitzen in einer kompakten Zeile. Diese Variante passt, wenn der Seitenabschluss bewusst zurückhaltend bleiben soll."
          />

          <div className="mt-12 rounded-panel bg-primary p-8 text-primary-foreground shadow-soft sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,0.7fr)_minmax(34rem,1.3fr)]">
              <div>
                <p className="site-eyebrow text-accent">Lass uns sprechen</p>
                <h2 className="font-display text-4xl leading-tight">
                  Ein erster Schritt. <em className="text-accent">Ganz unverbindlich.</em>
                </h2>
              </div>
              <ContactActions compact />
            </div>
          </div>
          <ExpandedFooter className="mt-5" compact />
        </div>
      </section>

      <section id="variante-4" className="site-anchor bg-secondary/60 pt-24 lg:pt-32">
        <ConceptIntroWrapper>
          <ConceptIntro
            number="04"
            title="Footer als Kontakt-Hub"
            description="Die radikalste Lösung: Es gibt keine separate CTA-Box mehr. Der Footer beginnt mit der Einladung und den drei grossen Kontaktwegen; darunter folgen Standorte, Angebot und Vertrauenssignal als zusammengehöriger Seitenabschluss."
          />
        </ConceptIntroWrapper>

        <div className="mt-12 bg-primary text-primary-foreground">
          <div className="site-container py-14 lg:py-20">
            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(34rem,1.3fr)]">
              <div>
                <p className="site-eyebrow text-accent">Wirkstattnatur</p>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  Bereit für den <em className="text-accent">ersten Schritt?</em>
                </h2>
                <p className="mt-5 max-w-xl text-primary-foreground/70">
                  Wähle den Kontaktweg, der für dich gerade am besten passt.
                </p>
              </div>
              <ContactActions />
            </div>

            <div className="mt-14 grid gap-10 bg-primary-foreground/6 p-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.9fr] lg:p-10">
              <LocationCluster />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Angebot
                </p>
                <p className="mt-4 leading-relaxed text-primary-foreground/70">
                  Personal Training · Pilates
                  <br />
                  Golf-Fitness · Karate
                </p>
              </div>
              <TrustLine />
            </div>

            <div className="mt-8 flex flex-col justify-between gap-4 text-sm text-primary-foreground/55 sm:flex-row">
              <p>© {new Date().getFullYear()} Wirkstattnatur · Urs Gremlich</p>
              <p>Thalwil · Horgen</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card">
        <div className="site-container flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-muted-foreground">
          <p>CTA- und Footer-Designvergleich · nur zur Auswahl</p>
          <Link
            to="/"
            hash="kontakt"
            className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4"
          >
            Zum aktuellen Kontaktbereich
          </Link>
        </div>
      </footer>
    </main>
  );
}

function ConceptIntroWrapper({ children }: { children: ReactNode }) {
  return <div className="site-container">{children}</div>;
}

function ConceptIntro({
  number,
  title,
  description,
  recommendation,
}: {
  number: string;
  title: string;
  description: string;
  recommendation?: string;
}) {
  return (
    <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_30rem]">
      <div>
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Variante {number}
          </p>
          {recommendation ? (
            <span className="rounded-control bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {recommendation}
            </span>
          ) : null}
        </div>
        <h2 className="mt-3 site-title-feature">{title}</h2>
      </div>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function ContactActions({
  className = "",
  light = false,
  compact = false,
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
}) {
  const actionClass = light
    ? "bg-primary text-primary-foreground shadow-card hover:-translate-y-1 hover:shadow-soft focus-visible:outline-primary"
    : "bg-accent text-accent-foreground shadow-card hover:-translate-y-1 focus-visible:outline-accent";
  const detailClass = light ? "text-primary-foreground/70" : "text-accent-foreground/70";

  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      <ContactAction
        href={phoneHref}
        icon={<PhoneIcon className="h-5 w-5" />}
        title="Anrufen"
        detail={phoneLabel}
        className={actionClass}
        detailClassName={detailClass}
        compact={compact}
      />
      <ContactAction
        href={`mailto:${email}`}
        icon={<MailIcon className="h-5 w-5" />}
        title="E-Mail schreiben"
        detail={email}
        className={actionClass}
        detailClassName={detailClass}
        compact={compact}
      />
      <ContactAction
        onClick={openTidioChat}
        icon={<ChatIcon className="h-5 w-5" />}
        title="Chat starten"
        detail="Direkt hier schreiben"
        className={actionClass}
        detailClassName={detailClass}
        compact={compact}
      />
    </div>
  );
}

function ContactAction({
  href,
  onClick,
  icon,
  title,
  detail,
  className,
  detailClassName,
  compact,
}: {
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
  title: string;
  detail: string;
  className: string;
  detailClassName: string;
  compact: boolean;
}) {
  const content = (
    <>
      <span className="flex items-center gap-2 font-semibold sm:text-lg">
        {icon}
        {title}
      </span>
      <span
        className={`mt-2 block break-all text-xs leading-relaxed ${detailClassName} ${compact ? "lg:hidden" : ""}`}
      >
        {detail}
      </span>
    </>
  );
  const sharedClass = `rounded-2xl p-5 text-left transition duration-300 ease-brand focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transform-none ${className}`;

  if (href) {
    return (
      <a href={href} className={sharedClass}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={sharedClass}>
      {content}
    </button>
  );
}

function ExpandedFooter({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-panel bg-card px-8 py-8 text-sm shadow-card sm:px-10 ${compact ? "lg:py-7" : "lg:py-10"} ${className}`}
    >
      <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <LocationCluster light />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Angebot
          </p>
          <p className="mt-4 leading-relaxed text-foreground/75">
            Personal Training · Pilates
            <br />
            Golf-Fitness · Karate
          </p>
        </div>
        <TrustLine light />
      </div>
      <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Wirkstattnatur · Urs Gremlich</p>
        <p>Thalwil · Horgen</p>
      </div>
    </div>
  );
}

function LocationCluster({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
      {locations.map((location, index) => (
        <div key={location.city}>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${
              light ? (index === 0 ? "text-primary" : "text-muted-foreground") : "text-accent"
            }`}
          >
            {location.label}
          </p>
          <p
            className={`mt-2 font-display text-2xl ${light ? "text-primary" : "text-primary-foreground"}`}
          >
            {location.city}
          </p>
          <p
            className={`mt-2 text-sm leading-relaxed ${light ? "text-muted-foreground" : "text-primary-foreground/65"}`}
          >
            {location.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

function TrustLine({ light = false }: { light?: boolean }) {
  return (
    <p
      className={`flex items-start gap-3 text-sm ${light ? "text-muted-foreground" : "text-primary-foreground/70"}`}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground"
      >
        ✓
      </span>
      Anerkannt von den Zusatzversicherungen der Krankenkassen.
    </p>
  );
}
