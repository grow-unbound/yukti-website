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

export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "Do my customers need to install an app?",
    a: "No. They open a link from WhatsApp or email, verify with an OTP, and order in the browser. Any phone works.",
  },
  {
    q: "Does it work with my Tally, Busy, Zoho, QuickBooks, or ERP tools?",
    a: "Yes. Zoho and QuickBooks sync directly, Busy connects, and Tally gets clean CSV exports for items, sales vouchers, and ledgers. You can also start without connecting anything and link your accounting when you are ready. Integrations are included in every plan.",
  },
  {
    q: "Can I just use the WhatsApp part?",
    a: "Yes. The Lite plan is WhatsApp engagement only. Import your customers, target by group, area, dues, or dormancy, and track every send. Upgrade when you want campaigns and ordering.",
  },
  {
    q: "Can it message my existing WhatsApp groups?",
    a: "No, deliberately. Yukti messages each customer individually so you see delivery, opens, and orders per person. Groups can’t tell you who ignored you. Customers consent when they first log in, and can opt out anytime.",
  },
  {
    q: "What does it cost?",
    a: "Plans are sized by how many of your customers actively use Yukti each month. You pay as adoption grows, not before. See the pricing page for the current plans, or talk to us for a number sized to your catalog.",
  },
  {
    q: "How fast is setup?",
    a: "Publish your first catalog in under 2 hours with self-serve setup. If you would rather hand it over, our team migrates your stock and customers from Tally, Zoho, QuickBooks, or Excel within 2 days.",
  },
  {
    q: "Is my data safe from other businesses on Yukti?",
    a: "Yes. Every account is fully isolated. Your customers see only what you publish to them, and your rates are visible only to you.",
  },
  {
    q: "Does Yukti work if my buyers use email instead of WhatsApp?",
    a: "Yes. Emails land in the same inbox as WhatsApp messages, next to the buyer's order history, dues, and your live stock. Your buyers do not have to change how they reach you.",
  },
  {
    q: "Can the same buyer order over WhatsApp one day and email the next?",
    a: "Yes. Both channels attach to the same buyer, so the history, rates, and dues you see are the same whichever way they got in touch.",
  },
  {
    q: "Do you support ERPs outside India, like QuickBooks, NetSuite, or SAP Business One?",
    a: "QuickBooks works today, alongside Zoho, Tally, and Busy. For NetSuite, SAP Business One, or anything else, tell us what you run. You can start without connecting anything and add the link later.",
  },
  {
    q: "What happens if a buyer emails a purchase order instead of using the catalog link?",
    a: "It lands in the same inbox as everything else, with the buyer's history, dues, and live stock beside it, so you can confirm it quickly.",
  },
  {
    q: "Does pricing change by region or currency?",
    a: "Yes. Pricing is set by region and shown in your local currency. You can switch region on the pricing page.",
  },
];
