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
    id: "feature-inbox",
    eyebrow: "Inbox",
    h3: "See who you're talking to before you reply",
    body: "Every WhatsApp message and email lands in one inbox, beside what this buyer usually orders, what they owe you, and what you can promise them right now.",
    bullets: [
      "WhatsApp and email in one place",
      "Last orders, dues and payment terms beside every message",
      "Live stock, buyer-specific rates and in-stock alternatives",
    ],
    linkLabel: "See the inbox at work",
    href: "/how-it-works",
  },
  {
    id: "feature-app",
    eyebrow: "The storefront",
    h3: "Give every customer their own rate list",
    body: "Every customer opens a link, verifies with an OTP, and sees their own rate list. Fewer buyers need to ask, because the answer is already on their phone.",
    bullets: [
      "Gated pricing: each customer sees only their own rates",
      "Works on any phone, in the browser, nothing to install",
      "Order status and history, self-serve. Reordering takes two taps",
    ],
    linkLabel: "See the customer app",
    href: "/buyers",
    reverse: true,
  },
  {
    id: "feature-orders",
    eyebrow: "Orders",
    h3: "Know where every order stands",
    body: "Enquiries become orders. Orders move through clear statuses. Invoices are one click.",
    bullets: [
      "Enquiry → order → confirmed → dispatched → delivered",
      "Invoice PDF in one click",
      "Every change on record",
    ],
    linkLabel: "See the order flow",
    href: "/how-it-works",
  },
  {
    id: "feature-rates",
    eyebrow: "Customers & rates",
    h3: "Quote the right rate to the right customer, every time",
    body: "Set the rate once per group, by class, city, or brand. Every quote, order, and invoice follows it.",
    bullets: [
      "Customer groups: hand-picked or rule-based",
      "Pricelists with validity windows",
      "The same rate on every document, deterministically",
    ],
    linkLabel: "How rates work",
    href: "/how-it-works",
    reverse: true,
  },
  {
    id: "feature-campaigns",
    eyebrow: "Campaigns",
    h3: "Send each customer the rate meant for them",
    body: "Build a special rate for chosen products on a deadline, and preview exactly what customers will see before you send.",
    bullets: [
      "Inline campaign rate with struck-through base rate",
      "Bulk adjust: % off, flat amount off, fixed rate",
      "Average discount shown before you publish",
    ],
    linkLabel: "See campaigns in action",
    href: "/how-it-works",
  },
  {
    id: "feature-whatsapp",
    eyebrow: "WhatsApp engagement",
    h3: "Message customers one to one, not in groups nobody reads",
    body: "Message by area, dormant status, or dues. Sent one to one, tracked end to end.",
    bullets: [
      "Targeting: customer group, area, dormant, dues, hand-picked",
      "Pre-approved templates: new stock, campaign, payment reminder, visit alert, re-engagement",
      "Customers consent at first login and can opt out anytime. You see exactly who received, opened, ordered",
    ],
    linkLabel: "How WhatsApp targeting works",
    href: "/how-it-works",
    reverse: true,
  },
  {
    id: "feature-integrations",
    eyebrow: "Integrations",
    h3: "Get started today. Connect your ERP when you're ready.",
    body: "Yukti runs your selling. Start without connecting anything, then link your accounting when it suits you. Orders, invoices, items, and parties flow across.",
    bullets: [
      "Zoho, Tally, Busy, and QuickBooks",
      "Two-way Zoho sync, minutes to set up",
      "Included in every plan, even Lite",
    ],
    linkLabel: "See integrations",
    href: "/integrations",
  },
];
