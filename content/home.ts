/**
 * Home page copy, from website-updates v2.2 (6 Nov 2026).
 *
 * Wording tiers (brief §2) govern every line here:
 *   A  live today, plain present tense
 *   B  built but partial, present tense, no tag in the hero
 *   C  direction: "is building", "next", "coming soon". Never as working.
 *
 * Strict only on five things: numbers (with definitions), security and
 * compliance claims, named integrations, accuracy or automation percentages,
 * and anything a prospect can test in the first demo. No "autonomous",
 * "error-free" or "replaces your team".
 *
 * The hero says "invoice". That is direction until automation rules ship, so
 * nothing below may describe automatic invoicing as live.
 */

export const heroCopy = {
  h1: "AI sales operations for manufacturers, wholesalers, and distributors",
  sub: "Quote, answer and invoice from one inbox, across every channel.",
};

export type Pillar = {
  id: "capture" | "process" | "respond";
  name: string;
  body: string;
};

/**
 * The order is the work: Capture, then Process, then Respond. The value is in
 * the middle step. AI reads each enquiry with the full context (the customer's
 * rate, stock, dues and history) and has a draft ready; Respond is the team
 * approving and sending it. Replies that go out without a click are direction
 * (tier C): never worded as working.
 */
export const pillarsCopy = {
  title: "One platform. Three jobs.",
  lede: "Yukti does the work with the full context. You approve the draft.",
  pillars: [
    {
      id: "capture",
      name: "Capture",
      body: "Orders and enquiries from WhatsApp, email or your storefront land in one inbox as structured orders. PDF and Excel RFQs are next.",
    },
    {
      id: "process",
      name: "Process",
      body: "AI reads each enquiry with the customer's rate, stock, dues and history beside it, and has the quote or order ready as a draft. Rules to invoice routine orders without the wait are coming.",
    },
    {
      id: "respond",
      name: "Respond",
      body: "Approve and send the ready draft in one step. AI answers customers on price, stock, order status and dues, using your own rates and data. Replies without a click are coming, switched on only when you are ready.",
    },
  ] satisfies Pillar[],
};

export const audienceCopy = {
  title: "Built for the people who sell",
  cards: [
    {
      id: "manufacturers",
      name: "Manufacturers",
      body: "RFQs, part numbers, quotes.",
    },
    {
      id: "wholesalers",
      name: "Wholesalers",
      body: "Rates, stock, repeat orders.",
    },
    {
      id: "distributors",
      name: "Distributors",
      body: "WhatsApp orders, dues, campaigns.",
    },
  ],
};

/**
 * The loop, as a timeline of seven steps in three phases that match the three
 * jobs. No status chips. Copy follows the tiers: present tense for A and B,
 * intent language for C.
 */
export const loopCopy = {
  title: "How it fits together",
  lede: "Every enquiry follows the same path, and the draft is ready before your team opens it.",
  phases: [
    {
      id: "capture",
      name: "Capture",
      steps: [
        {
          name: "Capture",
          body: "A message or order arrives from WhatsApp, email or your storefront and lands in one inbox.",
        },
        {
          name: "Resolve",
          body: "Yukti matches product names, part numbers and SKUs from the message to your catalog.",
        },
      ],
    },
    {
      id: "process",
      name: "Process",
      steps: [
        {
          name: "Price",
          body: "The draft carries the customer's own rate, with live stock and dues beside it.",
        },
        {
          name: "Approve",
          body: "You review and approve the ready draft. Rate changes go through approval.",
        },
        {
          name: "Book",
          body: "The order syncs to Zoho. Rules to invoice routine orders without the wait are coming.",
        },
      ],
    },
    {
      id: "respond",
      name: "Respond",
      steps: [
        {
          name: "Confirm",
          body: "The customer gets the reply and the confirmation, and can track the order.",
        },
        {
          name: "Grow",
          body: "WhatsApp campaigns and payment reminders bring customers back and keep dues moving.",
        },
      ],
    },
  ],
};

export const integrationsCopy = {
  line: "Works with Zoho.",
  soon: "Coming soon: QuickBooks, Tally.",
};
