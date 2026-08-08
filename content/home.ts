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
  h1: "Run your entire business on one platform. Then grow it.",
  /**
   * The engagement-led alternate, held for the H1 A/B the brief defers until
   * traffic allows (§13). Kept here so running that test is a config change
   * rather than a markup change — and so it is not a dead <span> inside the h1.
   */
  h1Alternate: "Every customer on WhatsApp. Every order in one place.",
  /**
   * Rendered as an <h2>, not a paragraph — it carries the keyword-bearing
   * second line of the pitch, so it belongs in the document outline. Styled as
   * lead copy so it still reads as a subhead.
   */
  sub: "Digital catalogs, custom rates, and orders that come to you through a real ordering app your customers use. Stop losing orders and enquiries in WhatsApp. Keep it for notifications and tracking.",
  micro: "Signup now. First campaign live in hours, not days, not months.",
};

export const manifesto = {
  h2: "Most software makes you serve the system",
  lines: [
    "Feed it data. Configure it. Reconcile it. File through it. Somewhere along the way, the tool became the boss.",
    "Yukti inverts that. You decide. The platform carries the weight.",
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
    time: "All day · Capture",
    body: "Customers order from their phones. No app install, no passwords. Just a link and an OTP. Orders land in one queue with clear statuses, not in seventeen chats.",
    shape: "diamond",
  },
  {
    time: "6:00 PM · Know",
    body: "The funnel reads: 84 sent → 81 delivered → 52 opened → 19 ordered. Tomorrow's call list writes itself. Orders flow to Tally or Zoho. Your books stay clean.",
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
 * Anonymised pilot results, April–June 2026.
 *
 * NOT RENDERED. Held back until the figures are finalised. Kept here rather
 * than deleted so restoring the proof block is a content change: re-import
 * this into components/sections/OurPromise.tsx alongside the promises.
 * The claim rules below still apply the moment it goes back on the page.
 *
 * Claim rules, and they are not negotiable: these are ORDERING-APP results
 * only. Never attribute campaign or WhatsApp-broadcast outcomes to this pilot.
 * Do not restate beyond what the source reports say. The customer stays
 * anonymous — no name, no logo, no identifying detail, anywhere on the site or
 * in this repo. There is deliberately no security/CCTV industry page for the
 * same reason: it would make this block trivially identifiable.
 */
export const pilot = {
  intro:
    "A security-products distributor in Hyderabad put 119 customers on Yukti's ordering app across 4 outlets. No training. No app installs.",
  stats: [
    { value: "₹11L", label: "in customer-submitted estimates, week one" },
    { value: "56%", label: "of customers ordering self-serve in the first week" },
    {
      value: "40→72%",
      label: "estimate-to-invoice conversion, improving for six weeks",
    },
    { value: "0", label: "additional staff hired to handle it" },
  ],
  closer:
    "Six weeks in, self-serve orders were running at a pace of ₹17L+ a month — ahead of the distributor's own target.",
};

/** Commitments, not outcomes. Keep it that way. */
export const promises = [
  "First campaign live within 2 days. Our team migrates your stock and customers from Tally, Zoho, or Excel.",
  "We reply on WhatsApp within one working day.",
  "Your data is yours. Export everything, anytime. No lock-in.",
  "Your customers can opt out of messages anytime, and we enforce it.",
];
