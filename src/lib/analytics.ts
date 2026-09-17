export type AnalyticsConsent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const analyticsMeasurementId = "G-BG8J1YQ71D";
export const analyticsConsentStorageKey = "wirkstattnatur-analytics-consent-v1";
export const openCookieSettingsEvent = "wirkstattnatur:open-cookie-settings";

const analyticsScriptId = "wirkstattnatur-google-analytics";
const analyticsCookieLifetimeSeconds = 60 * 60 * 24 * 30 * 13;

let analyticsLoadPromise: Promise<void> | undefined;
let sessionConsent: AnalyticsConsent | null = null;

function getDisableKey() {
  return `ga-disable-${analyticsMeasurementId}`;
}

function setAnalyticsDisabled(disabled: boolean) {
  (window as unknown as Record<string, unknown>)[getDisableKey()] = disabled;
}

// Mirrors Google's official snippet: a stub that queues an Arguments object.
// Array-based stubs are processed, but the Arguments form is what gtag.js
// expects and is what the working reference implementation uses.
function ensureGtag() {
  window.dataLayer ??= [];
  window.gtag ??= function () {
    window.dataLayer?.push(arguments as unknown);
  };
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(analyticsConsentStorageKey);
    return value === "granted" || value === "denied" ? value : sessionConsent;
  } catch {
    return sessionConsent;
  }
}

export function storeAnalyticsConsent(consent: AnalyticsConsent) {
  if (typeof window === "undefined") return;

  sessionConsent = consent;

  try {
    window.localStorage.setItem(analyticsConsentStorageKey, consent);
  } catch {
    // The choice still applies for the current page when browser storage is unavailable.
  }
}

export function loadGoogleAnalytics(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (readAnalyticsConsent() !== "granted") return Promise.resolve();

  setAnalyticsDisabled(false);
  ensureGtag();

  if (document.getElementById(analyticsScriptId)) {
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return analyticsLoadPromise ?? Promise.resolve();
  }

  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  analyticsLoadPromise = new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.id = analyticsScriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`;
    script.addEventListener(
      "load",
      () => {
        // The tag must be configured after gtag.js has loaded: with the
        // config call replayed from the pre-load queue, gtag.js initialises
        // against a consent state it considers pending and silently drops
        // every hit.
        window.gtag?.("js", new Date());
        window.gtag?.("config", analyticsMeasurementId, {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_expires: analyticsCookieLifetimeSeconds,
        });
        resolve();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => {
        analyticsLoadPromise = undefined;
        script.remove();
        resolve();
      },
      { once: true },
    );
    document.head.append(script);
  });

  return analyticsLoadPromise;
}

let initialPageViewTracked = false;

export async function trackAnalyticsPageView() {
  if (typeof window === "undefined" || readAnalyticsConsent() !== "granted") return;

  if (!initialPageViewTracked) {
    // The initial page view is sent by the config call itself once the tag
    // has loaded; pushing a manual event here would count the visit twice.
    await loadGoogleAnalytics();
    if (readAnalyticsConsent() === "granted") initialPageViewTracked = true;
    return;
  }

  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  });
}

export function disableGoogleAnalytics() {
  if (typeof window === "undefined") return;

  setAnalyticsDisabled(true);
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
    document.cookie = `${name}=; Domain=.wirkstattnatur.ch; Path=/; Max-Age=0; SameSite=Lax`;
  }
}
