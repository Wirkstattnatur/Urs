import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  applyMeasurementPreferences,
  openCookieSettingsEvent,
  readMeasurementPreferences,
  trackAnalyticsPageView,
  type MeasurementPreferences,
} from "@/lib/analytics";
import { getLocaleFromPath } from "@/lib/locale";

const defaultPreferences: MeasurementPreferences = {
  analytics: true,
  ads: true,
};

const necessaryOnlyPreferences: MeasurementPreferences = {
  analytics: false,
  ads: false,
};

export function AnalyticsConsentBanner({ pathname }: { pathname: string }) {
  const [preferences, setPreferences] = useState<MeasurementPreferences | null | undefined>(
    undefined,
  );
  const [draftPreferences, setDraftPreferences] =
    useState<MeasurementPreferences>(defaultPreferences);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const isEnglish = getLocaleFromPath(pathname) === "en";
  const isVisible = preferences === null || settingsOpen;

  useEffect(() => {
    const storedPreferences = readMeasurementPreferences();
    setPreferences(storedPreferences);
    setDraftPreferences(storedPreferences ?? defaultPreferences);
  }, []);

  useEffect(() => {
    function openSettings() {
      const storedPreferences = readMeasurementPreferences();
      setDraftPreferences(storedPreferences ?? defaultPreferences);
      setSettingsOpen(true);
    }

    window.addEventListener(openCookieSettingsEvent, openSettings);
    return () => window.removeEventListener(openCookieSettingsEvent, openSettings);
  }, []);

  useEffect(() => {
    if (preferences?.analytics) void trackAnalyticsPageView();
  }, [preferences, pathname]);

  function savePreferences(nextPreferences: MeasurementPreferences) {
    const normalizedPreferences = {
      analytics: nextPreferences.analytics,
      ads: nextPreferences.analytics && nextPreferences.ads,
    };

    applyMeasurementPreferences(normalizedPreferences);
    setPreferences(normalizedPreferences);
    setDraftPreferences(normalizedPreferences);
    setSettingsOpen(false);
  }

  if (preferences === undefined || !isVisible) return null;

  return (
    <aside
      aria-labelledby="measurement-preferences-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-h-[calc(100dvh-2rem)] max-w-3xl overflow-y-auto rounded-panel bg-primary p-5 text-primary-foreground shadow-soft ring-1 ring-primary-foreground/20 sm:p-6"
    >
      {settingsOpen ? (
        <div>
          <div className="max-w-2xl">
            <p
              id="measurement-preferences-title"
              className="font-display text-xl leading-tight sm:text-2xl"
            >
              {isEnglish ? "Measurement settings" : "Mess-Einstellungen"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              {isEnglish
                ? "Choose which optional measurements you allow. Personalised advertising always remains disabled."
                : "Wähle, welche optionalen Messungen du zulässt. Personalisierte Werbung bleibt immer ausgeschaltet."}
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            <label className="flex cursor-pointer items-start justify-between gap-5 rounded-2xl bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/15">
              <span>
                <span className="block font-semibold">
                  {isEnglish ? "Website statistics" : "Website-Statistik"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-primary-foreground/75">
                  {isEnglish
                    ? "Measures page use and contact interactions with Google Analytics."
                    : "Misst Seitennutzung und Kontaktinteraktionen mit Google Analytics."}
                </span>
              </span>
              <input
                type="checkbox"
                checked={draftPreferences.analytics}
                onChange={(event) => {
                  const analytics = event.currentTarget.checked;
                  setDraftPreferences((current) => ({
                    analytics,
                    ads: analytics && current.ads,
                  }));
                }}
                className="mt-1 size-5 flex-none accent-accent"
              />
            </label>

            <label
              className={`flex items-start justify-between gap-5 rounded-2xl bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/15 ${draftPreferences.analytics ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
            >
              <span>
                <span className="block font-semibold">
                  {isEnglish ? "Google Ads performance" : "Google-Ads-Erfolgsmessung"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-primary-foreground/75">
                  {isEnglish
                    ? "Allows consented contact events to be used to evaluate Google Ads. Requires website statistics."
                    : "Erlaubt, freigegebene Kontaktinteraktionen zur Auswertung von Google Ads zu verwenden. Benötigt die Website-Statistik."}
                </span>
              </span>
              <input
                type="checkbox"
                checked={draftPreferences.ads}
                disabled={!draftPreferences.analytics}
                onChange={(event) => {
                  const ads = event.currentTarget.checked;
                  setDraftPreferences((current) => ({ ...current, ads }));
                }}
                className="mt-1 size-5 flex-none accent-accent disabled:cursor-not-allowed"
              />
            </label>

            <div className="flex items-start justify-between gap-5 rounded-2xl bg-primary-foreground/5 p-4 ring-1 ring-primary-foreground/10">
              <span>
                <span className="block font-semibold">
                  {isEnglish ? "Personalised advertising" : "Personalisierte Werbung"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-primary-foreground/75">
                  {isEnglish
                    ? "Wirkstattnatur does not use remarketing or personalised advertising."
                    : "Wirkstattnatur verwendet kein Remarketing und keine personalisierte Werbung."}
                </span>
              </span>
              <span className="mt-0.5 rounded-control bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                {isEnglish ? "Off" : "Aus"}
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={isEnglish ? "/en/datenschutz" : "/datenschutz"}
              hash="analytics"
              className="text-center text-sm font-semibold underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-left"
            >
              {isEnglish ? "Privacy details" : "Datenschutzdetails"}
            </Link>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => savePreferences(necessaryOnlyPreferences)}
                className="site-button site-button-sm site-button-outline-inverse min-h-11 px-5"
              >
                {isEnglish ? "Only necessary" : "Nur notwendige"}
              </button>
              <button
                type="button"
                onClick={() => savePreferences(draftPreferences)}
                className="site-button site-button-sm site-button-primary min-h-11 px-5"
              >
                {isEnglish ? "Save selection" : "Auswahl übernehmen"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div className="max-w-md">
            <p
              id="measurement-preferences-title"
              className="font-display text-xl leading-tight sm:text-2xl"
            >
              {isEnglish ? "Privacy" : "Datenschutz"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              {isEnglish
                ? "Optional measurement is preselected but stays off until you choose."
                : "Optionale Messung ist vorausgewählt, bleibt aber bis zu deiner Wahl aus."}{" "}
              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                className="font-semibold text-primary-foreground underline underline-offset-4 transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {isEnglish ? "Settings" : "Einstellungen"}
              </button>
            </p>
          </div>

          <div className="mt-5 shrink-0 sm:mt-0">
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => savePreferences(necessaryOnlyPreferences)}
                className="site-button site-button-sm site-button-outline-inverse min-h-11 px-5"
              >
                {isEnglish ? "Only necessary" : "Nur notwendige"}
              </button>
              <button
                type="button"
                onClick={() => savePreferences(defaultPreferences)}
                className="site-button site-button-sm site-button-primary min-h-11 px-5"
              >
                {isEnglish ? "Accept all" : "Alle akzeptieren"}
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
