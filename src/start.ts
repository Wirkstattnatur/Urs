import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { localePreferenceCookieName, type Locale } from "./lib/locale";

function readLocaleCookie(cookieHeader: string | null): Locale | null {
  if (!cookieHeader) return null;

  for (const item of cookieHeader.split(";")) {
    const [name, value] = item.trim().split("=", 2);
    if (name === localePreferenceCookieName && (value === "de" || value === "en")) {
      return value;
    }
  }

  return null;
}

function prefersEnglish(acceptLanguage: string | null): boolean {
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

const localeMiddleware = createMiddleware().server(async ({ next, request, handlerType }) => {
  const url = new URL(request.url);
  const isNegotiatedHomepage =
    handlerType === "router" &&
    (request.method === "GET" || request.method === "HEAD") &&
    url.pathname === "/";

  if (isNegotiatedHomepage) {
    const storedLocale = readLocaleCookie(request.headers.get("cookie"));
    const shouldUseEnglish =
      storedLocale === "en" ||
      (storedLocale === null && prefersEnglish(request.headers.get("accept-language")));

    if (shouldUseEnglish) {
      url.pathname = "/en";
      return new Response(null, {
        status: 307,
        headers: {
          "cache-control": "private, no-store",
          location: url.toString(),
          vary: "Accept-Language, Cookie",
        },
      });
    }
  }

  const result = await next();
  if (isNegotiatedHomepage) {
    result.response.headers.append("vary", "Accept-Language, Cookie");
  }
  return result;
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, localeMiddleware],
}));
