import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ServiceDetail } from "@/lib/services";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="primary" currentServicePath={service.path} />

      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="site-container grid items-stretch gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <div className="flex flex-col justify-center lg:col-span-6 lg:py-6">
              <p className="site-eyebrow text-accent">{service.eyebrow}</p>
              <h1 className="font-display text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                {service.heroTitle}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/#kontakt" className="site-button site-button-lg site-button-primary">
                  Kennenlerngespräch buchen
                </a>
                <a href="#angebot" className="site-button site-button-lg site-button-ghost-inverse">
                  Angebot entdecken
                </a>
              </div>

              <dl className="mt-10 grid gap-3 rounded-2xl bg-primary-foreground/7 p-3 sm:grid-cols-3">
                {service.facts.map((fact) => (
                  <div key={fact.label} className="rounded-xl bg-primary-foreground/7 px-4 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/75">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-display text-2xl font-semibold text-accent">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-panel bg-primary-foreground/7 shadow-soft lg:col-span-6">
              <img
                src={service.image}
                alt={service.imageAlt}
                style={{ objectPosition: service.imagePosition }}
                className={`aspect-[4/3] w-full lg:aspect-[4/5] lg:h-full lg:min-h-[38rem] ${service.imageFit === "contain" ? "object-contain p-12 lg:p-20" : "object-cover"}`}
              />
            </div>
          </div>
        </section>

        <section id="angebot" className="site-anchor bg-card">
          <div className="site-container site-section">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="site-eyebrow text-muted-foreground">Das Angebot</p>
                <h2 className="site-title-feature">{service.offerTitle}</h2>
                <p className="site-lead mt-7">{service.offerIntro}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                {service.offerCards.map((card) => (
                  <article key={card.title} className="site-card p-7 lg:p-8">
                    <span className="block size-3 rounded-full bg-accent" aria-hidden="true" />
                    <h3 className="mt-8 font-display text-3xl text-primary">{card.title}</h3>
                    <p className="mt-5 leading-relaxed text-muted-foreground">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-panel bg-primary p-8 text-primary-foreground lg:p-10">
              <div className="grid gap-7 sm:grid-cols-3">
                {service.benefits.map((benefit) => (
                  <article key={benefit.title}>
                    <h3 className="font-display text-2xl text-accent">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                      {benefit.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="site-container site-section">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="overflow-hidden rounded-panel bg-secondary shadow-soft lg:sticky lg:top-28 lg:col-span-5">
              <img
                src={service.detailImage}
                alt={service.detailImageAlt}
                loading="lazy"
                style={{ objectPosition: service.detailImagePosition }}
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-[4/5]"
              />
            </div>

            <div className="lg:col-span-7">
              <h2 className="sr-only">Trainingsorte, Methoden und Preise</h2>

              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="font-display text-2xl text-primary">Trainingsorte</h3>
                  <ul className="mt-5 grid gap-3">
                    {service.locations.map((location) => (
                      <li key={location} className="flex items-start gap-3 font-medium">
                        <span
                          className="mt-2 size-2 flex-none rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-primary">Methoden</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.methods.map((method) => (
                      <li
                        key={method}
                        className="rounded-control bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 rounded-panel bg-secondary p-7 lg:p-8">
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl text-primary">Preise</h3>
                  <p className="text-sm text-muted-foreground">Transparent und persönlich</p>
                </div>
                <dl
                  className={`grid gap-3 ${service.prices.length > 1 ? "sm:grid-cols-2 xl:grid-cols-3" : "max-w-sm"}`}
                >
                  {service.prices.map((price) => (
                    <div key={price.title} className="rounded-2xl bg-card p-5 shadow-card">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {price.title}
                      </dt>
                      <dd className="mt-4 font-display text-3xl text-primary">{price.price}</dd>
                      <dd className="mt-2 text-sm text-muted-foreground">{price.note}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="site-container pb-0">
          <ContactCta
            eyebrow="Einfach kennenlernen"
            title={
              <>
                Passt {service.title} zu dir? <em className="text-accent">Finden wir es heraus.</em>
              </>
            }
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
