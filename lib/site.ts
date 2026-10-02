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
