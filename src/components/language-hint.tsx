import { useEffect, useState } from "react";

import { GlobeIcon } from "@/components/language-icon";
import { persistLocalePreference, readLocaleCookie } from "@/lib/locale";

function browserPrefersEnglish() {
  const language = navigator.languages?.find(Boolean) ?? navigator.language;
  return /^en(?:-|$)/i.test(language);
}

export function LanguageHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const forceHint =
      import.meta.env.DEV &&
      new URLSearchParams(window.location.search).get("language-hint") === "1";

    if (!forceHint) {
      if (window.location.hash) return;
      if (readLocaleCookie(document.cookie) !== null) return;
      if (!browserPrefersEnglish()) return;
    }

    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <aside lang="en" aria-label="Language suggestion" className="site-container pb-3 pt-4">
      <div className="site-card flex flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-5">
        <GlobeIcon className="hidden size-4 text-primary sm:block" />
        <p className="min-w-0 flex-1 text-sm font-medium text-foreground">
          This website is also available in English.
        </p>
        <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end">
          <a
            href="/en"
            onClick={() => persistLocalePreference("en")}
            className="site-button site-button-sm site-button-primary"
          >
            Switch to English
          </a>
          <button
            type="button"
            onClick={() => {
              persistLocalePreference("de");
              setVisible(false);
            }}
            aria-label="Dismiss language suggestion"
            className="flex size-11 flex-none items-center justify-center rounded-control text-muted-foreground transition hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
              <path
                d="m4 4 8 8m0-8-8 8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.6"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
