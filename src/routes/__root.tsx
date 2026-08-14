import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import socialImage from "../assets/wirkstatt/hero.jpg";
import appCss from "../styles.css?url";

const siteUrl = "https://wirkstattnatur.ch";
const socialImageUrl = new URL(socialImage, siteUrl).toString();
const brandGreen = "#294f3d";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Die Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Es ist ein Fehler aufgetreten. Bitte lade die Seite neu oder gehe zurück zur Startseite.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wirkstattnatur — Personal Training in Thalwil & Horgen" },
      {
        name: "description",
        content:
          "Personal Training, Pilates, Golf-Fitness und Karate mit Urs Gremlich. Individuell begleitet — für mehr Kraft, Beweglichkeit und Lebensqualität.",
      },
      { property: "og:title", content: "Wirkstattnatur — Personal Training in Thalwil & Horgen" },
      {
        property: "og:description",
        content:
          "Individuelles Training, das zu deinem Leben passt. Kraft, Mobilität, Entspannung.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wirkstattnatur" },
      { property: "og:locale", content: "de_CH" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: socialImageUrl },
      { property: "og:image:width", content: "1399" },
      { property: "og:image:height", content: "704" },
      {
        property: "og:image:alt",
        content: "Urs Gremlich beim Personal Training in der Wirkstattnatur",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: socialImageUrl },
      { name: "theme-color", content: brandGreen },
    ],
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
  return (
    <html lang="de-CH">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
