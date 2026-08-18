import studioPortraitImage from "@/assets/wirkstatt/trainer-studio.webp";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/locale";
import { ursProfile } from "@/lib/urs-profile";
import { ursProfileEnglish } from "@/lib/urs-profile-en";

type ProfileContent = {
  name: string;
  role: string;
  birthYear: string;
  languages: readonly string[];
  experience: string;
  quote: string;
  qualificationGroups: readonly { title: string; items: readonly string[] }[];
  qualityNote: string;
  affiliations: readonly { name: string; detail: string }[];
  network: string;
};

const aboutCopy = {
  de: {
    pageTitle: "Über mich",
    profileEyebrow: "Persönliches Profil",
    profileImageAlt: "Porträt von Urs Gremlich im Wirkraum",
    birthYear: "Jahrgang",
    experience: "Erfahrung",
    languages: "Sprachen",
    karate: "Karate",
    approachEyebrow: "Haltung",
    approachHeading: "Bewegung ganzheitlich begleiten",
    approachParagraphs: [
      <>
        Ich begleite Menschen mit einem{" "}
        <strong className="font-semibold text-primary">umfassenden Trainingskonzept</strong>, das{" "}
        <strong className="font-semibold text-primary">Bewegung, Entspannung und Ernährung</strong>{" "}
        zusammendenkt. Dabei richte ich jede Einheit an der Person, ihrer aktuellen Situation und
        ihren Zielen aus.
      </>,
      <>
        Als{" "}
        <strong className="font-semibold text-primary">Kampfkünstler mit Wettkampferfahrung</strong>{" "}
        und langjähriger Praxis im Einzel- und Gruppentraining verbinde ich fundiertes Fachwissen
        mit einem persönlichen, direkten Zugang.{" "}
        <strong className="font-semibold text-primary">
          Qualität steht für mich immer vor Quantität.
        </strong>
      </>,
    ],
    quote:
      "Vertrauen, Spass, Humor und Lebensfreude bilden die Basis unserer Zusammenarbeit. Wann immer es möglich ist, trainieren wir auch in der Natur und nutzen, was sie im Lauf der Jahreszeiten anbietet.",
    expertiseEyebrow: "Fachwissen",
    qualificationsHeading: "Qualifikationen",
    qualityHeading: "Qualität & Weiterbildung",
    networkEyebrow: "Rollen & Netzwerk",
    networkHeading: "Engagement über das Training hinaus",
    ctaEyebrow: "Einfach kennenlernen",
    ctaTitle: (
      <>
        Persönlich ins Gespräch kommen. <em className="text-accent">Ganz unverbindlich.</em>
      </>
    ),
  },
  en: {
    pageTitle: "About me",
    profileEyebrow: "Personal profile",
    profileImageAlt: "Portrait of Urs Gremlich in the Wirkraum",
    birthYear: "Year of birth",
    experience: "Experience",
    languages: "Languages",
    karate: "Karate",
    approachEyebrow: "Approach",
    approachHeading: "Guiding movement holistically",
    approachParagraphs: [
      <>
        I support people with a{" "}
        <strong className="font-semibold text-primary">comprehensive training concept</strong> that
        brings together{" "}
        <strong className="font-semibold text-primary">movement, relaxation and nutrition</strong>.
        Every session is tailored to the individual, their current situation and their goals.
      </>,
      <>
        As a{" "}
        <strong className="font-semibold text-primary">
          martial artist with competition experience
        </strong>{" "}
        and many years of practice in one-to-one and group training, I combine solid expertise with
        a personal, direct approach.{" "}
        <strong className="font-semibold text-primary">
          For me, quality always comes before quantity.
        </strong>
      </>,
    ],
    quote:
      "Trust, fun, humour and a zest for life form the foundation of our work together. Whenever possible, we also train outdoors in nature, making the most of what the seasons have to offer.",
    expertiseEyebrow: "Expertise",
    qualificationsHeading: "Qualifications",
    qualityHeading: "Quality & professional development",
    networkEyebrow: "Roles & network",
    networkHeading: "Commitment beyond training",
    ctaEyebrow: "Say hello",
    ctaTitle: (
      <>
        Start a personal conversation.{" "}
        <em className="text-accent">Completely without obligation.</em>
      </>
    ),
  },
} as const;

