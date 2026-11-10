/**
 * Solutions page content: the three seller types, each with and without
 * Yukti; the operating-layer explainer; and "works across industries".
 *
 * Every "with Yukti" line follows the wording tiers (website-updates v2.2 §2):
 * present tense for live and partial capabilities, direction language for
 * what is coming. No numbers, no accuracy or automation percentages.
 */

export type Contrast = { without: string; with: string };

export type SellerType = {
  id: "manufacturers" | "wholesalers" | "distributors";
  name: string;
  line: string;
  rows: Contrast[];
};

export const sellerTypes: SellerType[] = [
  {
    id: "manufacturers",
    name: "Manufacturers",
    line: "RFQs, part numbers, quotes.",
    rows: [
      {
        without:
          "Customers email and message part numbers. Someone looks up each one, checks stock and the customer's rate, and types the quote.",
        with: "Yukti matches product names, part numbers and SKUs from the message and has a draft quote ready, with the customer's rate and stock beside it.",
      },
      {
        without:
          "RFQs arrive as PDFs and Excel sheets that wait in a mailbox until someone has time.",
        with: "PDF and Excel RFQs are next. Today they land in the same inbox as everything else.",
      },
      {
        without:
          "Each dealer's terms live in a spreadsheet, so quotes depend on who is answering.",
        with: "Each customer sees their own rate, and rate changes go through approval. Payment terms, MOQs and approval limits on quotes are coming.",
      },
    ],
  },
  {
    id: "wholesalers",
    name: "Wholesalers",
    line: "Rates, stock, repeat orders.",
    rows: [
      {
        without:
          "Different customers pay different rates, and the answer lives in a spreadsheet or someone's head.",
        with: "Every customer has their own rate list, on a storefront they can order from. Each customer sees their own rate.",
      },
      {
        without:
          "Repeat orders arrive as chat messages, retyped one line at a time.",
        with: "Customers reorder in two taps from their phone, and orders land in one inbox as structured orders.",
      },
      {
        without:
          "\"Is it in stock?\" and \"what is my rate?\" interrupt the team all day.",
        with: "AI answers questions on price, stock, order status and dues, and suggests alternates when an item is out of stock. Your team stays in control.",
      },
    ],
  },
  {
    id: "distributors",
    name: "Distributors",
    line: "WhatsApp orders, dues, campaigns.",
    rows: [
      {
        without:
          "Orders arrive across WhatsApp chats and emails, and some of them quietly never become orders.",
        with: "WhatsApp and email in one inbox, with rates, stock and dues beside every message, and a draft ready for you to approve.",
      },
      {
        without:
          "Chasing dues means scrolling through ledgers and writing the same reminder by hand.",
        with: "Payment reminders on WhatsApp, sent to each customer individually and tracked.",
      },
      {
        without:
          "New stock is announced in WhatsApp groups that nobody reads, so you cannot tell who saw it.",
        with: "Campaigns go one to one, by area, dues or dormancy. You see who received, opened and ordered.",
      },
    ],
  },
];

export const layerCopy = {
  title: "An operating layer on top of your books",
  lede: "Yukti handles the selling side: enquiries, quotes, orders and approvals. Your ERP or accounting system stays the system of record for your books, whichever one you run.",
  points: [
    {
      h: "It sits on top, not in place",
      p: "Yukti does not replace your accounting or ERP, and it is not accounting software. It makes no journal entries and files nothing on your behalf.",
    },
    {
      h: "It carries the work up to the books",
      p: "Enquiries become approved quotes and orders in Yukti, with the right rate on each. Once approved, the order is ready for your books instead of being retyped.",
    },
    {
      h: "You can start without connecting anything",
      p: "Zoho syncs today. QuickBooks and Tally are coming soon. If you run something else, tell us what, and start without connecting anything.",
    },
  ],
};

export const industriesCopy = {
  title: "Works across industries",
  lede: "Yukti is not built for one trade. If you sell to other businesses on relationships, rates and repeat orders, the same inbox works for you. These are the trades we have written up in detail.",
  outro: "Not on the list? Talk to us. The loop underneath is the same.",
};
