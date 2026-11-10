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
    a: "Your team stays in control. A customer's message becomes a draft quote that you approve, and rate changes go through approval. Replies that go out without a click are coming, and you will choose when to switch them on.",
  },
  {
    q: "What does the AI actually do?",
    a: "It reads each enquiry with the customer's rate, stock, dues and history beside it, matches product names, part numbers and SKUs, and has the draft ready. It also answers customer questions on price, stock, order status and dues.",
  },
  {
    q: "Where does the AI get its answers?",
    a: "From your own rates, catalog, stock and order data in Yukti, for that customer.",
  },
  {
    q: "What happens to questions the AI cannot answer?",
    a: "They stay in the inbox for your team, with the customer's context beside them. Your team handles the exceptions.",
  },
  {
    q: "Will my team still be involved?",
    a: "Yes. Yukti prepares the work and your team approves it, so people spend their time on the exceptions and the relationships rather than on retyping enquiries.",
  },
  {
    q: "Can I start small and let the AI do more later?",
    a: "Yes. Start with the inbox and approved drafts. Replies without a click are coming, and you decide when, and for which questions, to turn them on.",
  },
  {
    q: "Which languages does the AI work in?",
    a: "English today. Other languages will be added based on interest. Tell us what you need on the call.",
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
