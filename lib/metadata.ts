import type { Metadata } from "next";
import { SITE_ORIGIN } from "./site";

/**
 * Per-page metadata.
 *
 * The design export already had good title/description/OG strings on its two
 * pages — those are carried over verbatim rather than rewritten. What it did
 * not have was a way to produce them consistently for a page it had not
 * anticipated, or an OG image that actually existed (it referenced two PNGs
 * that were never produced). Both are handled here plus app/opengraph-image.
 */

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Overrides the title for social cards, where a punchier line reads better. */
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
};

/**
 * The generated social card, referenced explicitly.
 *
 * Next's file-based `opengraph-image` convention only reaches routes that do
 * not declare their own `openGraph` object — and every page here declares one
 * to get a per-page og:title. Without this, only the homepage got an image and
 * every other shared link rendered as a bare blue link in WhatsApp, which is
 * exactly the failure this site cannot afford.
 */
const OG_IMAGE = {
  url: `${SITE_ORIGIN}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Yukti: one inbox for every buyer enquiry, with full context.",
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex,
}: PageMetaInput): Metadata {
  const url = `${SITE_ORIGIN}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Yukti",
      locale: "en_IN",
      url,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [OG_IMAGE.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
