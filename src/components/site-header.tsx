import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const text = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const hover = "hover:text-accent";

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className={`font-display text-xl font-semibold tracking-tight ${text} drop-shadow`}>
          Wirkstatt<span className="text-accent">natur</span>
        </Link>
        <div className={`hidden gap-8 text-sm font-medium md:flex ${text}`}>
          <Link to="/angebot" className={hover}>Angebot</Link>
          <Link to="/ueber-mich" className={hover}>Über mich</Link>
          <Link to="/stimmen" className={hover}>Stimmen</Link>
          <Link to="/kontakt" className={hover}>Kontakt</Link>
        </div>
        <a
          href="tel:+41794131830"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg transition hover:brightness-95 md:inline-flex"
        >
          079 413 18 30
        </a>
        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-md p-2 ${text}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden mx-6 rounded-2xl bg-background/95 backdrop-blur border border-border p-4 shadow-xl">
          <div className="flex flex-col gap-3 text-sm font-medium text-foreground">
            <Link to="/angebot" onClick={() => setOpen(false)}>Angebot</Link>
            <Link to="/ueber-mich" onClick={() => setOpen(false)}>Über mich</Link>
            <Link to="/stimmen" onClick={() => setOpen(false)}>Stimmen</Link>
            <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
            <a href="tel:+41794131830" className="rounded-full bg-accent px-4 py-2 text-center text-accent-foreground">
              079 413 18 30
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
