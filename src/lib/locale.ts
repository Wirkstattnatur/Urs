export type Locale = "de" | "en";

const localeStorageKey = "wirkstattnatur-locale";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function detectSystemLocale(): Locale {
  if (typeof navigator === "undefined") return "de";

  const languages = navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return languages[0]?.toLowerCase().startsWith("en") ? "en" : "de";
}

export function readLocalePreference(): Locale | null {
  if (typeof window === "undefined") return null;

  try {
    const preference = window.localStorage.getItem(localeStorageKey);
    return preference === "en" || preference === "de" ? preference : null;
  } catch {
    return null;
  }
}

export function persistLocalePreference(locale: Locale): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch {
    // Storage can be unavailable in private browsing; the link still works.
  }
}
