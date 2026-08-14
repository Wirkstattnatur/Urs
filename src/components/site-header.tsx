import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { PhoneIcon } from "@/components/contact-icons";
import { serviceOffers, type ServiceDetail } from "@/lib/services";

const primaryNavigation = [
  { id: "konzept", label: "Das Konzept" },
  { id: "urs", label: "Über mich" },
  { id: "stimmen", label: "Stimmen" },
  { id: "kontakt", label: "Kontakt" },
] as const;

type SiteHeaderProps = {
  variant?: "home" | "primary" | "surface";
  currentServicePath?: ServiceDetail["path"];
};

export function SiteHeader({ variant = "surface", currentServicePath }: SiteHeaderProps) {
  const [offersOpen, setOffersOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const offersId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const sectionPrefix = variant === "home" ? "" : "/";
  const isHome = variant === "home";
  const isInverse = variant !== "surface";

  useEffect(() => {
    function updateHeaderSurface() {
      setHasScrolled(window.scrollY > 8);
    }

    updateHeaderSurface();
    window.addEventListener("scroll", updateHeaderSurface, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderSurface);
  }, []);

  useEffect(() => {
    if (!offersOpen) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOffersOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOffersOpen(false);
        dropdownButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [offersOpen]);

  const foregroundClass = isInverse ? "text-primary-foreground" : "text-foreground";
  const hoverClass = isInverse ? "hover:text-accent" : "hover:text-primary";

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-brand ${
        isInverse ? "-mb-20" : ""
      } ${
        hasScrolled
          ? isInverse
            ? "bg-primary/95 shadow-card backdrop-blur-xl"
            : "bg-background/95 shadow-card backdrop-blur-xl"
          : "bg-transparent shadow-none"
      }`}
    >
      <nav
        className="site-container flex h-20 items-center justify-between"
        aria-label="Hauptnavigation"
      >
        <Link
          to="/"
          hash="top"
          aria-label="Wirkstattnatur Startseite"
          className={`font-display text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${foregroundClass}`}
        >
          Wirkstatt
          <span className={isInverse ? "text-accent" : "text-accent-foreground"}>natur</span>
        </Link>

        <div className={`hidden items-center gap-7 text-sm font-medium lg:flex ${foregroundClass}`}>
          <a href={`${sectionPrefix}#konzept`} className={`transition ${hoverClass}`}>
            Das Konzept
          </a>

          <div ref={dropdownRef} className="relative">
            <button
              ref={dropdownButtonRef}
              type="button"
              aria-expanded={offersOpen}
              aria-controls={offersId}
              onClick={() => setOffersOpen((open) => !open)}
              className={`flex items-center gap-1.5 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${hoverClass}`}
            >
              Angebot
              <ChevronIcon open={offersOpen} />
            </button>

            {offersOpen ? (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4">
                <div
                  id={offersId}
                  className="rounded-2xl bg-card p-3 text-foreground shadow-soft ring-1 ring-border"
                >
                  <a
                    href={`${sectionPrefix}#angebot`}
                    onClick={() => setOffersOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
                  >
                    Alle Angebote
                  </a>
                  <div className="mt-1 grid gap-1">
                    {serviceOffers.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        aria-current={currentServicePath === service.path ? "page" : undefined}
                        onClick={() => setOffersOpen(false)}
                        className="rounded-xl px-4 py-3 transition hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none aria-[current=page]:bg-secondary"
                      >
                        <span className="block text-sm font-semibold">{service.title}</span>
                        <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                          {service.eyebrow}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {primaryNavigation.slice(1).map((item) => (
            <a
              key={item.id}
              href={`${sectionPrefix}#${item.id}`}
              className={`transition ${hoverClass}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+41794131830"
            className="hidden shrink-0 items-center gap-2 rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-card transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent xl:inline-flex"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            079 413 18 30
          </a>

          <details className="group relative lg:hidden">
            <summary
              className={`cursor-pointer list-none rounded-control px-4 py-2.5 text-sm font-semibold ring-1 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden ${
                isInverse
                  ? "bg-primary-foreground/10 text-primary-foreground ring-primary-foreground/30 hover:bg-primary-foreground/20"
                  : "bg-secondary text-primary ring-border hover:bg-card"
              }`}
            >
              <span className="flex items-center gap-2">
                Menü
                <ChevronIcon />
              </span>
            </summary>

            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-card p-3 text-foreground shadow-soft ring-1 ring-border">
              <a
                href={`${sectionPrefix}#konzept`}
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
              >
                Das Konzept
              </a>

              <div className="my-1 rounded-xl bg-secondary/60 p-2">
                <a
                  href={`${sectionPrefix}#angebot`}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition hover:bg-card focus-visible:bg-card focus-visible:outline-none"
                >
                  Angebot
                </a>
                {serviceOffers.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    aria-current={currentServicePath === service.path ? "page" : undefined}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold transition hover:bg-card focus-visible:bg-card focus-visible:outline-none aria-[current=page]:bg-card"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>

              {primaryNavigation.slice(1).map((item) => (
                <a
                  key={item.id}
                  href={`${sectionPrefix}#${item.id}`}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="tel:+41794131830"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                079 413 18 30
              </a>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
      className={`transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : "group-open:rotate-180"}`}
    >
      <path
        d="m4 6 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}
