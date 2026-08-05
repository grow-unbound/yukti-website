/**
 * Single source for the FAQ.
 *
 * The design export kept two hand-maintained copies of this — one in the
 * accordion's logic class, one inside the FAQPage JSON-LD — and its handover
 * notes warn that they must be kept in sync. They drift. Both the rendered
 * accordion and the structured data now derive from this array, so they
 * cannot.
 *
 * Copy is verbatim from the export, which is the approved source of truth.
 */

export type FaqItem = {
  q: string;
  a: string;
};

export const faq: FaqItem[] = [
  {
    q: "Do my customers need to install an app?",
    a: "No. They open a WhatsApp link, verify with an OTP, and order in the browser. Any phone works.",
  },
  {
    q: "Does it work with my Tally, Busy, Zoho, or ERP tools?",
    a: "Yes. Clean CSV exports for items, sales vouchers, and ledgers for Tally. Busy, Zoho Books, and Zoho Inventory sync directly. Integrations are included in every plan.",
  },
  {
    q: "Can I just use the WhatsApp part?",
    a: "Yes. The Lite plan is WhatsApp engagement only. Import your customers, target by group, area, dues, or dormancy, and track every send. Upgrade when you want campaigns and ordering.",
  },
  {
    q: "Can it message my existing WhatsApp groups?",
    a: "No, deliberately. Yukti messages each customer individually so you see delivery, opens, and orders per person. Groups can’t tell you who ignored you. Customers can opt out anytime.",
  },
  {
    q: "What does it cost?",
    a: "Plans are sized by how many of your customers actively use Yukti each month. You pay as adoption grows, not before. Lite starts at ₹5,000 a month; for the rest, talk to us for a number. Most businesses compare it to a fraction of one salesperson’s salary.",
  },
  {
    q: "How fast is setup?",
    a: "Most businesses send their first broadcast on day one and publish their first campaign within two days.",
  },
  {
    q: "Is my data safe from other businesses on Yukti?",
    a: "Yes. Every account is fully isolated. Your customers see only what you publish to them, and your rates are visible only to you.",
  },
];
