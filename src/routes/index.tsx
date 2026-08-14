import { Link, createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/wirkstatt/hero-resistance-band.webp";
import wirkraumImg from "@/assets/wirkstatt/pilates.jpg";
import ursImg from "@/assets/wirkstatt/urs-gremlich.jpg";
import { ContactCta } from "@/components/contact-cta";
import { LocationIcon } from "@/components/contact-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { serviceOffers } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/" }],
  }),
  component: Home,
});

const googleMapsUrl =
  "https://www.google.ch/maps/place/Wirkstattnatur+-+Personal+Training+GolfFitness+Pilates+%26+Massage/@47.2860312,8.5608552,17z/data=!3m1!4b1!4m5!3m4!1s0x479aa8d2243337b5:0x50e540f490e6ac4b!8m2!3d47.2860312!4d8.5630439";

const reviews = [
  {
    author: "Florine Allimann",
    language: "en",
    text: "Urs is a very competent trainer. He has a broad knowledge and experience. He is also certified with the best education. I train there once a week in a small group and saw a difference in my posture very fast. The exercises are efficient and adapted to your personal needs. Urs also pays attention to your health condition and adapts his training. I can only recommend training at Wirkstattnatur.",
  },
  {
    author: "Boris Rauscher",
    language: "de",
    text: "Wirkstattnatur bietet ein äusserst abwechslungsreiches, persönliches und auf die individuellen Bedürfnisse adaptiertes Training, welches absolut zu empfehlen ist. Dank der professionellen Betreuung erreicht man seine Ziele rasch und mit Freude.",
  },
  {
    author: "Caroline Akkerman",
    language: "de",
    text: "Die Trainings sind sehr abwechslungsreich und Urs geht sehr auf individuelle Bedürfnisse ein, bedingt durch die Kleingruppe (wir sind zu zweit). Die Raumgestaltung ist sehr stimmig und die Gerätschaften sehr vielseitig. Wenn ich verspannt und müde vom Büroalltag ins Training gehe, fühle ich mich danach wieder lockerer und fit! Gelacht wird auch viel, Spass dabei haben ist ein Muss.",
  },
  {
    author: "Matthew Caine",
    language: "en",
    text: "The result was greater strength, greater control, ZERO back ache, correction of posture and greater well-being. Once my knee was painful (due to a hike) and he knew exactly what to do. The environment is also nice and private with a good mix of modern, traditional and playful equipment. If you are looking for a private trainer, I highly recommend Urs!",
  },
  {
    author: "Evelyn Janik",
    language: "de",
    text: "Seit bald 3 Jahren ist Urs mein Personal Trainer und geht in jeder Stunde von Neuem auf meine Bedürfnisse und mein Befinden ein! Das Training ist eine perfekte Kombination von Kraft und Ausdauer, bei dem, und das ist mir wichtig, der Spass nicht zu kurz kommt. Urs hat ein sehr breites Fachwissen, nicht nur in der Trainingslehre. Ein Profi, den ich wärmstens empfehlen kann!",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="home" />

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden bg-primary">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Urs Gremlich beim funktionellen Outdoor-Training mit einem Widerstandsband"
            className="h-full w-full object-cover object-[70%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/85" />
        </div>
        <div className="site-container flex min-h-[92vh] flex-col justify-end pb-20 pt-40 lg:pb-28">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Personal Training · Thalwil & Horgen
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-500 leading-[1.02] text-primary-foreground sm:text-6xl lg:text-8xl">
            Bewegung, die <em className="not-italic text-accent">wirkt</em> —{" "}
            <br className="hidden sm:block" />
            im Rhythmus deines Lebens.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/85 lg:text-xl">
            Kein 08/15-Programm. Wir starten dort, wo du stehst — mit einem Trainingsplan, der zu
            deinem Alltag, deiner Verfassung und deinen Zielen passt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#kontakt" className="site-button site-button-lg site-button-primary">
              Kennenlerngespräch buchen
            </a>
            <a href="#angebot" className="site-button site-button-lg site-button-ghost-inverse">
              Angebot ansehen
            </a>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section id="konzept" className="site-container site-section site-anchor">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="site-eyebrow text-muted-foreground">Das Konzept</p>
            <h2 className="site-title">
              Kraft, Ruhe und Klarheit — <em className="text-primary">für den ganzen Menschen.</em>
            </h2>
          </div>
          <div className="site-lead space-y-6 lg:col-span-7 lg:pt-4">
            <p>
              Bei mir gibt es keine Lösungen von der Stange. Ich nehme mir Zeit, deine Wünsche und
              Ziele kennenzulernen — und erstelle daraus ein Trainingsprogramm, das sich wirklich an
              dir orientiert.
            </p>
            <p>
              Bewegung ist wichtig. Ruhephasen ebenso. Gemeinsam finden wir die Balance, damit du
              motiviert bleibst, Überlastung vermeidest und langfristig Fortschritte spürst.
            </p>
            <ul className="grid gap-4 pt-4 sm:grid-cols-2">
              {[
                "Persönlicher Trainingsplan",
                "Kraft, Mobilität, Entspannung",
                "Gezielte Regenerationszeiten",
                "Anerkannt von Zusatzversicherungen",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    ✓
                  </span>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="angebot" className="site-anchor bg-primary text-primary-foreground">
        <div className="site-container site-section">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="site-eyebrow text-accent">Angebot</p>
              <h2 className="site-title-feature max-w-2xl">
                Vier Wege, wie du dich <em className="text-accent">stärker fühlst.</em>
              </h2>
            </div>
            <p className="max-w-md text-primary-foreground/70">
              Ob Einstieg oder nächstes Level — jedes Angebot kombiniert Bewegung, Fokus und
              Regeneration zu einem stimmigen Ganzen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceOffers.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                aria-label={`${service.title} entdecken`}
                className="offer-card group relative isolate flex min-h-[19rem] overflow-hidden rounded-[2rem] bg-white/5 p-7 ring-1 ring-white/12 transition duration-500 hover:-translate-y-1 hover:ring-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none sm:min-h-[21rem]"
              >
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: service.imagePosition }}
                  className="offer-card-image absolute inset-0 -z-20 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/40 to-primary/5 transition duration-500 group-hover:from-primary/95" />
                <div className="mt-auto max-w-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl">{service.title}</h3>
                  <div className="offer-card-details">
                    <div className="overflow-hidden">
                      <p className="pt-4 text-sm leading-relaxed text-primary-foreground/80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER QUOTE */}
      <section className="site-container site-section">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="site-eyebrow mb-6 text-muted-foreground">Urs Gremlich</p>
            <blockquote className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              «Ich habe nicht nur Trainingsziele im Blick, sondern den ganzen Menschen. Wenn
              Bewegung, Gesundheit und Entspannung zusammenkommen,
              <em className="text-primary"> verändert sich mehr als nur die Fitness.</em>»
            </blockquote>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Wirkraum Thalwil auf Google Maps öffnen"
            className="group relative overflow-hidden rounded-panel shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:col-span-5"
          >
            <img
              src={wirkraumImg}
              alt="Heller Wirkraum in Thalwil mit blauen Trainingsmatten"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 ease-brand group-hover:scale-[1.02] motion-reduce:transform-none"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-primary/90 p-4 text-primary-foreground backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-8 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <LocationIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-xl transition group-hover:text-accent sm:text-2xl">
                    Wirkraum Thalwil
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/75">
                    Zürcherstrasse 73 · 8800 Thalwil
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ABOUT URS */}
      <section id="urs" className="site-anchor bg-card">
        <div className="site-container site-section grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative overflow-hidden rounded-panel bg-secondary shadow-soft lg:col-span-5">
            <img
              src={ursImg}
              alt="Urs Gremlich im Freien vor einem Holzstapel"
              loading="lazy"
              className="aspect-[4/5] h-full w-full object-cover"
              style={{ objectPosition: "22% center" }}
            />
            <blockquote className="absolute inset-x-5 bottom-5 rounded-2xl bg-primary/90 p-5 font-display text-xl leading-snug text-primary-foreground backdrop-blur-sm sm:text-2xl">
              «Respektvoll fördern und fordern: Das ist meine Devise.»
            </blockquote>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 lg:py-6">
            <p className="site-eyebrow text-muted-foreground">Über mich</p>
            <h2 className="site-title-feature max-w-2xl">
              Erfahrung, die <em className="text-primary">persönlich bleibt.</em>
            </h2>
            <div className="site-lead mt-8 max-w-2xl space-y-5">
              <p>
                Ich begleite Menschen auf Deutsch und Englisch. Als Kampfkünstler mit
                Wettkampferfahrung verbinde ich fundiertes Fachwissen mit einem feinen Gespür für
                die Person vor mir.
              </p>
              <p>
                Bewegung, Entspannung und Ernährung gehören für mich zusammen. Vertrauen, Humor und
                Lebensfreude bilden die Basis — Qualität steht dabei immer vor Quantität.
              </p>
            </div>

            <div className="mt-8 max-w-2xl border-l-2 border-accent pl-6">
              <p className="font-display text-4xl leading-none text-primary sm:text-5xl">
                45+ Jahre
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Trainingserfahrung
              </p>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Ausgewählte Qualifikationen
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm font-medium sm:grid-cols-2">
                {[
                  "FA Bewegungstrainer Level 1 BGB",
                  "Trainer Bewegung & Gesundheit",
                  "GolfFitness-Trainer, Albatros Methode",
                  "Karatelehrer, 3. Dan",
                  "Pilates Care",
                  "Wirbelsäulentherapeut",
                ].map((qualification) => (
                  <li key={qualification} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 flex-none rounded-full bg-accent" />
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stimmen" className="site-anchor bg-secondary/60">
        <div className="site-container site-section">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="site-eyebrow text-muted-foreground">Kundenstimmen</p>
              <h2 className="site-title">Was andere sagen.</h2>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Wirkstattnatur: durchschnittlich 5 von 5 Sternen auf Google Maps"
                className="site-card site-card-interactive group inline-flex items-center gap-3 rounded-full px-5 py-3"
              >
                <span className="font-display text-3xl font-semibold leading-none text-primary">
                  5,0
                </span>
                <span>
                  <span className="block tracking-wider text-amber-500" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className="block text-xs text-muted-foreground">von 5 auf Google Maps</span>
                </span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent-foreground"
              >
                Alle Rezensionen auf Google Maps →
              </a>
            </div>
          </div>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {reviews.map((review) => (
              <a
                key={review.author}
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Google-Rezension von ${review.author} öffnen`}
                className="site-card site-card-interactive group mb-6 block break-inside-avoid p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
                    {review.author.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold">{review.author}</h3>
                    <p
                      className="mt-1 flex items-center gap-2 text-sm"
                      aria-label="5 von 5 Sternen auf Google Maps"
                    >
                      <span className="tracking-wider text-amber-500" aria-hidden="true">
                        ★★★★★
                      </span>
                      <span className="text-muted-foreground">Auszug · Google Maps</span>
                    </p>
                  </div>
                </div>
                <blockquote
                  lang={review.language}
                  className="mt-6 text-base leading-relaxed text-foreground/85"
                >
                  «{review.text}»
                </blockquote>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="kontakt" className="site-anchor relative overflow-hidden">
        <div className="site-container pt-24 lg:pt-32">
          <ContactCta
            title={
              <>
                Ein erster Schritt.
                <em className="block text-accent">Ganz unverbindlich.</em>
              </>
            }
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