export function AboutPage({ locale = "de" }: { locale?: Locale }) {
  const isEnglish = locale === "en";
  const copy = aboutCopy[locale];
  const profile: ProfileContent = isEnglish ? ursProfileEnglish : ursProfile;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-secondary/55">
        <SiteHeader variant="surface" />

        <main id="main-content">
          <section>
            <div className="site-container pb-24 pt-16 lg:pb-32 lg:pt-20">
              <h1 className="site-title-feature">{copy.pageTitle}</h1>

              <div className="mt-10 grid gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start lg:gap-10">
                <ProfileCard profile={profile} copy={copy} isEnglish={isEnglish} />

                <article className="rounded-panel bg-card p-7 shadow-card sm:p-10 lg:p-12">
                  <section aria-labelledby="urs-approach">
                    <p className="site-eyebrow text-muted-foreground">{copy.approachEyebrow}</p>
                    <h2 id="urs-approach" className="site-title">
                      {copy.approachHeading}
                    </h2>
                    <div className="mt-7 grid gap-5 text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
                      {copy.approachParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      <blockquote className="rounded-2xl bg-secondary/60 p-6 font-display text-xl leading-relaxed text-primary sm:col-span-2 sm:p-7 sm:text-2xl">
                        {copy.quote}
                      </blockquote>
                    </div>
                  </section>

                  <section className="mt-14" aria-labelledby="urs-qualifications">
                    <p className="site-eyebrow text-muted-foreground">{copy.expertiseEyebrow}</p>
                    <h3 id="urs-qualifications" className="site-title">
                      {copy.qualificationsHeading}
                    </h3>
                    <div className="mt-8 grid gap-12">
                      {profile.qualificationGroups.map((group) => (
                        <QualificationGroup key={group.title} group={group} />
                      ))}
                    </div>
                  </section>

                  <QualityPanel profile={profile} heading={copy.qualityHeading} />

                  <section className="mt-14" aria-labelledby="urs-network">
                    <p className="site-eyebrow text-muted-foreground">{copy.networkEyebrow}</p>
                    <h3 id="urs-network" className="site-title">
                      {copy.networkHeading}
                    </h3>
                    <AffiliationList profile={profile} />
                    <p className="mt-7 rounded-2xl bg-secondary/60 p-6 leading-relaxed text-muted-foreground">
                      {profile.network}
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section id="kontakt" className="site-container pt-24 lg:pt-32">
        <ContactCta locale={locale} eyebrow={copy.ctaEyebrow} title={copy.ctaTitle} />
      </section>

      <SiteFooter />
    </div>
  );
}

function ProfileCard({
  profile,
  copy,
  isEnglish,
}: {
  profile: ProfileContent;
  copy: (typeof aboutCopy)["de"] | (typeof aboutCopy)["en"];
  isEnglish: boolean;
}) {
  return (
    <aside className="overflow-hidden rounded-panel bg-primary text-primary-foreground shadow-soft lg:sticky lg:top-28">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={studioPortraitImage}
          alt={copy.profileImageAlt}
          className="absolute inset-0 h-full w-full origin-[42%_0%] scale-200 object-cover object-[42%_top]"
        />
      </div>
      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {copy.profileEyebrow}
        </p>
        <p className="mt-4 font-display text-4xl">{profile.name}</p>
        <p className="mt-3 leading-relaxed text-primary-foreground/70">{profile.role}</p>

        <dl className="mt-8 grid gap-5 border-t border-primary-foreground/15 pt-6">
          <ProfileFact label={copy.birthYear} value={profile.birthYear} />
          <ProfileFact label={copy.experience} value={profile.experience} />
          <ProfileFact label={copy.languages} value={profile.languages.join(" · ")} />
          <ProfileFact label={copy.karate} value={isEnglish ? "3rd Dan" : "3. Dan"} />
        </dl>
      </div>
    </aside>
  );
}

function ProfileFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/55">
        {label}
      </dt>
      <dd className="mt-1.5 font-display text-xl text-accent">{value}</dd>
    </div>
  );
}

function QualificationGroup({ group }: { group: { title: string; items: readonly string[] } }) {
  return (
    <section className="grid gap-5 border-t border-border pt-8 sm:grid-cols-[10rem_minmax(0,1fr)]">
      <h4 className="font-display text-xl text-primary">{group.title}</h4>
      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 size-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function QualityPanel({ profile, heading }: { profile: ProfileContent; heading: string }) {
  return (
    <section className="mt-12 rounded-2xl bg-primary p-6 text-primary-foreground">
      <div className="flex items-start gap-4">
        <span className="flex size-8 flex-none items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground">
          ✓
        </span>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {heading}
          </h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-primary-foreground/75">
            {profile.qualityNote}
          </p>
        </div>
      </div>
    </section>
  );
}

function AffiliationList({ profile }: { profile: ProfileContent }) {
  return (
    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
      {profile.affiliations.map((affiliation) => (
        <li key={affiliation.name} className="rounded-2xl bg-secondary/60 p-5">
          <p className="font-semibold text-primary">{affiliation.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{affiliation.detail}</p>
        </li>
      ))}
    </ul>
  );
}
