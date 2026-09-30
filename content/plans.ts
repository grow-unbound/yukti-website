/**
 * Pricing.
 *
 * Lite is the only tier with a public number — it is the self-serve
 * acquisition rung and needs no sales call. The other three genuinely require
 * a conversation to price honestly (catalog size and migration scope), so
 * they stay price-on-request.
 *
 * The annual figure is ten months' worth: ₹50,000 against ₹60,000 billed
 * monthly. Say that plainly rather than making the visitor do the arithmetic.
 *
 * GST is deliberately not mentioned. The figures were supplied without a GST
 * treatment, and inventing a "+ GST" line would be putting words in the
 * business's mouth on a number people will hold us to. Add it when confirmed.
 *
 * Band numbers (50/500 active customers, 200/2,000 transactions) carry over
 * from the design export. The brief still marks them directional.
 */

import type { Region } from "@/lib/region";

export type Plan = {
  name: string;
  blurb: string;
  price: string;
  priceNote?: string;
  /** When set, the card renders both figures and the page's toggle picks one. */
  billing?: {
    monthly: { price: string; note: string };
    annual: { price: string; note: string };
  };
  /** Elevates the card and shows the ribbon. */
  featured?: boolean;
  cta: { label: string; kind: "signup" | "demo" };
  rows: { label: string; value: string }[];
};

const basePlans: Plan[] = [
  {
    name: "Lite",
    blurb: "WhatsApp engagement only",
    price: "",
    cta: { label: "Use Yukti now", kind: "signup" },
    rows: [
      { label: "Ordering app", value: "-" },
      { label: "Locations", value: "-" },
      { label: "Active customers", value: "Unlimited contacts" },
      { label: "Transactions / month", value: "-" },
      { label: "Campaigns, rates, orders", value: "-" },
      { label: "WhatsApp targeting & tracking", value: "✓" },
      { label: "Business insights", value: "✓" },
      { label: "Zoho, Tally, Busy, QuickBooks", value: "✓" },
      { label: "Onboarding & support", value: "Self-serve" },
    ],
  },
  {
    name: "Starter",
    blurb: "The full platform",
    price: "Price on request",
    cta: { label: "Talk to us", kind: "demo" },
    rows: [
      { label: "Ordering app", value: "✓" },
      { label: "Locations", value: "1" },
      { label: "Active customers", value: "up to 50 / month" },
      { label: "Transactions / month", value: "up to 200" },
      { label: "Campaigns, rates, orders", value: "✓" },
      { label: "WhatsApp targeting & tracking", value: "✓" },
      { label: "Business insights", value: "✓" },
      { label: "Zoho, Tally, Busy, QuickBooks", value: "✓" },
      { label: "Onboarding & support", value: "Assisted" },
    ],
  },
  {
    name: "Growth",
    blurb: "The full platform",
    price: "Price on request",
    featured: true,
    cta: { label: "Talk to us", kind: "demo" },
    rows: [
      { label: "Ordering app", value: "✓" },
      { label: "Locations", value: "10" },
      { label: "Active customers", value: "up to 500 / month" },
      { label: "Transactions / month", value: "up to 2,000" },
      { label: "Campaigns, rates, orders", value: "✓" },
      { label: "WhatsApp targeting & tracking", value: "✓" },
      { label: "Business insights", value: "✓" },
      { label: "Zoho, Tally, Busy, QuickBooks", value: "✓" },
      { label: "Onboarding & support", value: "Assisted migration" },
    ],
  },
  {
    name: "Scale",
    blurb: "The full platform",
    price: "Price on request",
    cta: { label: "Talk to us", kind: "demo" },
    rows: [
      { label: "Ordering app", value: "✓" },
      { label: "Locations", value: "Custom" },
      { label: "Active customers", value: "Custom, at scale" },
      { label: "Transactions / month", value: "Custom, at scale" },
      { label: "Campaigns, rates, orders", value: "✓" },
      { label: "WhatsApp targeting & tracking", value: "✓" },
      { label: "Business insights", value: "✓" },
      { label: "Zoho, Tally, Busy, QuickBooks", value: "✓" },
      { label: "Onboarding & support", value: "White-glove" },
    ],
  },
];

/**
 * Lite, quoted per region. The monthly figures are the owner's. Annual is ten
 * months' worth in every region (the rule supplied for India), confirmed by
 * the owner for EU and rest of world on 2026-09-30.
 */
export const LITE: Record<
  Region,
  { price: string; annualPrice: string; amount: string; currency: string }
> = {
  in: { price: "₹5,000", annualPrice: "₹50,000", amount: "5000", currency: "INR" },
  eu: { price: "€300", annualPrice: "€3,000", amount: "300", currency: "EUR" },
  row: { price: "$300", annualPrice: "$3,000", amount: "300", currency: "USD" },
};

export function plansFor(region: Region): Plan[] {
  const lite = LITE[region];
  return basePlans.map((plan) =>
    plan.name === "Lite"
      ? {
          ...plan,
          price: lite.price,
          priceNote: "per month",
          billing: {
            monthly: { price: lite.price, note: "per month" },
            annual: { price: lite.annualPrice, note: "per year, two months free" },
          },
        }
      : plan
  );
}

export const pricingBlocks = [
  {
    h: "Why active customers?",
    p: "You pay when your customers actually use Yukti, which is the thing that grows your business. Not for seats, not for features, not before the value shows up.",
  },
  {
    h: "WhatsApp credits",
    p: "Every plan includes a monthly credit bundle. Beyond that, transparent per-message credits. Top up anytime, pay for what you send. Meta charges per message; we pass it through with a clear markup, never hidden in your plan.",
  },
  {
    h: "Why no price above Lite?",
    p: "Your number depends on catalog size and migration scope. One call, one number, and it will make sense next to a fraction of one salesperson's salary.",
  },
];
