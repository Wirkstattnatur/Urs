import { next } from "@vercel/functions";

import { shouldUseEnglish } from "./src/lib/locale-negotiation";

export const config = {
  matcher: "/",
  runtime: "edge",
};

export default function middleware(request: Request): Response {
  const url = new URL(request.url);
  const negotiatesLocale =
    url.pathname === "/" && (request.method === "GET" || request.method === "HEAD");

  if (
    !negotiatesLocale ||
    !shouldUseEnglish(request.headers.get("cookie"), request.headers.get("accept-language"))
  ) {
    return next();
  }

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
