import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/locale";

const legalLinks = {
  de: [
    { label: "AGB", to: "/agb" },
    { label: "Datenschutz", to: "/datenschutz" },
    { label: "Impressum", to: "/impressum" },
  ],
  en: [
    { label: "Terms and conditions", to: "/en/agb" },
    { label: "Privacy policy", to: "/en/datenschutz" },
    { label: "Legal notice", to: "/en/impressum" },
  ],
} as const;

type LegalPageProps = {
  children: ReactNode;
  currentPath: string;
  description: string;
  locale?: Locale;
  title: string;
};

export function LegalPage({
  children,
  currentPath,
  description,
  locale = "de",
  title,
}: LegalPageProps) {
  const isEnglish = locale === "en";
  const links = legalLinks[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="primary" />
      <main id="main-content">
        <header className="bg-primary pb-18 pt-36 text-primary-foreground lg:pb-24 lg:pt-44">
          <div className="site-container grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="site-eyebrow text-accent">
                {isEnglish ? "Legal information" : "Rechtliches"}
              </p>
              <h1 className="site-title-feature max-w-3xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
                {description}
              </p>
            </div>
            <nav
              aria-label={isEnglish ? "Legal pages" : "Rechtliche Seiten"}
              className="flex flex-wrap gap-2"
            >
              {links.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  aria-current={currentPath === link.to ? "page" : undefined}
                  className="rounded-control px-5 py-2.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary-foreground/35 transition hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent aria-[current=page]:bg-primary-foreground aria-[current=page]:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="site-container py-16 lg:py-24">
          <article className="legal-prose mx-auto">{children}</article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
