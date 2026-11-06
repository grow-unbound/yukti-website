import type { ReactNode } from "react";

/**
 * Product-page capabilities, grouped by pillar (Capture, Respond, Process).
 *
 * Every line follows the wording tiers in website-updates v2.2 §2:
 * A present tense plain; B present tense (Respond and draft quotes: no tag on
 * the page unless Phani confirms "Early access"); C direction language only.
 * Nothing here describes automatic invoicing, PDF/Excel or image intake as
 * working.
 *
 * `reverse` flips the image to the other side. The flip is done with
 * direction:rtl on the grid and direction:ltr on its children, which is what
 * lets these rows respond with no media query.
 */

export type Pillar = "capture" | "respond" | "process";

export type Feature = {
  id: string;
  pillar: Pillar;
  eyebrow: string;
  h3: string;
  body: string;
  bullets: string[];
  linkLabel?: string;
  href?: string;
  reverse?: boolean;
  mock?: ReactNode;
};

export const pillarIntro: Record<Pillar, { name: string; lede: string }> = {
  capture: {
    name: "Capture",
    lede: "Orders and enquiries from WhatsApp, email or your storefront land in one inbox as structured orders.",
  },
  respond: {
    name: "Respond",
    lede: "AI answers customers on price, stock, order status and dues, using your own rates and data. Your team stays in control.",
  },
  process: {
    name: "Process",
    lede: "Turn enquiries into quotes and orders, apply your approvals, and book to Zoho.",
  },
};

export const features: Omit<Feature, "mock">[] = [
  // ── Capture ──
  {
    id: "feature-inbox",
    pillar: "capture",
    eyebrow: "Inbox",
    h3: "One inbox for WhatsApp and email, with rates, stock and dues beside every message",
    body: "Every WhatsApp message and email lands in one inbox, beside what this customer usually orders, what they owe you, and what you can promise them right now.",
    bullets: [
      "WhatsApp and email in one place",
      "Last orders, dues and payment terms beside every message",
      "Live stock and each customer's own rate",
      "PDF and Excel RFQs are next",
    ],
  },
  {
    id: "feature-app",
    pillar: "capture",
    eyebrow: "The storefront",
    h3: "A storefront your customers can order from, with their own rates",
    body: "Every customer opens a link, verifies with an OTP, and sees their own rate list. Fewer customers need to ask, because the answer is already on their phone.",
    bullets: [
      "Each customer sees their own rate",
      "Works on any phone, in the browser, nothing to install",
      "Order status and history, self-serve. Reordering takes two taps",
    ],
    linkLabel: "See the customer app",
    href: "/buyers",
    reverse: true,
  },

  // ── Respond ── (no screenshot: text only)
  {
    id: "feature-respond",
    pillar: "respond",
    eyebrow: "AI replies",
    h3: "Answers customer questions on price, stock, order status and dues",
    body: "Customers ask the same questions all day. Yukti answers them from your own rates, stock and order data, and your team stays in control.",
    bullets: [
      "Suggests alternates when an item is out of stock",
      "Matches product names, part numbers and SKUs from the message",
      "Uses each customer's own rate and your live stock",
    ],
  },

  // ── Process ──
  {
    id: "feature-orders",
    pillar: "process",
    eyebrow: "Quotes and orders",
    h3: "Turn a customer's message into a draft quote you approve",
    body: "Enquiries become draft quotes, and quotes become orders. Orders move through clear statuses, and every change is on record.",
    bullets: [
      "Enquiry → order → confirmed → dispatched → delivered",
      "Rate changes go through approval",
      "Invoice PDF in one click",
      "Rules to invoice routine orders without the wait are coming",
    ],
  },
  {
    id: "feature-rates",
    pillar: "process",
    eyebrow: "Customers & rates",
    h3: "Quote the right rate to the right customer, every time",
    body: "Set the rate once per group, by class, city, or brand. Every quote, order, and invoice follows it.",
    bullets: [
      "Customer groups: hand-picked or rule-based",
      "Pricelists with validity windows",
      "The same rate on every document, deterministically",
      "Payment terms, MOQs and approval limits on quotes are coming",
    ],
    reverse: true,
  },
  {
    id: "feature-campaigns",
    pillar: "process",
    eyebrow: "Campaigns",
    h3: "Send each customer the rate meant for them",
    body: "Build a special rate for chosen products on a deadline, and preview exactly what customers will see before you send.",
    bullets: [
      "Inline campaign rate with struck-through base rate",
      "Bulk adjust: % off, flat amount off, fixed rate",
      "Average discount shown before you publish",
    ],
  },
  {
    id: "feature-whatsapp",
    pillar: "process",
    eyebrow: "WhatsApp engagement",
    h3: "Message customers one to one, not in groups nobody reads",
    body: "Message by area, dormant status, or dues. Sent one to one, tracked end to end.",
    bullets: [
      "Targeting: customer group, area, dormant, dues, hand-picked",
      "Pre-approved templates: new stock, campaign, payment reminder, visit alert, re-engagement",
      "Payment reminders on WhatsApp",
      "Customers consent at first login and can opt out anytime. You see exactly who received, opened, ordered",
    ],
    reverse: true,
  },
  {
    id: "feature-integrations",
    pillar: "process",
    eyebrow: "Integrations",
    h3: "Works with Zoho. Coming soon: QuickBooks, Tally.",
    body: "Yukti runs your selling. Start without connecting anything, then link Zoho when it suits you. Orders, invoices, items, and parties flow across.",
    bullets: [
      "Syncs with Zoho, two-way, minutes to set up",
    ],
    linkLabel: "See integrations",
    href: "/integrations",
  },
];

/** "Where we are headed": direction language only (tier C). */
export const headed = {
  title: "Where we are headed",
  lede: "What we are building next. None of this is live today.",
  items: [
    "PDF and Excel RFQs are next, so a customer can send the file they already have.",
    "Image enquiries are coming.",
    "Rules to invoice routine orders without the wait are coming.",
    "Payment terms, MOQs and approval limits on quotes are coming.",
    "Coming soon: QuickBooks, Tally.",
    "Payments in the order flow are on the way.",
  ],
};
