import { WHATSAPP_NUMBER } from "./site";

/**
 * There is no demo form and no /demo route. "Book a demo" opens WhatsApp
 * directly with a prefilled message that asks for the same qualifying details
 * a form would have collected.
 *
 * The tradeoff, recorded here because it is easy to forget later: the handoff
 * is unobservable. We can fire `site_demo_click` on intent, but there is no
 * on-site submit event, so demo bookings/week has to be counted from the
 * WhatsApp inbox rather than read off a dashboard.
 */
const DEMO_MESSAGE = `Hi,

I found Yukti on your website and want to see a demo.

Business name:
My name & role:
City:
What we sell (e.g. electricals, mobiles, auto spares, hardware, cosmetics, other):
Roughly how many customers/retailers we sell to:
How we currently manage orders (WhatsApp+Excel, another tool, etc.):
`;

/**
 * Build a wa.me deep link. encodeURIComponent turns newlines into %0A, which
 * is what WhatsApp expects; do not hand-roll the encoding.
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** The link behind every "Book a demo" CTA on the site. */
export const DEMO_URL = whatsappUrl(DEMO_MESSAGE);

/** Plain contact link, for the footer and the "talk to us" affordances. */
export const WHATSAPP_URL = whatsappUrl();
