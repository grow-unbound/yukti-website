/**
 * Home page copy. Verbatim from the design export, which is the approved
 * source of truth for wording.
 *
 * Voice rules that govern any edit here (brief §1): short sentences, active,
 * concrete. Bold about the owner's growth, exact about money and data. Never
 * lead with "AI", "smart", "automate", "leverage", "intelligence". No
 * exclamation marks. The ceiling on finance claims is "your books stay clean"
 * — never "replace Tally", never "books keep themselves", never "error-free".
 */

export const heroCopy = {
  eyebrow: "The ordering platform for B2B sellers",
  h1: "Stop losing 3-5 minutes to tab switches on every customer enquiry.",
  /**
   * The engagement-led alternate, held for the H1 A/B the brief defers until
   * traffic allows (§13). Kept here so running that test is a config change
   * rather than a markup change — and so it is not a dead <span> inside the h1.
   */
  h1Alternate: "One inbox. Every channel. Full context.",
  /**
   * Rendered as an <h2>, not a paragraph — it carries the keyword-bearing
   * second line of the pitch, so it belongs in the document outline. Styled as
   * lead copy so it still reads as a subhead.
   */
  sub: "Every WhatsApp message and email, with full buyer and stock context, in one inbox. Plus a storefront so half your buyers stop asking altogether.",
  micro: "Sign up now. Publish your first catalog in as little as 2 hours.",
};

export const manifesto = {
  h2: "Most software makes you serve the system",
  lines: [
    "Feed it data. Configure it. Reconcile it. File through it. Somewhere along the way, the tool became the boss.",
    "Yukti inverts that. You already know how you want to run this. Yukti just makes it faster to do.",
    "We build against one enemy: the busywork that sits between you and your next good decision.",
  ],
  /** Index of the line rendered as the copper-ruled pull quote. */
  emphasisIndex: 1,
};

export type TuesdayScene = {
  time: string;
  body: string;
  /** Badge shape — the design system marks steps by shape, never colour. */
  shape: "rounded" | "circle" | "diamond" | "square";
};

export const tuesday: TuesdayScene[] = [
  {
    time: "9:00 AM · Decide",
    body: "New stock lands. You build a campaign: the products, the campaign rate, the customer group, valid one week. One screen. You see the average discount before you commit.",
    shape: "rounded",
  },
  {
    time: "9:07 AM · Reach",
    body: "The campaign goes to 84 customers on WhatsApp. Each one personally, tracked, opt-out respected. Not a group blast that dies in the noise.",
    shape: "circle",
  },
  {
    time: "11:20 AM · Answer",
    body: "A buyer messages on WhatsApp. Another emails a purchase order. Both land in one inbox, next to what each usually orders, what they owe you, and what you can promise them right now. You reply in one step, not five tabs.",
    shape: "rounded",
  },
  {
    time: "All day · Capture",
    body: "Customers order from their phones. No app install, no passwords. Just a link and an OTP. Orders land in one queue with clear statuses, not in seventeen chats.",
    shape: "diamond",
  },
  {
    time: "6:00 PM · Know",
    body: "The funnel reads: 84 sent → 81 delivered → 52 opened → 19 ordered. Tomorrow's call list writes itself. Orders flow to Tally, Zoho, Busy, or QuickBooks. Your books stay clean.",
    shape: "square",
  },
];

export const industries = [
  { name: "Electricals", note: "Scheme-heavy brand pricing, rate confusion by customer class." },
  { name: "Mobiles & Electronics", note: "Weekly rate drops, price protection, dead-stock risk." },
  { name: "Automotive Spares", note: "Huge SKU counts, fitment lookups, counter-sale speed." },
  { name: "Hardware", note: "Bulky stock, project quotes against counter rates, credit-heavy." },
  { name: "Cosmetics & Salon Supply", note: "Hundreds of SKUs across shades and sizes, weekly scheme changes." },
];

/**
 * Anonymised pilot results — a 10-week pilot with a security-products
 * distributor. Approved for publication.
 *
 * Claim rules, and they are not negotiable:
 *  - The customer stays anonymous. No name, no logo, no identifying detail,
 *    anywhere on the site or in this repo. There is deliberately no
 *    security/CCTV industry page for the same reason: one would make this
 *    block trivially identifiable.
 *  - Do not restate beyond what is here. No extrapolating to a run rate, no
 *    projecting these onto a prospect's own numbers. (Demand figure moved from
 *    45L+ to 50L+ on the owner's instruction, 2026-09-30.)
 *  - `derivation` exists so a claim that rests on an assumption says so on the
 *    card. The hours figure is 388 x 3 min; that assumption is shown, not
 *    buried, because it is the one number here that is calculated rather than
 *    counted.
 *
 * The figures cross-check: 388 x 3 min = 19.4 hrs; 30 of ~49 returning
 * customers = 61%; ~49 first orders at 33% activation implies ~148 invited.
 *
 * Vocabulary: the source copy said "buyers". Changed to "customers" to match
 * the rest of the site — the brief bans "buyers" in body copy, and the nav
 * labels are the one deliberate exception.
 */
export const pilot = {
  eyebrow: "10-week pilot",
  intro:
    "A security-products distributor ran Yukti for 10 weeks. Their customers ordered from a digital catalog, with no sales team in the middle and nobody hired to handle it.",
  /** The stickiness number leads: repeat ordering is the signal that a habit formed. */
  headline:
    "Three in five customers who placed one order came back for another — inside ten weeks, without anyone chasing them.",
  stats: [
    {
      value: "61%",
      label: "of customers came back",
      note: "Of the customers who placed one order, 30+ returned. Habit formed without nudging.",
      featured: true,
    },
    {
      value: "₹50L+",
      label: "demand generated in 10 weeks",
      note: "Orders placed through the digital catalog, with no sales team involved.",
    },
    {
      value: "0",
      label: "additional staff hired",
      note: "388 enquiries handled end-to-end — quoting, WhatsApp, Zoho sync — by the platform.",
    },
    {
      value: "33%",
      label: "activation in weeks",
      note: "One in three invited customers placed their first digital order. No training, no hand-holding.",
    },
    {
      value: "97%",
      label: "of orders auto-confirmed",
      note: "WhatsApp confirmations sent automatically, with no staff needed to follow up.",
    },
    {
      value: "19+ hrs",
      label: "saved on manual work",
      note: "Across the same 388 enquiries — time back for higher-value work.",
      derivation: "Calculated at 3 minutes per enquiry.",
    },
  ],
};

/** Commitments, not outcomes. Keep it that way. */
export const promises = [
  "Publish your first catalog in as little as 2 hours with self-serve setup, or let our team migrate your stock and customers from Tally, Zoho, QuickBooks, or Excel within 2 days.",
  "We reply on WhatsApp within one working day.",
  "Your data is yours. Export everything, anytime. No lock-in.",
  "Your customers can opt out of messages anytime, and we enforce it.",
];
