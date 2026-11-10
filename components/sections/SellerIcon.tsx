/**
 * Line icons for the three seller types. Decorative (the card's heading is the
 * label); they inherit colour from the parent so they stay in the token layer.
 */
const PATHS = {
  manufacturers: (
    <>
      <path d="M3 21V9l6 4V9l6 4V5h3v16z" />
      <path d="M3 21h18" />
      <path d="M8 17h2M13 17h2" />
    </>
  ),
  wholesalers: (
    <>
      <path d="M3 9l9-6 9 6v12H3z" />
      <path d="M9 21v-7h6v7" />
      <path d="M3 9h18" />
    </>
  ),
  distributors: (
    <>
      <path d="M2 6h11v10H2z" />
      <path d="M13 9h4l3 3v4h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </>
  ),
} as const;

export type SellerIconName = keyof typeof PATHS;

export function SellerIcon({
  name,
  size = 26,
}: {
  name: SellerIconName;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
