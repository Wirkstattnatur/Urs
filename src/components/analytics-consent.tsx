import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  disableGoogleAnalytics,
  openCookieSettingsEvent,
  readAnalyticsConsent,
  storeAnalyticsConsent,
  trackAnalyticsPageView,
  type AnalyticsConsent,
} from "@/lib/analytics";
import { getLocaleFromPath } from "@/lib/locale";

export function AnalyticsConsentBanner({ pathname }: { pathname: string }) {
  const [consent, setConsent] = useState<AnalyticsConsent | null | undefined>(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const isEnglish = getLocaleFromPath(pathname) === "en";
  const isVisible = consent === null || settingsOpen;

  useEffect(() => {
    setConsent(readAnalyticsConsent());
  }, []);

  useEffect(() => {
    function openSettings() {
      setSettingsOpen(true);
    }

    window.addEventListener(openCookieSettingsEvent, openSettings);
    return () => window.removeEventListener(openCookieSettingsEvent, openSettings);
  }, []);

  useEffect(() => {
    if (consent === "granted") void trackAnalyticsPageView();
  }, [consent, pathname]);

  useEffect(() => {
    if (!isVisible) return;

    function hideTidio() {
      window.tidioChatApi?.hide();
    }

    hideTidio();
    document.addEventListener("tidioChat-ready", hideTidio);

    return () => {
      document.removeEventListener("tidioChat-ready", hideTidio);
      window.tidioChatApi?.show();
    };
  }, [isVisible]);

  function choose(nextConsent: AnalyticsConsent) {
    storeAnalyticsConsent(nextConsent);
    setConsent(nextConsent);
    setSettingsOpen(false);

    if (nextConsent === "denied") disableGoogleAnalytics();
  }

  if (!isVisible) return null;

  return (
    <aside
      aria-labelledby="analytics-consent-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-panel bg-primary p-5 text-primary-foreground shadow-soft ring-1 ring-primary-foreground/20 sm:p-6"
    >
      <div className="sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div className="max-w-xl">
          <p
            id="analytics-consent-title"
            className="font-display text-xl leading-tight sm:text-2xl"
          >
            {isEnglish ? "May we measure visits?" : "Dürfen wir Besuche messen?"}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
            {isEnglish
              ? "With your permission, Google Analytics measures which pages are used. It remains disabled if you decline."
              : "Mit deiner Einwilligung misst Google Analytics, welche Seiten genutzt werden. Bei Ablehnung bleibt die Analyse aus."}{" "}
            <Link
              to={isEnglish ? "/en/datenschutz" : "/datenschutz"}
              hash="analytics"
              className="font-semibold underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {isEnglish ? "Privacy details" : "Datenschutzdetails"}
            </Link>
          </p>
        </div>

        <div className="mt-4 grid shrink-0 grid-cols-2 gap-3 sm:mt-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="site-button site-button-sm site-button-outline-inverse min-h-11 px-5"
          >
            {isEnglish ? "Decline" : "Ablehnen"}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="site-button site-button-sm site-button-primary min-h-11 px-5"
          >
            {isEnglish ? "Accept" : "Akzeptieren"}
          </button>
        </div>
      </div>
    </aside>
  );
}
