import type { Industry } from "@/content/industries";

/**
 * Line icons for the industry cards, transcribed from the design export.
 * Decorative — the card's own heading is the label, so these are aria-hidden.
 * They inherit colour from the parent, which keeps them inside the token layer.
 */
const PATHS: Record<Industry["icon"], React.ReactNode> = {
  electricals: <polygon points="13 2 3 14 11 14 9 22 21 10 13 10 13 2" />,
  mobiles: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </>
  ),
  auto: (
    <>
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M5 17H3v-4l2-5h9l3 5h2v4h-2" />
      <path d="M9 17h6" />
    </>
  ),
  hardware: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  cosmetics: (
    <path d="M12 2c-2 4-5 6.5-5 10a5 5 0 0 0 10 0c0-3.5-3-6-5-10z" />
  ),
};

export function IndustryIcon({
  name,
  size = 22,
}: {
  name: Industry["icon"];
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
