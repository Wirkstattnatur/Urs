type TidioChatApi = {
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
const TIDIO_AUTOMATIC_LOAD_DELAY_MS = 8000;

let tidioReadyPromise: Promise<void> | undefined;

function configureTidio() {
  window.tidioChatApi?.setColorPalette(TIDIO_BRAND_COLOR);
  window.tidioChatApi?.show();
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
        tidioReadyPromise = undefined;
        resolve();
      },
      { once: true },
    );
    document.head.append(script);
  });

  return tidioReadyPromise;
}

export function scheduleTidioLoad() {
  if (typeof window === "undefined") return () => undefined;

  let idleCallbackId: number | undefined;
  let fallbackTimerId: number | undefined;
  let started = false;

  const interactionEvents = ["pointerdown", "keydown", "scroll"] as const;

  function removeInteractionListeners() {
    interactionEvents.forEach((eventName) => {
      window.removeEventListener(eventName, startLoading);
    });
  }

  function startLoading() {
    if (started) return;
    started = true;
    removeInteractionListeners();
    window.removeEventListener("load", scheduleIdleLoad);

    if (idleCallbackId !== undefined) window.cancelIdleCallback(idleCallbackId);
    if (fallbackTimerId !== undefined) window.clearTimeout(fallbackTimerId);

    void loadTidio();
  }

  function scheduleIdleLoad() {
    if (started || idleCallbackId !== undefined || fallbackTimerId !== undefined) return;

    fallbackTimerId = window.setTimeout(() => {
      fallbackTimerId = undefined;

      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(startLoading, { timeout: 2000 });
        return;
      }

      startLoading();
    }, TIDIO_AUTOMATIC_LOAD_DELAY_MS);
  }

  interactionEvents.forEach((eventName) => {
    window.addEventListener(eventName, startLoading, { once: true, passive: true });
  });

  if (document.readyState === "complete") {
    scheduleIdleLoad();
  } else {
    window.addEventListener("load", scheduleIdleLoad, { once: true });
  }

  return () => {
    removeInteractionListeners();
    window.removeEventListener("load", scheduleIdleLoad);
    if (idleCallbackId !== undefined) window.cancelIdleCallback(idleCallbackId);
    if (fallbackTimerId !== undefined) window.clearTimeout(fallbackTimerId);
  };
}

export function openTidioChat() {
  if (typeof window === "undefined") return;

  void loadTidio().then(() => {
    window.tidioChatApi?.show();
    window.tidioChatApi?.open();
  });
}
