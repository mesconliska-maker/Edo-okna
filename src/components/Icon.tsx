import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "building"
  | "check"
  | "clock"
  | "close"
  | "door"
  | "garage"
  | "grid"
  | "lock"
  | "mail"
  | "menu"
  | "phone"
  | "pin"
  | "play"
  | "remote"
  | "ruler"
  | "school"
  | "screen"
  | "service"
  | "shield"
  | "sun"
  | "window";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  building: (
    <>
      <path d="M4 21V5l8-3 8 3v16" />
      <path d="M8 9h1m6 0h1M8 13h1m6 0h1M8 17h1m6 0h1M2 21h20" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  door: (
    <>
      <path d="M5 21V3h14v18M9 21V7h7v14" />
      <path d="M13 14h.01" />
    </>
  ),
  garage: (
    <>
      <path d="m3 9 9-6 9 6v12H3Z" />
      <path d="M7 21v-8h10v8M7 16h10" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M12 3v18M3 12h18" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  pin: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  play: <path d="m9 7 8 5-8 5Z" />,
  remote: (
    <>
      <rect x="8" y="2" width="8" height="20" rx="2" />
      <circle cx="12" cy="7" r="1.2" />
      <path d="M10 12h4M10 15h4M10 18h4" />
    </>
  ),
  ruler: (
    <>
      <path d="m3 17 14-14 4 4L7 21Z" />
      <path d="m7 9 2 2m1-5 2 2m1-5 2 2" />
    </>
  ),
  school: <path d="m3 10 9-6 9 6M5 10v9m4-9v9m6-9v9m4-9v9M3 20h18" />,
  screen: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9h18M8 4v16M3 14h5" />
    </>
  ),
  service: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6l-2.4 2.5-2.3-2.3a4 4 0 0 0 5 5l7.4 7.4a2.1 2.1 0 0 1-3 3l-7.4-7.4" />
      <path d="m5 13-3 3 6 6 3-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M12 3v18M3 12h18M12 12l6-6" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
