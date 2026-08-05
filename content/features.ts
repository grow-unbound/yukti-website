import type { ReactNode } from "react";

/**
 * The six home feature sections. Copy verbatim from the design export.
 *
 * `reverse` flips the image to the other side. The flip is done with
 * direction:rtl on the grid and direction:ltr on its children — the trick the
 * export used, and the reason these sections need no media query at all: when
 * the grid collapses to one column the text still lands under the image.
 */

export type Feature = {
  id: string;
  eyebrow: string;
  h3: string;
  body: string;
  bullets: string[];
  linkLabel: string;
  href: string;
  reverse?: boolean;
  mock?: ReactNode;
};

export const features: Omit<Feature, "mock">[] = [
  {
    id: "feature-campaigns",
    eyebrow: "Campaigns",
    h3: "Special rates, chosen products, on a deadline",
    body: "Build it in one flow and preview exactly what customers will see before you send.",
    bullets: [
      "Inline campaign rate with struck-through base rate",
      "Bulk adjust: % off, flat ₹ off, fixed rate",
      "Average discount shown before you publish",
    ],
    linkLabel: "See campaigns in action",
    href: "/how-it-works",
  },
  {
    id: "feature-whatsapp",
    eyebrow: "WhatsApp engagement",
    h3: "Reach every customer, personally",
    body: "Message by area, dormant status, or dues. Sent one to one, tracked end to end.",
    bullets: [
      "Targeting: customer group, area, dormant, dues, hand-picked",
      "Pre-approved templates: new stock, campaign, payment reminder, visit alert, re-engagement",
      "Every customer can opt out anytime. You see exactly who received, opened, ordered",
    ],
    linkLabel: "How WhatsApp targeting works",
    href: "/how-it-works",
    reverse: true,
  },
  {
    id: "feature-app",
    eyebrow: "The ordering app",
    h3: "A link, an OTP, and their rates",
    body: "Every customer sees their own rate list: your brands, their prices, nothing to install. Reordering takes two taps.",
    bullets: [
      "Works on any phone, in the browser",
      "Personal rates per customer, MRP struck through",
      "Order status and history, self-serve",
    ],
    linkLabel: "See the customer app",
    href: "/buyers",
  },
  {
    id: "feature-orders",
    eyebrow: "Orders",
    h3: "From enquiry to delivered, nothing slips",
    body: "Enquiries become orders. Orders move through clear statuses. Invoices are one click.",
    bullets: [
      "Enquiry → order → confirmed → dispatched → delivered",
      "Invoice PDF in one click",
      "Every change on record",
    ],
    linkLabel: "See the order flow",
    href: "/how-it-works",
    reverse: true,
  },
  {
    id: "feature-rates",
    eyebrow: "Customers & rates",
    h3: "Every customer, every rate, on record",
    body: "A-class, B-class, city-wise, brand-wise. Set the rate once per group; every quote, order, and invoice follows it.",
    bullets: [
      "Customer groups: hand-picked or rule-based",
      "Pricelists with validity windows",
      "The same rate on every document, deterministically",
    ],
    linkLabel: "How rates work",
    href: "/how-it-works",
  },
  {
    id: "feature-integrations",
    eyebrow: "Integrations",
    h3: "Keep Tally. Keep Zoho. Keep it clean.",
    body: "Yukti runs your selling; your accounting stays where it is. Orders, invoices, items, and parties flow across.",
    bullets: [
      "Two-way Zoho sync, minutes to set up",
      "Tally-ready exports: items, vouchers, ledgers",
      "Included in every plan, even Lite",
    ],
    linkLabel: "See integrations",
    href: "/integrations",
    reverse: true,
  },
];
