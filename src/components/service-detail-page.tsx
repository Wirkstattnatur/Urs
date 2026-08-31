import { BenefitIcon } from "@/components/benefit-icon";
import { ContactCta } from "@/components/contact-cta";
import { ServiceGallery } from "@/components/service-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/locale";
import type { ServiceDetail } from "@/lib/services";

export function ServiceDetailPage({
  service,
  locale = "de",
}: {
  service: ServiceDetail;
  locale?: Locale;
}) {
  const stacksPracticalDetails = service.slug === "personal-training";
  const isEnglish = locale === "en";
  const homePath = isEnglish ? "/en" : "/";
  const copy = isEnglish
    ? {
        bookIntroAction: "Book an introductory consultation",
        exploreOfferAction: "Explore what I offer",
        offerEyebrow: "What I offer",
        galleryLabel: `Insights into ${service.title}`,
        practicalDetailsHeading: "Locations, methods and prices",
        locationsHeading: "Training locations",
        methodsHeading: "Methods",
        pricingHeading: "Prices",
        pricingSubheading: "Transparent and personal",
        contactEyebrow: "Say hello",
      }
    : {
        bookIntroAction: "Kennenlerngespräch buchen",
        exploreOfferAction: "Angebot entdecken",
        offerEyebrow: "Das Angebot",
        galleryLabel: `Einblicke in ${service.title}`,
        practicalDetailsHeading: "Trainingsorte, Methoden und Preise",
        locationsHeading: "Trainingsorte",
        methodsHeading: "Methoden",
        pricingHeading: "Preise",
        pricingSubheading: "Transparent und persönlich",
        contactEyebrow: "Einfach kennenlernen",
      };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="primary" currentServicePath={service.path} />

      <main id="main-content">
        <section className="bg-primary text-primary-foreground">
          <div className="site-container grid items-stretch gap-12 pb-16 pt-28 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <div className="flex flex-col justify-center lg:col-span-6 lg:py-6">
              <p className="site-eyebrow text-accent">{service.title} · Thalwil &amp; Horgen</p>
              <h1 className="font-display text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                {service.heroTitle}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`${homePath}#kontakt`}
                  className="site-button site-button-lg site-button-primary"
                >
                  {copy.bookIntroAction}
                </a>
                <a href="#angebot" className="site-button site-button-lg site-button-ghost-inverse">
                  {copy.exploreOfferAction}
                </a>
              </div>

              <div className="mt-10 lg:hidden">
                <ServiceHeroImage service={service} />
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-2 rounded-2xl bg-primary-foreground/7 p-2 sm:mt-10 sm:grid-cols-3 sm:gap-3 sm:p-3">
                {service.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="min-w-0 rounded-xl bg-primary-foreground/7 px-3 py-3 last:col-span-2 sm:px-4 sm:py-4 sm:last:col-span-1"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/75">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-display text-xl font-semibold text-accent sm:text-2xl">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hidden lg:col-span-6 lg:block">
              <ServiceHeroImage service={service} />
            </div>
          </div>
        </section>

        <section id="angebot" className="site-anchor bg-card">
          <div className="site-container site-section">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="min-w-0 lg:col-span-5">
                <p className="site-eyebrow text-muted-foreground">{copy.offerEyebrow}</p>
                <h2 className="site-title-feature">{service.offerTitle}</h2>
                <p className="site-lead mt-7">{service.offerIntro}</p>
              </div>
              <div className="min-w-0 grid gap-6 sm:grid-cols-2 lg:col-span-7">
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
                    <BenefitIcon name={benefit.icon} />
                    <h3 className="mt-5 font-display text-2xl text-accent">{benefit.title}</h3>
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
            <div className="lg:sticky lg:top-28 lg:col-span-5">
              <ServiceGallery images={service.gallery} label={copy.galleryLabel} locale={locale} />
            </div>

            <div className="lg:col-span-7">
              <h2 className="sr-only">{copy.practicalDetailsHeading}</h2>

              <div className={`grid gap-10 ${stacksPracticalDetails ? "" : "md:grid-cols-2"}`}>
                <div>
                  <h3 className="font-display text-2xl text-primary">{copy.locationsHeading}</h3>
                  {service.locationGroups ? (
                    <div
                      className={
                        stacksPracticalDetails
                          ? "mt-5 columns-1 gap-4 sm:columns-2"
                          : "mt-5 grid gap-4"
                      }
                    >
                      {service.locationGroups.map((group) => (
                        <section
                          key={group.title}
                          className={`break-inside-avoid rounded-2xl bg-card p-5 shadow-card ${
                            stacksPracticalDetails ? "mb-4" : ""
                          }`}
                        >
                          <h4 className="text-sm font-semibold text-primary">{group.title}</h4>
                          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-muted-foreground">
                            {group.items.map((location, index) => (
                              <li key={location} className="inline-flex items-center gap-2">
                                {index > 0 && (
                                  <span
                                    className="size-1 flex-none rounded-full bg-accent-foreground/45"
                                    aria-hidden="true"
                                  />
                                )}
                                {location}
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-5 grid gap-3">
                      {service.locations?.map((location) => (
                        <li key={location} className="flex items-start gap-3 font-medium">
                          <span
                            className="mt-2 size-2 flex-none rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {location}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-2xl text-primary">{copy.methodsHeading}</h3>
                  {service.methodGroups ? (
                    <div className="mt-5 grid gap-6">
                      {service.methodGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="text-sm font-semibold text-primary">{group.title}</h4>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((method) => (
                              <Method key={method}>{method}</Method>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.methods?.map((method) => (
                        <Method key={method}>{method}</Method>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-12 rounded-panel bg-secondary p-7 lg:p-8">
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl text-primary">{copy.pricingHeading}</h3>
                  <p className="text-sm text-muted-foreground">{copy.pricingSubheading}</p>
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

        <section className="site-container">
          <ContactCta
            locale={locale}
            eyebrow={copy.contactEyebrow}
            title={
              <>
                {isEnglish
                  ? `Is ${service.title} right for you?`
                  : `Passt ${service.title} zu dir?`}{" "}
                <em className="text-accent">
                  {isEnglish ? "Let’s find out." : "Finden wir es heraus."}
                </em>
              </>
            }
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function ServiceHeroImage({ service }: { service: ServiceDetail }) {
  return (
    <div className="overflow-hidden rounded-panel bg-primary-foreground/7 shadow-soft">
      <img
        src={service.image}
        alt={service.imageAlt}
        fetchPriority="high"
        decoding="async"
        style={{ objectPosition: service.imagePosition }}
        className={`aspect-[4/3] w-full lg:aspect-[4/5] lg:h-full lg:min-h-[38rem] ${
          service.imageFit === "contain" ? "object-contain p-12 lg:p-20" : "object-cover"
        }`}
      />
    </div>
  );
}

function Method({ children }: { children: string }) {
  return (
    <li className="rounded-control bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
      {children}
    </li>
  );
}
