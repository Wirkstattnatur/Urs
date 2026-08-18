import socialImage from "@/assets/wirkstatt/hero-stairs.webp";

export const siteUrl = "https://wirkstattnatur.ch";
export const socialImageUrl = new URL(socialImage, siteUrl).toString();

type Locale = "de-CH" | "en";

type SeoHeadOptions = {
  path: string;
  title: string;
  description: string;
  locale: Locale;
  imageUrl?: string;
  imageAlt?: string;
  noindex?: boolean;
};

export const googleMapsUrl =
  "https://www.google.ch/maps/place/Wirkstattnatur+-+Personal+Training+GolfFitness+Pilates+%26+Massage/@47.2860312,8.5608552,17z/data=!3m1!4b1!4m5!3m4!1s0x479aa8d2243337b5:0x50e540f490e6ac4b!8m2!3d47.2860312!4d8.5630439";

export function jsonLdScript(value: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(value).replace(/</g, "\\u003c"),
  };
}

export function absoluteUrl(pathOrUrl: string) {
  return /^https?:\/\//i.test(pathOrUrl)
    ? pathOrUrl
    : new URL(pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`, siteUrl).toString();
}

function germanPath(path: string) {
  if (path === "/en") return "/";
  return path.replace(/^\/en(?=\/|$)/, "") || "/";
}

function englishPath(path: string) {
  const pathWithoutLocale = germanPath(path);
  return pathWithoutLocale === "/" ? "/en" : `/en${pathWithoutLocale}`;
}

export function getSeoHead({
  path,
  title,
  description,
  locale,
  imageUrl = socialImageUrl,
  imageAlt = "Wirkstattnatur — Bewegung und Training mit Urs Gremlich",
  noindex = false,
}: SeoHeadOptions) {
  const canonical = absoluteUrl(path);
  const german = absoluteUrl(germanPath(path));
  const english = absoluteUrl(englishPath(path));
  const image = absoluteUrl(imageUrl);
  const isEnglish = locale === "en";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Urs Gremlich, Wirkstattnatur" },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wirkstattnatur" },
      { property: "og:locale", content: isEnglish ? "en_GB" : "de_CH" },
      { property: "og:locale:alternate", content: isEnglish ? "de_CH" : "en_GB" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "de-CH", href: german },
      { rel: "alternate", hrefLang: "en", href: english },
      { rel: "alternate", hrefLang: "x-default", href: german },
    ],
  };
}

export function getSiteGraph(imageUrl = socialImageUrl) {
  const businessId = `${siteUrl}#business`;
  const personId = `${siteUrl}/ueber-mich#urs-gremlich`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Wirkstattnatur",
        description:
          "Personal Training, Pilates, Golf-Fitness und Karate mit Urs Gremlich in Thalwil und Horgen.",
        publisher: { "@id": personId },
        inLanguage: ["de-CH", "en"],
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Urs Gremlich",
        url: `${siteUrl}/ueber-mich`,
        jobTitle: "Bewegungstrainer, Therapeut und Karatelehrer",
        knowsLanguage: ["de", "en"],
        worksFor: { "@id": businessId },
      },
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: "Wirkstattnatur",
        url: siteUrl,
        image: imageUrl,
        telephone: "+41794131830",
        email: "info@wirkstattnatur.ch",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Zürcherstrasse 73",
          postalCode: "8800",
          addressLocality: "Thalwil",
          addressCountry: "CH",
        },
        areaServed: ["Thalwil", "Horgen"],
        availableLanguage: ["German", "English"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+41794131830",
          email: "info@wirkstattnatur.ch",
          contactType: "customer service",
          areaServed: "CH",
          availableLanguage: ["de", "en"],
        },
        sameAs: [googleMapsUrl],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Angebot",
          itemListElement: [
            ["Personal Training", "/angebot/personal-training"],
            ["Pilates", "/angebot/pilates"],
            ["Golf-Fitness", "/angebot/golf-fitness"],
            ["Karate", "/angebot/karate"],
          ].map(([name, path]) => ({
            "@type": "Offer",
            url: absoluteUrl(path),
            itemOffered: { "@type": "Service", name, url: absoluteUrl(path) },
          })),
        },
      },
    ],
  };
}

export function getWebPageSchema({
  path,
  name,
  description,
  inLanguage,
}: {
  path: string;
  name: string;
  description: string;
  inLanguage: "de-CH" | "en";
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage,
    isPartOf: { "@id": `${siteUrl}#website` },
    about: { "@id": `${siteUrl}#business` },
  };
}

export function getBreadcrumbSchema({
  path,
  name,
  inLanguage,
}: {
  path: string;
  name: string;
  inLanguage: Locale;
}) {
  const isEnglish = inLanguage === "en";
  const homePath = isEnglish ? "/en" : "/";
  const homeName = isEnglish ? "Home" : "Startseite";
  const isServicePage = germanPath(path).startsWith("/angebot/");
  const offerPath = isEnglish ? "/en#angebot" : "/#angebot";
  const offerName = isEnglish ? "Services" : "Angebot";
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeName,
      item: absoluteUrl(homePath),
    },
    ...(isServicePage
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: offerName,
            item: absoluteUrl(offerPath),
          },
        ]
      : []),
    {
      "@type": "ListItem",
      position: isServicePage ? 3 : 2,
      name,
      item: absoluteUrl(path),
    },
  ];

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items,
  };
}

export function getServicePageSchema({
  path,
  name,
  description,
  inLanguage,
  imageUrl,
}: {
  path: string;
  name: string;
  description: string;
  inLanguage: Locale;
  imageUrl?: string;
}) {
  const page = getWebPageSchema({ path, name, description, inLanguage });
  const url = absoluteUrl(path);
  const serviceId = `${url}#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...page, mainEntity: { "@id": serviceId } },
      getBreadcrumbSchema({ path, name, inLanguage }),
      {
        "@type": "Service",
        "@id": serviceId,
        name,
        description,
        url,
        ...(imageUrl ? { image: absoluteUrl(imageUrl) } : {}),
        provider: { "@id": `${siteUrl}#business` },
        areaServed: ["Thalwil", "Horgen"],
        availableLanguage: inLanguage === "en" ? "en" : "de-CH",
      },
    ],
  };
}

export function getProfilePageSchema({
  path,
  name,
  description,
  inLanguage,
}: {
  path: string;
  name: string;
  description: string;
  inLanguage: Locale;
}) {
  const page = getWebPageSchema({ path, name, description, inLanguage });
  const url = absoluteUrl(path);
  const profileId = `${url}#profile`;
  const personId = `${siteUrl}/ueber-mich#urs-gremlich`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...page, mainEntity: { "@id": profileId } },
      getBreadcrumbSchema({ path, name, inLanguage }),
      {
        "@type": "ProfilePage",
        "@id": profileId,
        url,
        name,
        description,
        inLanguage,
        mainEntity: { "@id": personId },
      },
    ],
  };
}

export function getLegalPageSchema({
  path,
  name,
  description,
  inLanguage,
}: {
  path: string;
  name: string;
  description: string;
  inLanguage: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({ path, name, description, inLanguage }),
      getBreadcrumbSchema({ path, name, inLanguage }),
    ],
  };
}
