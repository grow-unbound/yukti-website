/**
 * Single source for the FAQ, rendered on the home page and used for the
 * FAQPage JSON-LD, so the two cannot drift.
 *
 * Held back until Phani confirms the wording (website-updates v2.2 §8, §12):
 *  - "Is my data used to train AI?" must match the LLM provider's terms.
 *  - Any security or isolation claim needs the trust page first.
 * Prices do not appear here or in the schema; they are discussed on a call.
 */

export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "How does Yukti read WhatsApp and email orders?",
    a: "Messages from WhatsApp and email land in one inbox. Yukti matches product names, part numbers and SKUs from the message to your catalog and turns it into a draft quote, with the customer's own rate, stock and dues beside it. PDF and Excel RFQs are next.",
  },
  {
    q: "Do I approve before anything is sent?",
    a: "Your team stays in control. A customer's message becomes a draft quote that you approve, and rate changes go through approval.",
  },
  {
    q: "Which accounting systems does it work with?",
    a: "Zoho now. QuickBooks and Tally are coming soon. You can also start without connecting anything and link Zoho when you are ready.",
  },
  {
    q: "Do my customers need to install an app?",
    a: "No. They open a link from WhatsApp or email, verify with an OTP, and order in the browser. Any phone works.",
  },
  {
    q: "Does Yukti work if my customers use email instead of WhatsApp?",
    a: "Yes. Emails land in the same inbox as WhatsApp messages, next to the customer's order history, dues, and your live stock. Your customers do not have to change how they reach you.",
  },
  {
    q: "Can the same customer order over WhatsApp one day and email the next?",
    a: "Yes. Both channels attach to the same customer, so the history, rates, and dues you see are the same whichever way they got in touch.",
  },
  {
    q: "Can it message my existing WhatsApp groups?",
    a: "No, deliberately. Yukti messages each customer individually so you see delivery, opens, and orders per person. Groups can't tell you who ignored you. Customers consent when they first log in, and can opt out anytime.",
  },
  {
    q: "What does it cost?",
    a: "We size it to your business in a conversation. Book a time through Talk to us and bring a few real enquiries.",
  },
];
