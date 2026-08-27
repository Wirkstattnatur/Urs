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

export function openTidioChat() {
  if (typeof window === "undefined") return;

  void loadTidio().then(() => {
    window.tidioChatApi?.show();
    window.tidioChatApi?.open();
  });
}
