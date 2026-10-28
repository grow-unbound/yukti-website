import { ImageResponse } from "next/og";

/**
 * The social card, generated at build time.
 *
 * This is the highest-leverage asset on the site and it did not exist: the
 * design export referenced /og/home-1200x630.png and /og/pricing-1200x630.png,
 * neither of which was ever produced. On a site whose own brief says it will
 * be distributed by pasting links into WhatsApp, a shared link with no preview
 * card undermines the primary channel.
 *
 * Generating it rather than exporting a PNG by hand means it cannot go missing
 * again, and it stays in sync with the palette.
 *
 * Design constraint: legible at WhatsApp preview size, which is small. That
 * means the mark plus one line, nothing more. Resist adding a subtitle.
 */

export const alt =
  "Yukti: one inbox for every buyer enquiry, with full context.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#221E1A";
const PAPER = "#F8F6F2";
const COPPER = "#B5642F";
const SUB = "#64594E";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          // A copper rule along the top edge — the one brand accent, used the
          // way the design system allows: as decoration, not behind text.
          borderTop: `14px solid ${COPPER}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <path fill={COPPER} d="M4.2 15.9L10.6 17.0L12.5 25.1L6.4 25.1Z" />
            <path fill={COPPER} d="M27.8 15.9L21.4 17.0L19.5 25.1L25.6 25.1Z" />
            <path fill={COPPER} d="M13 7.4L19 7.4L21.2 16.6L10.8 16.6Z" />
          </svg>
          <span style={{ fontSize: 44, fontWeight: 700, color: INK }}>Yukti</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: INK,
              maxWidth: 940,
            }}
          >
            Answer every buyer enquiry with the full context already in front of you.
          </span>
          <span style={{ fontSize: 30, fontWeight: 500, color: SUB }}>
            WhatsApp · Email · Buyer and stock context · Storefront
          </span>
        </div>
      </div>
    ),
    size
  );
}
