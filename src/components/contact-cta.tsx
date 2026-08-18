import type { ReactNode } from "react";
import { ChatIcon, MailIcon, PhoneIcon } from "@/components/contact-icons";
import type { Locale } from "@/lib/locale";
import { openTidioChat } from "@/lib/tidio";

type ContactCtaProps = {
  eyebrow?: string;
  title: ReactNode;
  locale?: Locale;
};

export function ContactCta({ eyebrow, title, locale = "de" }: ContactCtaProps) {
  const copy =
    locale === "en"
      ? {
          eyebrow: "Let’s talk",
          phone: "Call",
          email: "Send an email",
          chat: "Start a chat",
        }
      : {
          eyebrow: "Lass uns sprechen",
          phone: "Anrufen",
          email: "E-Mail schreiben",
          chat: "Chat starten",
        };

  return (
    <div className="rounded-panel bg-primary p-8 text-primary-foreground shadow-soft sm:p-10">
      <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,0.7fr)_minmax(34rem,1.3fr)]">
        <div>
          <p className="site-eyebrow text-accent">{eyebrow ?? copy.eyebrow}</p>
          <h2 className="font-display text-4xl leading-tight">{title}</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href="tel:+41794131830"
            aria-label={
              locale === "en"
                ? "Call Urs Gremlich on 079 413 18 30"
                : "Urs Gremlich unter 079 413 18 30 anrufen"
            }
            className="site-button site-button-md site-button-primary gap-2 whitespace-nowrap"
          >
            <PhoneIcon className="h-5 w-5" />
            {copy.phone}
          </a>
          <a
            href="mailto:info@wirkstattnatur.ch"
            className="site-button site-button-md site-button-outline-inverse gap-2 whitespace-nowrap"
          >
            <MailIcon className="h-5 w-5" />
            {copy.email}
          </a>
          <button
            type="button"
            onClick={openTidioChat}
            className="site-button site-button-md site-button-outline-inverse gap-2 whitespace-nowrap"
          >
            <ChatIcon className="h-5 w-5" />
            {copy.chat}
          </button>
        </div>
      </div>
    </div>
  );
}
