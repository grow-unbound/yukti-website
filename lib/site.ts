/**
 * Single source of truth for the things that point off-site.
 *
 * All of these were hardcoded (and in one case wrong) in the design export:
 * every "Use Yukti now" button pointed at https://useyukti.in, which is the
 * apex this site itself occupies — post-deploy those CTAs looped back to the
 * homepage instead of reaching signup.
 */

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://useyukti.in";

/** The product. Separate Vercel project, separate subdomain. */
export const SIGNUP_URL =
  process.env.NEXT_PUBLIC_SIGNUP_URL ?? "https://app.useyukti.in";

/**
 * Two logins: the seller (the business running Yukti) and the dealer (the
 * seller's customer, who orders from them). Both default to the app shell,
 * which routes authenticated users itself. Point either at its own entry
 * with the env var once the app exposes a separate route.
 */
export const SELLER_LOGIN_URL =
  process.env.NEXT_PUBLIC_SELLER_LOGIN_URL ?? SIGNUP_URL;
export const DEALER_LOGIN_URL =
  process.env.NEXT_PUBLIC_DEALER_LOGIN_URL ?? SIGNUP_URL;

/** Digits only, country code included — the wa.me path format. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919490744841";

/** Display form, for anywhere the number is shown rather than linked. */
export const WHATSAPP_DISPLAY = "+91 94907 44841";

export const SITE_NAME = "Yukti";

export const CONTACT_LANGUAGES = ["en", "hi", "te"];

/**
 * "Talk to us" goes to Calendly, in a new tab (Button opens every external
 * link that way; no embed is used, so there is no third-party script on the
 * site). The `campaign` UTM names the placement so bookings can be attributed
 * to a page and a button.
 *
 * Outreach links (LinkedIn, email, WhatsApp) use the same base URL with their
 * own utm_source and utm_medium, set by hand per message.
 */
export const CALENDLY_URL = "https://calendly.com/phani-krovvidi";

/** Plain-email fallback for people who will not book. Footer only. */
export const CONTACT_EMAIL = "phani@useyukti.in";

export function talkUrl(campaign: string): string {
  const q = new URLSearchParams({
    utm_source: "website",
    utm_medium: "cta",
    utm_campaign: campaign,
  });
  return `${CALENDLY_URL}?${q.toString()}`;
}

/** PostHog event fired by every "Talk to us" button. */
export const TALK_EVENT = "site_talk_click";
