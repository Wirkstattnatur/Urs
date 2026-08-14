import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const legalLinks = [
  { label: "AGB", to: "/agb" },
  { label: "Datenschutz", to: "/datenschutz" },
  { label: "Impressum", to: "/impressum" },
] as const;

type LegalPageProps = {
  children: ReactNode;
  currentPath: (typeof legalLinks)[number]["to"];
  description: string;
  title: string;
};

export function LegalPage({ children, currentPath, description, title }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="primary" />
      <main>
        <header className="bg-primary pb-18 pt-36 text-primary-foreground lg:pb-24 lg:pt-44">
          <div className="site-container grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="site-eyebrow text-accent">Rechtliches</p>
              <h1 className="site-title-feature max-w-3xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
                {description}
              </p>
            </div>
            <nav aria-label="Rechtliche Seiten" className="flex flex-wrap gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={currentPath === link.to ? "page" : undefined}
                  className="rounded-control px-5 py-2.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary-foreground/35 transition hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent aria-[current=page]:bg-primary-foreground aria-[current=page]:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <section className="site-container py-16 lg:py-24">
          <article className="legal-prose mx-auto max-w-4xl">{children}</article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
