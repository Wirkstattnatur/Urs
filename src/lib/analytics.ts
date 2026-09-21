export type MeasurementPreferences = {
  analytics: boolean;
  ads: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const analyticsMeasurementId = "G-BG8J1YQ71D";
export const measurementPreferencesStorageKey = "wirkstattnatur-measurement-preferences-v2";
export const openCookieSettingsEvent = "wirkstattnatur:open-cookie-settings";

const analyticsScriptId = "wirkstattnatur-google-analytics";
const analyticsCookieLifetimeSeconds = 60 * 60 * 24 * 30 * 13;

let analyticsLoadPromise: Promise<void> | undefined;
let analyticsConfigured = false;
let initialPageViewTracked = false;
let sessionPreferences: MeasurementPreferences | null = null;

type ContactEventName =
  "contact_chat_open" | "contact_email_click" | "contact_phone_click" | "generate_lead";

type ContactMethod = "chat" | "email" | "phone";

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
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments as unknown);
  };
}

function updateGoogleConsent(preferences: MeasurementPreferences) {
  window.gtag?.("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.ads ? "granted" : "denied",
    ad_user_data: preferences.ads ? "granted" : "denied",
    ad_personalization: "denied",
  });
}

export function readMeasurementPreferences(): MeasurementPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(measurementPreferencesStorageKey);
    if (!value) return sessionPreferences;

    const parsed = JSON.parse(value) as Partial<MeasurementPreferences>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.ads !== "boolean") {
      return sessionPreferences;
    }

    return {
      analytics: parsed.analytics,
      ads: parsed.analytics && parsed.ads,
    };
  } catch {
    return sessionPreferences;
  }
}

export function storeMeasurementPreferences(preferences: MeasurementPreferences) {
  if (typeof window === "undefined") return;

  const normalizedPreferences = {
    analytics: preferences.analytics,
    ads: preferences.analytics && preferences.ads,
  };
  sessionPreferences = normalizedPreferences;

  try {
    window.localStorage.setItem(
      measurementPreferencesStorageKey,
      JSON.stringify(normalizedPreferences),
    );
  } catch {
    // The choice still applies for the current page when browser storage is unavailable.
  }
}

export function loadGoogleAnalytics(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const preferences = readMeasurementPreferences();
  if (!preferences?.analytics) return Promise.resolve();

  setAnalyticsDisabled(false);
  ensureGtag();

  if (analyticsConfigured || document.getElementById(analyticsScriptId)) {
    updateGoogleConsent(preferences);
    return analyticsLoadPromise ?? Promise.resolve();
  }

  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  updateGoogleConsent(preferences);

  if (import.meta.env.DEV) {
    window.gtag?.("js", new Date());
    window.gtag?.("config", analyticsMeasurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: analyticsCookieLifetimeSeconds,
      debug_mode: true,
    });
    analyticsConfigured = true;
    return Promise.resolve();
  }

  analyticsLoadPromise = new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.id = analyticsScriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`;
    script.addEventListener(
      "load",
      () => {
        // Configure only after gtag.js has loaded. Replaying js/config from the
        // pre-load queue causes the tag to initialise against pending consent
        // and silently drop every hit.
        window.gtag?.("js", new Date());
        window.gtag?.("config", analyticsMeasurementId, {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_expires: analyticsCookieLifetimeSeconds,
        });
        analyticsConfigured = true;
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

export async function trackAnalyticsPageView() {
  if (typeof window === "undefined" || !readMeasurementPreferences()?.analytics) return;

  if (!initialPageViewTracked) {
    // The initial page view is sent by the config call itself once the tag
    // has loaded; pushing a manual event here would count the visit twice.
    await loadGoogleAnalytics();
    if (readMeasurementPreferences()?.analytics) initialPageViewTracked = true;
    return;
  }

  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  });
}

export async function trackContactEvent(eventName: ContactEventName, contactMethod: ContactMethod) {
  if (typeof window === "undefined" || !readMeasurementPreferences()?.analytics) return;

  await loadGoogleAnalytics();
  if (!readMeasurementPreferences()?.analytics) return;

  window.gtag?.("event", eventName, {
    contact_method: contactMethod,
    page_path: `${window.location.pathname}${window.location.search}`,
    transport_type: "beacon",
  });
}

export function registerContactLinkTracking() {
  if (typeof document === "undefined") return () => undefined;

  function trackContactLink(event: MouseEvent) {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link) return;

    const href = link.getAttribute("href")?.toLowerCase();
    if (href?.startsWith("tel:")) {
      void trackContactEvent("contact_phone_click", "phone");
    } else if (href?.startsWith("mailto:")) {
      void trackContactEvent("contact_email_click", "email");
    }
  }

  document.addEventListener("click", trackContactLink, { capture: true });
  return () => document.removeEventListener("click", trackContactLink, { capture: true });
}

function deleteMeasurementCookies(prefixes: readonly string[]) {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string =>
      Boolean(name && prefixes.some((prefix) => name.startsWith(prefix))),
    );

  for (const name of cookieNames) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
    document.cookie = `${name}=; Domain=.wirkstattnatur.ch; Path=/; Max-Age=0; SameSite=Lax`;
  }
}

export function applyMeasurementPreferences(preferences: MeasurementPreferences) {
  if (typeof window === "undefined") return;

  storeMeasurementPreferences(preferences);
  const normalizedPreferences = readMeasurementPreferences();
  if (!normalizedPreferences) return;

  if (!normalizedPreferences.ads) {
    deleteMeasurementCookies(["_gac", "_gcl"]);
  }

  if (!normalizedPreferences.analytics) {
    ensureGtag();
    updateGoogleConsent(normalizedPreferences);
    setAnalyticsDisabled(true);
    deleteMeasurementCookies(["_ga", "_gac", "_gcl"]);
    return;
  }

  setAnalyticsDisabled(false);
  void loadGoogleAnalytics();
}
