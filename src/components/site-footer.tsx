import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-xl font-semibold">
            Wirkstatt<span className="text-accent">natur</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Personal Training, Pilates, Golf-Fitness und Massagen mit Urs Gremlich in Thalwil & Horgen.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Angebot</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/angebot/personal-training" className="hover:text-accent">Personal Training</Link></li>
            <li><Link to="/angebot/pilates" className="hover:text-accent">Pilates</Link></li>
            <li><Link to="/angebot/golf-fitness" className="hover:text-accent">Golf-Fitness</Link></li>
            <li><Link to="/angebot/karate" className="hover:text-accent">Karate</Link></li>
            <li><Link to="/angebot/massagen" className="hover:text-accent">Massagen</Link></li>
            <li><Link to="/angebot/just-me" className="hover:text-accent">Just Me</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Standorte</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Wirkraum Thalwil<br />Zürcherstrasse 73, 8800 Thalwil</li>
            <li>Büro Horgen<br />Hernerholzgasse 30, 8810 Horgen</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="tel:+41794131830" className="hover:text-accent">079 413 18 30</a></li>
            <li><a href="mailto:info@wirkstattnatur.ch" className="hover:text-accent">info@wirkstattnatur.ch</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Wirkstattnatur · Urs Gremlich</p>
          <p>Anerkannt von den Zusatzversicherungen der Krankenkassen</p>
        </div>
      </div>
    </footer>
  );
}
