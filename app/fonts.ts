import { Baloo_2, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Fonts are self-hosted by next/font at build time. The design export loaded
 * these from fonts.googleapis.com (twice — a stylesheet link and a CSS
 * @import), which cost two extra DNS+TLS handshakes on the critical path.
 * That is the single largest removable LCP cost in an Android webview, and
 * this site's brief targets exactly that: 4G, inside WhatsApp's in-app browser.
 *
 * Baloo 2 is kept, at one weight instead of three, and this is a deliberate
 * departure from the original plan (which called for tracing the wordmark to
 * an SVG path to drop the font entirely). The reason that plan existed was to
 * remove a third-party origin — and next/font already does that by
 * self-hosting. What remains is one small same-origin woff2 on an
 * already-open HTTP/2 connection, which is a much smaller cost than a
 * hand-traced path nobody can edit later. It is preloaded, so the wordmark
 * does not flash a fallback.
 */

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // No `weight` array: that pins static cuts and ships one file per weight.
  // This page uses 500/600/700/800, so the variable font is a single file
  // instead of four, and covers the whole axis.
});

/** Wordmark and logotype ONLY. Never body, never headings. */
export const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-wordmark",
  // Single weight is genuinely all the wordmark needs, so a static cut is
  // smaller here than the variable axis would be.
  weight: ["700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  // Variable, upright only. The export's font URL declared the italic axis
  // but requested no italic instances, and none are used.
  style: "normal",
});
