/**
 * Yukti — voussoir keystone mark.
 *
 * Geometry frozen at R10 and transcribed from the design system bundle rather
 * than imported from it: the bundle is 197KB of compiled JSX from a stale
 * pre-R12 generation, and this is the only part of it worth keeping.
 *
 * The mark is never explained anywhere on the site. Per the brief's locked
 * decisions, the keystone narrative stays hidden — the mark appears, the story
 * does not. Do not add a caption.
 *
 * This is the one component allowed to carry raw hex values; the palette is
 * the mark's own, not the site's theme.
 */

const VKEY = "M13 7.4L19 7.4L21.2 16.6L10.8 16.6Z"; /* keystone */
const VHL = "M4.2 15.9L10.6 17.0L12.5 25.1L6.4 25.1Z"; /* left haunch */
const VHR = "M27.8 15.9L21.4 17.0L19.5 25.1L25.6 25.1Z"; /* right haunch */

const PALETTE = {
  copper: { key: "#B5642F", haunch: "#B5642F" },
  copperLt: { key: "#D9894C", haunch: "#D9894C" },
  ink: { key: "#221E1A", haunch: "#221E1A" },
  white: { key: "#F3EEE6", haunch: "#F3EEE6" },
  /* Expressive only — hero surfaces. Not in navigation. */
  twoTone: { key: "#B5642F", haunch: "#221E1A" },
} as const;

export type MarkVariant = keyof typeof PALETTE;

type Props = {
  size?: number;
  variant?: MarkVariant;
  /** Set only when the mark stands alone as the link's accessible name. */
  title?: string;
};

export function YuktiMark({ size = 32, variant = "copper", title }: Props) {
  const c = PALETTE[variant];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      /* Where the mark sits next to the wordmark it is decorative, and
         labelling it would make screen readers announce "Yukti" twice. */
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
      focusable="false"
    >
      <path fill={c.haunch} d={VHL} />
      <path fill={c.haunch} d={VHR} />
      <path fill={c.key} d={VKEY} />
    </svg>
  );
}
