import { readMeasurementPreferences, trackContactEvent } from "@/lib/analytics";

type TidioChatApi = {
  hide: () => void;
  on: (event: "open" | "messageFromVisitor", callback: () => void) => void;
  open: () => void;
  show: () => void;
  setColorPalette: (color: string) => void;
};

declare global {
  interface Document {
    tidioChatLang?: "de" | "en";
  }

  interface Window {
    tidioChatApi?: TidioChatApi;
  }
}

const TIDIO_WIDGET_URL = "https://code.tidio.co/3qrjaekjbikm9l2gftumb7p8sn0lnpek.js";
const TIDIO_SCRIPT_ID = "wirkstattnatur-tidio";
const TIDIO_BRAND_COLOR = "#294f3d";
const TIDIO_LEAD_TRACKED_KEY = "wirkstattnatur-tidio-lead-tracked";

let tidioReadyPromise: Promise<void> | undefined;
let tidioLeadTracked = false;
const configuredTidioApis = new WeakSet<TidioChatApi>();

function trackFirstTidioMessage() {
  if (!readMeasurementPreferences()?.analytics || tidioLeadTracked) return;

  try {
    if (window.sessionStorage.getItem(TIDIO_LEAD_TRACKED_KEY)) {
      tidioLeadTracked = true;
      return;
    }
    window.sessionStorage.setItem(TIDIO_LEAD_TRACKED_KEY, "true");
  } catch {
    // Continue with in-memory GA4 tracking if session storage is unavailable.
  }

  tidioLeadTracked = true;
  void trackContactEvent("generate_lead", "chat");
}

function configureTidio() {
  const api = window.tidioChatApi;
  if (!api) return;

  api.setColorPalette(TIDIO_BRAND_COLOR);
  api.show();

  if (configuredTidioApis.has(api)) return;
  configuredTidioApis.add(api);
  api.on("open", () => void trackContactEvent("contact_chat_open", "chat"));
  api.on("messageFromVisitor", trackFirstTidioMessage);
}

export function loadTidio() {
  if (typeof window === "undefined") return Promise.resolve();

  if (window.tidioChatApi) {
    configureTidio();
    return Promise.resolve();
  }

  if (tidioReadyPromise) return tidioReadyPromise;

  tidioReadyPromise = new Promise<void>((resolve) => {
    const handleReady = () => {
      configureTidio();
      resolve();
    };

    document.addEventListener("tidioChat-ready", handleReady, { once: true });

    const existingScript = document.getElementById(TIDIO_SCRIPT_ID);
    if (existingScript) return;

    const script = document.createElement("script");
    document.tidioChatLang = document.documentElement.lang.startsWith("en") ? "en" : "de";
    script.id = TIDIO_SCRIPT_ID;
    script.src = TIDIO_WIDGET_URL;
    script.async = true;
    script.dataset.cfasync = "false";
    script.addEventListener(
      "error",
      () => {
        // Leave no tag behind: a retained script makes the next attempt take the
        // existing-script branch below and wait forever for a ready event that
        // can no longer arrive.
        script.remove();
        document.removeEventListener("tidioChat-ready", handleReady);
        tidioReadyPromise = undefined;
        resolve();
      },
      { once: true },
    );
    document.head.append(script);
  });

  return tidioReadyPromise;
}

export async function openTidioChat() {
  if (typeof window === "undefined") return false;

  await loadTidio();
  const api = window.tidioChatApi;
  if (!api) return false;

  api.show();
  api.open();
  return true;
}
