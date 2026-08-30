export type Locale = "de" | "en";

export const localePreferenceCookieName = "wirkstattnatur-locale";

export function readLocaleCookie(cookieHeader: string | null): Locale | null {
  if (!cookieHeader) return null;

  for (const item of cookieHeader.split(";")) {
    const [name, value] = item.trim().split("=", 2);
    if (name === localePreferenceCookieName && (value === "de" || value === "en")) {
      return value;
    }
  }

  return null;
}

export function prefersEnglish(acceptLanguage: string | null): boolean {
  let primaryLanguage: string | undefined;
  let highestQuality = -1;

  for (const languageRange of acceptLanguage?.split(",") ?? []) {
    const [language, ...parameters] = languageRange.trim().toLowerCase().split(";");
    if (!language) continue;

    const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const parsedQuality = qualityParameter
      ? Number.parseFloat(qualityParameter.trim().slice(2))
      : 1;
    const quality =
      Number.isFinite(parsedQuality) && parsedQuality >= 0 && parsedQuality <= 1
        ? parsedQuality
        : 0;

    if (quality > highestQuality) {
      primaryLanguage = language;
      highestQuality = quality;
    }
  }

  return primaryLanguage === "en" || primaryLanguage?.startsWith("en-") === true;
}

export function shouldUseEnglish(
  cookieHeader: string | null,
  acceptLanguage: string | null,
): boolean {
  const storedLocale = readLocaleCookie(cookieHeader);
  return storedLocale === "en" || (storedLocale === null && prefersEnglish(acceptLanguage));
}
