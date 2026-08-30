import { localePreferenceCookieName, type Locale } from "./locale-negotiation";

export { localePreferenceCookieName, type Locale } from "./locale-negotiation";

const localeStorageKey = localePreferenceCookieName;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function persistLocalePreference(locale: Locale): void {
  if (typeof window === "undefined") return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${localePreferenceCookieName}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;

  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch {
    // Storage can be unavailable in private browsing; the link still works.
  }
}
