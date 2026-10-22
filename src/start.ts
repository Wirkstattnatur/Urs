import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { readLocaleCookie } from "./lib/locale-negotiation";

const localeMiddleware = createMiddleware().server(async ({ next, request, handlerType }) => {
  const url = new URL(request.url);
  const isCrawlableHomepage =
    handlerType === "router" &&
    (request.method === "GET" || request.method === "HEAD") &&
    url.pathname === "/";

  if (isCrawlableHomepage && readLocaleCookie(request.headers.get("cookie")) === "en") {
    url.pathname = "/en";
    return new Response(null, {
      status: 307,
      headers: {
        "cache-control": "private, no-store",
        location: url.toString(),
        vary: "Cookie",
      },
    });
  }

  const result = await next();
  if (isCrawlableHomepage) {
    result.response.headers.append("vary", "Cookie");
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
