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
