import { Link } from "@tanstack/react-router";
import { ChatIcon, LocationIcon, MailIcon, PhoneIcon } from "@/components/contact-icons";
import { serviceOffers } from "@/lib/services";
import { openTidioChat } from "@/lib/tidio";

const locations = [
  {
    label: "Wirkraum",
    city: "Thalwil",
    address: ["Zürcherstrasse 73", "8800 Thalwil"],
    featured: true,
  },
  {
    label: "Büro & Lieferadresse",
    city: "Horgen",
    address: ["Hernerholzgasse 30", "8810 Horgen"],
    featured: false,
  },
] as const;

const pageLinks = [
  { label: "Startseite", href: "/" },
  { label: "Das Konzept", href: "/#konzept" },
  { label: "Angebot", href: "/#angebot" },
  { label: "Über mich", href: "/#urs" },
  { label: "Stimmen", href: "/#stimmen" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-card lg:mt-12">
      <div className="site-container py-12 text-sm lg:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr_0.75fr] lg:gap-14">
          <div>
            <Link to="/" className="inline-block font-display text-2xl text-primary">
              Wirkstatt<span className="text-accent-foreground">natur</span>
            </Link>

            <div className="mt-5 rounded-2xl bg-secondary/60 p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <LocationIcon className="h-3.5 w-3.5" />
                </span>
                <p className="font-display text-xl text-primary">Standorte</p>
              </div>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-6">
                {locations.map((location) => (
                  <div key={location.city}>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.14em] ${location.featured ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {location.label}
                    </p>
                    <p className="mt-1.5 font-display text-xl text-primary">{location.city}</p>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {location.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <nav aria-label="Sitemap">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Sitemap
            </p>
            <div className="mt-4 grid grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-foreground">Übersicht</p>
                <ul className="mt-3 grid gap-2.5 text-muted-foreground">
                  {pageLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition hover:text-primary">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">Angebote</p>
                <ul className="mt-3 grid gap-2.5 text-muted-foreground">
                  {serviceOffers.map((service) => (
                    <li key={service.path}>
                      <Link to={service.path} className="transition hover:text-primary">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Kontakt
            </p>
            <div className="mt-4 grid gap-3">
              <a
                href="tel:+41794131830"
                className="inline-flex items-center gap-2.5 font-semibold text-primary transition hover:text-accent-foreground"
              >
                <PhoneIcon className="h-4 w-4" />
                079 413 18 30
              </a>
              <a
                href="mailto:info@wirkstattnatur.ch"
                className="inline-flex items-center gap-2.5 font-semibold text-primary transition hover:text-accent-foreground"
              >
                <MailIcon className="h-4 w-4" />
                info@wirkstattnatur.ch
              </a>
              <button
                type="button"
                onClick={openTidioChat}
                className="inline-flex w-fit items-center gap-2.5 font-semibold text-primary transition hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <ChatIcon className="h-4 w-4" />
                Chat starten
              </button>
            </div>

            <p className="mt-7 flex items-start gap-3 text-muted-foreground">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground"
              >
                ✓
              </span>
              Anerkannt von den Zusatzversicherungen der Krankenkassen.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Wirkstattnatur · Urs Gremlich</p>
          <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/agb" className="transition hover:text-primary">
              AGB
            </Link>
            <Link to="/datenschutz" className="transition hover:text-primary">
              Datenschutz
            </Link>
            <Link to="/impressum" className="transition hover:text-primary">
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
