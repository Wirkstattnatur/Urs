import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { shouldUseEnglish } from "./lib/locale-negotiation";

const localeMiddleware = createMiddleware().server(async ({ next, request, handlerType }) => {
  const url = new URL(request.url);
  const isNegotiatedHomepage =
    handlerType === "router" &&
    (request.method === "GET" || request.method === "HEAD") &&
    url.pathname === "/";

  if (isNegotiatedHomepage) {
    if (shouldUseEnglish(request.headers.get("cookie"), request.headers.get("accept-language"))) {
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
