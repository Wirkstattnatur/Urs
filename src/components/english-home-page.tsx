import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/wirkstatt/hero-stairs.webp";
import parkingImg from "@/assets/wirkstatt/parking-wirkstattnatur.webp";
import ursGoalImg from "@/assets/wirkstatt/urs-goal.webp";
import ursImg from "@/assets/wirkstatt/urs-gremlich.jpg";
import { ContactCta } from "@/components/contact-cta";
import { LocationIcon } from "@/components/contact-icons";
import { ReviewCard } from "@/components/review-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { serviceOffers } from "@/lib/services";
import { getLocalizedService } from "@/lib/services-en";
import { googleMapsUrl } from "@/lib/seo";

const reviews = [
  {
    author: "Florine Allimann",
    text: "Urs is a very competent trainer. He has a broad knowledge and experience. He is also certified with the best education. I train there once a week in a small group and saw a difference in my posture very fast. The exercises are efficient and adapted to your personal needs. Urs also pays attention to your health condition and adapts his training. I can only recommend training at Wirkstattnatur.",
  },
  {
    author: "Boris Rauscher",
    text: "Wirkstattnatur offers extremely varied, personal training tailored to individual needs, which I can thoroughly recommend. Thanks to the professional guidance, you reach your goals quickly and with joy.",
  },
  {
    author: "Caroline Akkerman",
    text: "The training sessions are very varied and Urs really attends to individual needs, facilitated by the small group (there are two of us). The studio design is harmonious and the equipment is very versatile. When I arrive at training feeling tense and tired from office life, I leave feeling relaxed and fit again! We also laugh a lot — having fun is a must.",
  },
  {
    author: "Matthew Caine",
    text: "The result was greater strength, greater control, ZERO back ache, correction of posture and greater well-being. Once my knee was painful (due to a hike) and he knew exactly what to do. The environment is also nice and private with a good mix of modern, traditional and playful equipment. If you are looking for a private trainer, I highly recommend Urs!",
  },
  {
    author: "Evelyn Janik",
    text: "Urs has been my personal trainer for nearly 3 years and responds afresh to my needs and how I'm feeling in every single session! The training is a perfect combination of strength and endurance, and importantly, having fun is never neglected. Urs has a wide range of expertise, not just in training theory. A true professional whom I warmly recommend!",
  },
  {
    author: "Joanna Bielenia",
    text: "Dear Urs, I would like to thank you warmly once again for your professional guidance and support during our training sessions together. When I began training with you, my body was still very weak after my accident. Despite an extended period of physiotherapy and osteopathic treatment, I lacked physical strength, and my overall condition was at a very low level. Thanks to your expert and individually tailored support, my health has improved significantly. Every session was varied, engaging, and perfectly adapted to my physical condition at the time. At the same time, you managed to create a positive and motivating atmosphere in every session. I greatly appreciated your professionalism, your deep expertise, and your pleasant, humorous manner. Working with you was not only effective, but also a great pleasure. I would like to thank you from the bottom of my heart for your support, your dedication, and your patience. I can recommend you as a trainer without reservation and wish you continued success and all the best. Warm regards Jo",
  },
] as const;

const reviewColumns = [
  [reviews[0], reviews[1]],
  [reviews[2], reviews[3]],
  [reviews[4], reviews[5]],
] as const;

const reviewColumnMotion = [
  { offset: 0, depth: -12 },
  { offset: 28, depth: 16 },
  { offset: 12, depth: -8 },
] as const;

const reviewLabels = {
  collapse: "Show less",
  expand: "Read more",
  excerpt: "Excerpt",
  googleLink: "Google Maps",
  stars: "5 out of 5 stars on Google Maps",
} as const;

function ReviewGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const gridElement = grid;

    const wideViewport = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const columns = Array.from(grid.querySelectorAll<HTMLElement>("[data-review-column]"));
    let animationFrame = 0;

    function updateColumns() {
      animationFrame = 0;
      const isWide = wideViewport.matches;
      const rect = gridElement.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const gridCenter = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (gridCenter - viewportCenter) / viewportCenter));

      columns.forEach((column, index) => {
        const motion = reviewColumnMotion[index];
        if (!motion) return;

        const parallax = isWide && !reducedMotion.matches ? progress * motion.depth : 0;
        const offset = isWide ? motion.offset + parallax : 0;
        column.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    }

    function scheduleUpdate() {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateColumns);
      }
    }

    updateColumns();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    wideViewport.addEventListener("change", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      wideViewport.removeEventListener("change", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <div ref={gridRef} className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:pb-10">
      {reviewColumns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          data-review-column
          className="grid content-start gap-6 lg:will-change-transform"
        >
          {column.map((review) => (
            <ReviewCard
              key={review.author}
              review={review}
              labels={reviewLabels}
              quotationMarks={["“", "”"]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function EnglishHomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="home" />

      <main id="main-content">
        {/* HERO */}
        <section id="top" className="relative isolate overflow-hidden bg-primary">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroImg}
              alt="Urs Gremlich running on a leafy staircase"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[8%_center] lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/55 to-primary/90 lg:bg-gradient-to-r lg:from-primary/85 lg:via-primary/55 lg:to-primary/35" />
          </div>
          <div className="site-container flex min-h-[92vh] flex-col justify-end pb-20 pt-40 lg:pb-28">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-control bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent ring-1 ring-primary-foreground/25">
                Personal Training
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                <LocationIcon className="h-4 w-4 text-accent" />
                Thalwil & Horgen
              </span>
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-500 leading-[1.02] text-primary-foreground sm:text-6xl lg:text-8xl">
              Movement that <em className="not-italic text-accent">works</em> —{" "}
              <br className="hidden sm:block" />
              in the rhythm of your life
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-primary-foreground/85 lg:text-xl">
              No one-size-fits-all programme. We start where you are — with a training plan that
              fits your everyday life, your condition and your goals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#kontakt" className="site-button site-button-lg site-button-primary">
                Book an initial consultation
              </a>
              <a href="#angebot" className="site-button site-button-lg site-button-ghost-inverse">
                Explore services
              </a>
            </div>
          </div>
        </section>

        {/* CONCEPT */}
        <section id="konzept" className="site-container site-section site-anchor">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="site-eyebrow text-muted-foreground">Concept</p>
              <h2 className="site-title">
                Strength, calm and clarity — <em className="text-primary">for the whole person</em>
              </h2>
            </div>
            <div className="site-lead space-y-6 lg:col-span-7 lg:pt-4">
              <p>
                There are no off-the-shelf solutions here. I take the time to understand your wishes
                and goals — and create a training programme tailored around you.
              </p>
              <p>
                Movement is important. Rest and recovery just as much so. Together we find the
                balance to keep you motivated, avoid overload and feel long-term progress.
              </p>
              <ul className="grid gap-4 pt-4 sm:grid-cols-2">
                {[
                  "Personal training plan",
                  "Strength, mobility, relaxation",
                  "Targeted recovery periods",
                  "Recognised by supplementary insurance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
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
                <p className="site-eyebrow text-accent">Services</p>
                <h2 className="site-title-feature max-w-2xl">
                  Four ways to feel <em className="text-accent">stronger</em>
                </h2>
              </div>
              <p className="max-w-md text-primary-foreground/70">
                Whether starting out or taking the next step — every service combines movement,
                focus and recovery into a coherent whole.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {serviceOffers.map((service) => {
                const localized = getLocalizedService(service, "en");
                return (
                  <Link
                    key={service.slug}
                    to={`/en${service.path}`}
                    aria-label={`Discover ${localized.title}`}
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
                        {localized.eyebrow}
                      </p>
                      <h3 className="mt-3 font-display text-3xl">{localized.title}</h3>
                      <div className="offer-card-details">
                        <div className="overflow-hidden">
                          <p className="pt-4 text-sm leading-relaxed text-primary-foreground/80">
                            {localized.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRAINER QUOTE */}
        <section className="site-container site-section">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="site-eyebrow mb-6 text-muted-foreground">Urs Gremlich</p>
              <blockquote className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                “I don’t just keep training goals in sight, but the whole person. When movement,
                health and relaxation come together,{" "}
                <em className="text-primary">more than just fitness changes.</em>”
              </blockquote>
            </div>
            <div className="relative overflow-hidden rounded-panel bg-secondary shadow-soft lg:col-span-5">
              <img
                src={ursGoalImg}
                alt="Urs Gremlich carrying a child at the basketball hoop"
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
                style={{ objectPosition: "center 48%" }}
              />
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-panel bg-primary text-primary-foreground shadow-soft lg:mt-20 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
            <img
              src={parkingImg}
              alt="Customer parking at the Wirkraum in Thalwil"
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
              style={{ objectPosition: "center center" }}
            />
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="site-eyebrow text-accent">Location</p>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Wirkraum Thalwil</h2>
              <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/75">
                The Wirkraum is located at Zürcherstrasse 73 in Thalwil.
              </p>
              <div className="mt-6 flex items-start gap-3">
                <span className="flex size-8 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <LocationIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">Zürcherstrasse 73 · 8800 Thalwil</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Parking space no. 51 reserved for customers
                  </p>
                </div>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="site-button site-button-md site-button-ghost-inverse mt-8 self-start"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT URS */}
        <section id="urs" className="site-anchor bg-card">
          <div className="site-container site-section grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative overflow-hidden rounded-panel bg-secondary shadow-soft lg:col-span-5">
              <img
                src={ursImg}
                alt="Urs Gremlich outdoors in front of a stack of wood"
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
                style={{ objectPosition: "22% center" }}
              />
              <blockquote className="absolute inset-x-5 bottom-5 rounded-2xl bg-primary/90 p-5 font-display text-xl leading-snug text-primary-foreground backdrop-blur-sm sm:text-2xl">
                “Supporting and challenging with respect: that is my guiding principle.”
              </blockquote>
            </div>
            <div className="flex flex-col justify-center lg:col-span-7 lg:py-6">
              <p className="site-eyebrow text-muted-foreground">About me</p>
              <h2 className="site-title-feature max-w-2xl">
                Experience that <em className="text-primary">stays personal</em>
              </h2>
              <div className="site-lead mt-8 max-w-2xl space-y-5">
                <p>
                  I support people in German and English. As a Movement & Health Trainer and a
                  Martial Artist with competitive experience, I combine sound expertise with a fine
                  sense for the person in front of me.
                </p>
                <p>
                  Movement, relaxation and nutrition belong together for me. Trust, humour and a
                  zest for life form the foundation.
                </p>
              </div>
              <div className="mt-8 max-w-2xl border-l-2 border-accent pl-6">
                <p className="font-display text-4xl leading-none text-primary sm:text-5xl">
                  45+ years
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Training experience
                </p>
              </div>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Selected qualifications
                </p>
                <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm font-medium sm:grid-cols-2">
                  {[
                    "FA Movement Trainer Level 1 BGB",
                    "Movement & Health Trainer",
                    "GolfFitness Trainer Albatros Method (SAFS)",
                    "Karate Instructor (3rd Dan)",
                    "Pilates Care",
                    "Spinal Therapist",
                  ].map((qualification) => (
                    <li key={qualification} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 flex-none rounded-full bg-accent" />
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Link
                  to="/en/ueber-mich"
                  className="site-button site-button-md site-button-primary"
                >
                  View profile & qualifications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="stimmen" className="site-anchor bg-secondary/60">
          <div className="site-container site-section">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="site-eyebrow text-muted-foreground">Client reviews</p>
                <h2 className="site-title">What others say</h2>
              </div>
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Wirkstattnatur average rating of 5 out of 5 stars on Google Maps"
                  className="site-card site-card-interactive group inline-flex items-center gap-3 rounded-full px-5 py-3"
                >
                  <span className="font-display text-3xl font-semibold leading-none text-primary">
                    5.0
                  </span>
                  <span>
                    <span className="block tracking-wider text-amber-500" aria-hidden="true">
                      ★★★★★
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      out of 5 on Google Maps
                    </span>
                  </span>
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent-foreground"
                >
                  All reviews on Google Maps →
                </a>
              </div>
            </div>
            <ReviewGrid />
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="kontakt" className="site-anchor relative overflow-hidden">
          <div className="site-container pt-24 lg:pt-32">
            <ContactCta
              locale="en"
              eyebrow="Say hello"
              title={
                <>
                  A first step
                  <em className="block text-accent">Without obligation</em>
                </>
              }
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
