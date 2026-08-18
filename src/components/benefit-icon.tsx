import type { ReactNode } from "react";
import type { BenefitIconName } from "@/lib/services";

const iconArtwork: Record<BenefitIconName, ReactNode> = {
  holistic: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3a9 9 0 0 1 7.8 4.5M21 12a9 9 0 0 1-4.5 7.8M12 21a9 9 0 0 1-7.8-4.5M3 12a9 9 0 0 1 4.5-7.8" />
    </>
  ),
  everyday: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M8 3v4M16 3v4M4 10h16M8 15l2 2 5-5" />
    </>
  ),
  variety: (
    <>
      <path d="M4 4l5 5M15 15l6 6M16 3h5v5M4 20 21 3M21 16v5h-5" />
    </>
  ),
  posture: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v10M8 10h8M8.5 21 12 17l3.5 4" />
    </>
  ),
  core: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  balance: (
    <>
      <path d="M12 3v18M5 6h14M5 6l-3 6h6L5 6ZM19 6l-3 6h6l-3-6ZM8 21h8" />
    </>
  ),
  stability: (
    <>
      <path d="m12 4 7 13H5L12 4Z" />
      <path d="M3 20h18M9 14h6" />
    </>
  ),
  rotation: (
    <>
      <path d="M19 8a8 8 0 0 0-13-2L4 8M5 16a8 8 0 0 0 13 2l2-2" />
      <path d="M4 4v4h4M20 20v-4h-4" />
    </>
  ),
  strength: (
    <>
      <path d="M7 9v6M4 10v4M17 9v6M20 10v4M7 12h10M2 12h2M20 12h2" />
    </>
  ),
  coordination: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m10.9 7.3-3.8 8.4M13.1 7.3l3.8 8.4M8.5 18h7" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
};

export function BenefitIcon({ name }: { name: BenefitIconName }) {
  return (
    <span
      className="flex size-12 items-center justify-center rounded-full bg-primary-foreground/10 text-accent"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      >
        {iconArtwork[name]}
      </svg>
    </span>
  );
}
