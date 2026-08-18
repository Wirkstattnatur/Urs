import { useLocation } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { PhoneIcon } from "@/components/contact-icons";
import { GlobeIcon } from "@/components/language-icon";
import { getLocaleFromPath, persistLocalePreference, type Locale } from "@/lib/locale";
import { serviceOffers, type ServiceDetail } from "@/lib/services";
import { getLocalizedService } from "@/lib/services-en";

const primaryNavigation = [
  { id: "konzept", label: "Das Konzept" },
  { id: "urs", label: "Über mich" },
  { id: "stimmen", label: "Stimmen" },
  { id: "kontakt", label: "Kontakt" },
] as const;

const englishNavigation = [
  { id: "konzept", label: "Concept" },
  { id: "urs", label: "About me" },
  { id: "stimmen", label: "Reviews" },
  { id: "kontakt", label: "Contact" },
] as const;

type SiteHeaderProps = {
  variant?: "home" | "primary" | "surface";
  currentServicePath?: ServiceDetail["path"];
};

export function SiteHeader({ variant = "surface", currentServicePath }: SiteHeaderProps) {
  const location = useLocation();
  const [offersOpen, setOffersOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const offersId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const mobileSummaryRef = useRef<HTMLElement>(null);
  const isInverse = variant !== "surface";
  const isEnglish = getLocaleFromPath(location.pathname) === "en";
  const locale: Locale = isEnglish ? "en" : "de";
  const navigation = isEnglish ? englishNavigation : primaryNavigation;
  const homePath = isEnglish ? "/en" : "/";
  const sectionPrefix = variant === "home" ? "" : homePath;

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

  useEffect(() => {
    function closeMobileMenuOnOutsidePointer(event: PointerEvent) {
      const menu = mobileMenuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.open = false;
      }
    }

    function closeMobileMenuOnEscape(event: KeyboardEvent) {
      const menu = mobileMenuRef.current;
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        mobileSummaryRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeMobileMenuOnOutsidePointer);
    document.addEventListener("keydown", closeMobileMenuOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeMobileMenuOnOutsidePointer);
      document.removeEventListener("keydown", closeMobileMenuOnEscape);
    };
  }, []);

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
        aria-label={isEnglish ? "Main navigation" : "Hauptnavigation"}
      >
        <a
          href={`${homePath}#top`}
          aria-label={isEnglish ? "Wirkstattnatur homepage" : "Wirkstattnatur Startseite"}
          className={`font-display text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${foregroundClass}`}
        >
          Wirkstatt
          <span className={isInverse ? "text-accent" : "text-accent-foreground"}>natur</span>
        </a>

        <div className={`hidden items-center gap-7 text-sm font-medium lg:flex ${foregroundClass}`}>
          <a href={`${sectionPrefix}#konzept`} className={`transition ${hoverClass}`}>
            {isEnglish ? "Concept" : "Das Konzept"}
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
              {isEnglish ? "Services" : "Angebot"}
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
                    {isEnglish ? "All services" : "Alle Angebote"}
                  </a>
                  <div className="mt-1 grid gap-1">
                    {serviceOffers.map((service) => {
                      const localizedService = getLocalizedService(service, locale);
                      const servicePath = isEnglish ? `/en${service.path}` : service.path;

                      return (
                        <a
                          key={service.path}
                          href={servicePath}
                          aria-current={currentServicePath === service.path ? "page" : undefined}
                          onClick={() => setOffersOpen(false)}
                          className="rounded-xl px-4 py-3 transition hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none aria-[current=page]:bg-secondary"
                        >
                          <span className="block text-sm font-semibold">
                            {localizedService.title}
                          </span>
                          <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                            {localizedService.eyebrow}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {navigation.slice(1).map((item) => (
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
          <div className="hidden lg:block">
            <LanguageSwitch
              pathname={location.pathname}
              isEnglish={isEnglish}
              isInverse={isInverse}
            />
          </div>

          <a
            href="tel:+41794131830"
            className="hidden shrink-0 items-center gap-2 rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-card transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent xl:inline-flex"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            079 413 18 30
          </a>

          <details ref={mobileMenuRef} className="group relative lg:hidden">
            <summary
              ref={mobileSummaryRef}
              className={`cursor-pointer list-none rounded-control px-4 py-3 text-sm font-semibold ring-1 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden ${
                isInverse
                  ? "bg-primary-foreground/10 text-primary-foreground ring-primary-foreground/30 hover:bg-primary-foreground/20"
                  : "bg-secondary text-primary ring-border hover:bg-card"
              }`}
            >
              <span className="flex items-center gap-2">
                {isEnglish ? "Menu" : "Menü"}
                <ChevronIcon />
              </span>
            </summary>

            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-card p-3 text-foreground shadow-soft ring-1 ring-border">
              <a
                href={`${sectionPrefix}#konzept`}
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
              >
                {isEnglish ? "Concept" : "Das Konzept"}
              </a>

              <div className="my-1 rounded-xl bg-secondary/60 p-2">
                <a
                  href={`${sectionPrefix}#angebot`}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition hover:bg-card focus-visible:bg-card focus-visible:outline-none"
                >
                  {isEnglish ? "Services" : "Angebot"}
                </a>
                {serviceOffers.map((service) => {
                  const localizedService = getLocalizedService(service, locale);
                  const servicePath = isEnglish ? `/en${service.path}` : service.path;

                  return (
                    <a
                      key={service.path}
                      href={servicePath}
                      aria-current={currentServicePath === service.path ? "page" : undefined}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-card focus-visible:bg-card focus-visible:outline-none aria-[current=page]:bg-card"
                    >
                      {localizedService.title}
                    </a>
                  );
                })}
              </div>

              {navigation.slice(1).map((item) => (
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

          <div className="lg:hidden">
            <LanguageSwitch
              pathname={location.pathname}
              isEnglish={isEnglish}
              isInverse={isInverse}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

function LanguageSwitch({
  pathname,
  isEnglish,
  isInverse,
}: {
  pathname: string;
  isEnglish: boolean;
  isInverse: boolean;
}) {
  const nextLocale = isEnglish ? "de" : "en";
  const href = getLocalizedPath(pathname, nextLocale);

  return (
    <a
      href={href}
      onClick={() => persistLocalePreference(nextLocale)}
      aria-label={isEnglish ? "Switch to German" : "Auf Englisch wechseln"}
      className={`inline-flex items-center gap-2 rounded-control px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition ring-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        isInverse
          ? "bg-primary-foreground/10 text-accent ring-primary-foreground/25 hover:bg-primary-foreground/15"
          : "bg-secondary text-accent-foreground ring-border hover:bg-card"
      }`}
    >
      <GlobeIcon className="h-3.5 w-3.5" />
      {nextLocale === "en" ? "EN" : "DE"}
    </a>
  );
}

function getLocalizedPath(pathname: string, locale: Locale): string {
  if (locale === "en") {
    if (pathname === "/") return "/en";
    return pathname.startsWith("/en") ? pathname : `/en${pathname}`;
  }

  if (pathname === "/en") return "/";
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
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
