import { useEffect, useState } from "react";

import { ChatIcon } from "@/components/contact-icons";
import { getLocaleFromPath } from "@/lib/locale";
import { openTidioChat } from "@/lib/tidio";

export function TidioLauncher({ pathname }: { pathname: string }) {
  const [isTidioReady, setIsTidioReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isEnglish = getLocaleFromPath(pathname) === "en";

  useEffect(() => {
    function handleReady() {
      setIsTidioReady(true);
      setIsLoading(false);
    }

    setIsTidioReady(Boolean(window.tidioChatApi));
    document.addEventListener("tidioChat-ready", handleReady);
    return () => document.removeEventListener("tidioChat-ready", handleReady);
  }, []);

  if (isTidioReady) return null;

  return (
    <button
      type="button"
      aria-label={
        isLoading
          ? isEnglish
            ? "Loading chat"
            : "Chat wird geladen"
          : isEnglish
            ? "Open chat"
            : "Chat öffnen"
      }
      aria-busy={isLoading}
      disabled={isLoading}
      onClick={() => {
        setIsLoading(true);
        void openTidioChat("floating_launcher").then((opened) => {
          if (!opened) setIsLoading(false);
        });
      }}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition duration-300 ease-brand hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-80"
    >
      <ChatIcon
        className={`h-6 w-6 ${isLoading ? "animate-pulse motion-reduce:animate-none" : ""}`}
      />
    </button>
  );
}
