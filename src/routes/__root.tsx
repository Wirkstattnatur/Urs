import {
  Outlet,
  Link,
  createRootRoute,
  useLocation,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { detectSystemLocale, getLocaleFromPath, readLocalePreference } from "@/lib/locale";
import { getSiteGraph, jsonLdScript } from "@/lib/seo";
import { loadTidio } from "@/lib/tidio";

const brandGreen = "#294f3d";

function NotFoundComponent() {
  const location = useLocation();
  const isEnglish = getLocaleFromPath(location.pathname) === "en";

  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-background px-4"
    >
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {isEnglish ? "Page not found" : "Seite nicht gefunden"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {isEnglish
            ? "This page does not exist or has been moved."
            : "Diese Seite existiert nicht oder wurde verschoben."}
        </p>
        <div className="mt-6">
          <Link
            to={isEnglish ? "/en" : "/"}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isEnglish ? "Back to home" : "Zur Startseite"}
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const location = useLocation();
  const isEnglish = getLocaleFromPath(location.pathname) === "en";

  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-background px-4"
    >
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {isEnglish ? "The page could not be loaded" : "Die Seite konnte nicht geladen werden"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isEnglish
            ? "An error occurred. Please refresh the page or return to the home page."
            : "Es ist ein Fehler aufgetreten. Bitte lade die Seite neu oder gehe zurück zur Startseite."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isEnglish ? "Try again" : "Erneut versuchen"}
          </button>
          <a
            href={isEnglish ? "/en" : "/"}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {isEnglish ? "Back to home" : "Zur Startseite"}
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: brandGreen },
    ],
    scripts: [jsonLdScript(getSiteGraph())],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);

  return (
    <html lang={locale === "en" ? "en" : "de-CH"}>
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main-content" className="site-skip-link">
          {locale === "en" ? "Skip to content" : "Zum Inhalt springen"}
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();

  useEffect(() => {
    void loadTidio();
  }, []);

  useEffect(() => {
    const locale = getLocaleFromPath(location.pathname);
    document.documentElement.lang = locale === "en" ? "en" : "de-CH";

    const automatedUserAgent = /bot|crawler|spider|slurp|bingpreview|mediapartners/i.test(
      navigator.userAgent,
    );

    if (
      location.pathname === "/" &&
      !window.location.hash &&
      !readLocalePreference() &&
      detectSystemLocale() === "en" &&
      !automatedUserAgent
    ) {
      window.location.replace("/en");
    }
  }, [location.pathname]);

  return <Outlet />;
}
