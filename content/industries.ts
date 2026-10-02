import type { ReactNode } from "react";

/**
 * Industry pages.
 *
 * Repetition across these is intended — a visitor reads exactly one of them.
 * What changes per page is the vocabulary and the product nouns: an electrical
 * distributor and a cosmetics distributor have the same operating problem and
 * would not recognise each other's description of it.
 *
 * Note for the record: the website brief gates industry pages on validation
 * against real customer conversations, and only Cosmetics has cleared that.
 * The other four ship on an explicit instruction. They are written from the
 * shared principles below rather than invented specifics, which keeps them
 * honest — but if a real conversation contradicts any of this, that page's
 * copy should change before the page earns more traffic.
 *
 * Retailer vocabulary is allowed on these pages only.
 */

export type IndustryPain = { h: string; p: string };

export type IndustryFeatureId =
  | "feature-inbox"
  | "feature-app"
  | "feature-campaigns";

export type FeatureCopy = { h3: string; body: string; bullets: string[] };

export type Industry = {
  slug: string;
  /** Short label for nav and cards. */
  name: string;
  /** Used in the <h1> and hero. */
  longName: string;
  /** One line, for the home strip and the nav popover. */
  note: string;
  icon: "electricals" | "mobiles" | "auto" | "hardware" | "cosmetics";
  /** <title> and search result: keyword first, no slogan. */
  title: string;
  /** The <h1>: a soft outcome line in the trade's own words. */
  h1: string;
  description: string;
  lede: string;
  /**
   * The three product sections shown on the page, rewritten in this trade's
   * terms so no two industry pages repeat the same paragraph.
   */
  featureCopy: Record<IndustryFeatureId, FeatureCopy>;
  /** Six, so the grid fills two clean rows of three. */
  pains: IndustryPain[];
  ctaHeading: string;
  ctaBody: string;
  /** Whether the pains were confirmed in a real customer conversation. */
  validated: boolean;
};

export const industries: Industry[] = [
  {
    slug: "electricals",
    name: "Electricals",
    longName: "electricals distribution",
    note: "Scheme-heavy brand pricing, rates that differ by customer class.",
    icon: "electricals",
    title: "Electricals distribution software",
    h1: "Every customer on this week's scheme, from the first quote",
    description:
      "Wires, MCBs, switchgear, fans and fittings across a dozen brands, with schemes that change weekly and a different rate for every customer class. See how electricals distributors keep every customer on the current rate.",
    lede: "A new brand scheme lands on Monday and the old rate is still in somebody's notebook on Thursday. Your A-class electrician, your counter retailer and your project contractor each pay a different number for the same cable. Yukti holds every rate in one place, puts each customer's own rate list on their phone, and shows you who they are and what is in stock the moment they message.",
    featureCopy: {
      "feature-inbox": {
        h3: "Know the customer's class and the brand's scheme before you reply",
        body:
          "A message about 2.5 sq mm wire lands beside what that electrician usually takes, what they owe and what is on the shelf, so the quote you give is the one they are on.",
        bullets: ["WhatsApp and email in one place", "Customer class, last orders and dues beside every message", "Live stock by brand and warehouse"],
      },
      "feature-app": {
        h3: "Each electrician and contractor sees their own rate list",
        body:
          "A link, an OTP, and their own rates for cables, MCBs and fittings on any phone. The \"what's the rate on…\" message gets answered before it is sent.",
        bullets: ["Rates by class: counter, A-class, project", "Nothing to install, works on any phone", "Order status and two-tap reorders"],
      },
      "feature-campaigns": {
        h3: "Move a brand scheme to the customers who buy that brand",
        body:
          "Build the scheme as a campaign on chosen SKUs with a deadline, preview what customers will see, and send it to those who bought that brand last time.",
        bullets: ["Scheme rate shown against the base rate", "Target by brand, class or dormancy", "See who opened and who ordered"],
      },
    },
    pains: [
      {
        h: "Scheme changes that reach the notebook late",
        p: "The gap between the new scheme and the rate you actually quote comes out of your margin, one quote at a time. With one rate list per customer group, the new scheme is live for everyone the day you publish it.",
      },
      {
        h: "Hundreds to thousands of SKUs nobody can hold in their head",
        p: "Every gauge, rating, colour and finish. Your team knows the fast movers and guesses at the rest. A searchable catalog with each customer's own rates means the guess is gone.",
      },
      {
        h: "The same rate question, twenty times a day",
        p: "\"What's the rate on 1.5 sq mm now?\" arrives from twenty people. When every customer opens their own rate list from a link, half of those messages never get sent.",
      },
      {
        h: "No single picture across your brands",
        p: "Each brand gives you a portal to order from them. Nobody gives you one view of what you carry and what moves. Yukti's catalog and orders sit in one place.",
      },
      {
        h: "Idle stock the right customers never hear about",
        p: "The slow-moving cartons at the back are invisible to the customers who might want them. A campaign to the customers who bought that brand last time puts them in front of the right people.",
      },
      {
        h: "Replies that start with a search",
        p: "A message arrives and you check the ledger, the stock sheet and last month's chat first. In the Yukti inbox, their history, dues and live stock are already beside the message.",
      },
    ],
    ctaHeading: "See your own rate list on Yukti",
    ctaBody:
      "Bring your rate list for one brand. We'll build a live campaign with your products and send it to your phone, so you see exactly what your customers would see.",
    validated: false,
  },
  {
    slug: "mobiles-electronics",
    name: "Mobiles & Electronics",
    longName: "mobiles and electronics distribution",
    note: "Weekly rate drops, price protection, dead-stock risk.",
    icon: "mobiles",
    title: "Mobiles and electronics distribution software",
    h1: "Today's rate in every retailer's hand the day it changes",
    description:
      "Handsets, accessories and appliances where rates change weekly and yesterday's stock is today's markdown. See how distributors get the new rate to every retailer the day it changes.",
    lede: "The rate changes on a Tuesday and Monday's landing cost is already the wrong number. Meanwhile stock loses value while it sits, and every retailer wants today's price before they commit. Yukti gets the current rate to each retailer the day it changes, and shows you their history and your stock when they ask.",
    featureCopy: {
      "feature-inbox": {
        h3: "A retailer's rate question, answered with their history and today's stock",
        body:
          "WhatsApp and email land beside what the retailer took last cycle, what is outstanding, and how many units you hold of that model right now.",
        bullets: ["WhatsApp and email in one place", "Last orders and dues beside every message", "Live stock by model, storage size and colour"],
      },
      "feature-app": {
        h3: "The current rate on every retailer's phone",
        body:
          "Retailers open a link, verify with an OTP and see today's rate for their tier. When a rate drops you publish once and every list updates.",
        bullets: ["Per-retailer rates, updated when you publish", "No app to install", "Order history and two-tap reorders"],
      },
      "feature-campaigns": {
        h3: "Clear ageing stock before it turns into markdown",
        body:
          "Put a model or accessory line on a deadline offer, preview it, and send it to the retailers who bought that line last time.",
        bullets: ["Offer rate shown against the list rate", "Target by brand or last purchase", "Track sent, opened and ordered"],
      },
    },
    pains: [
      {
        h: "A rate list that is wrong by Friday",
        p: "Price protection, launches and clearances move your numbers constantly. Publish once in Yukti and every retailer's list updates, so nobody is quoting Monday's price on Friday.",
      },
      {
        h: "Thousands of SKUs across models and variants",
        p: "Every model, storage size, colour and bundled accessory is its own line. A structured catalog with per-retailer rates replaces the memory work.",
      },
      {
        h: "\"What's the rate now?\" before every order",
        p: "Retailers ask because they know it may have moved. If the current rate is always one tap away on their phone, they ask less.",
      },
      {
        h: "No picture across brands",
        p: "Every brand has its own procurement portal and none tells you how your business is doing across all of them. Orders and sales sit together in Yukti.",
      },
      {
        h: "Dead stock that nobody sees",
        p: "The model that has gone quiet is still worth something to someone, but only if the retailers who would take it know it is there. A targeted campaign puts it in front of them.",
      },
      {
        h: "Buying in cycles, then racing to clear",
        p: "You purchase in batches and work the phones to move them. Campaigns to the retailers who bought that line last time do that work for you and show who ordered.",
      },
    ],
    ctaHeading: "See your own rate list on Yukti",
    ctaBody:
      "Bring this week's rate sheet for one brand. We'll turn it into a live campaign with your models and send it to your phone, so you see what a retailer would see.",
    validated: false,
  },
  {
    slug: "automotive-spares",
    name: "Automotive Spares",
    longName: "automotive spares distribution",
    note: "Huge SKU counts, fitment lookups, counter-sale speed.",
    icon: "auto",
    title: "Automotive spares distribution software",
    h1: "The right part at the right rate, before the customer walks out",
    description:
      "Filters, brake parts, bearings, electricals and body parts across makes, models and years. See how spares distributors answer rate and stock questions before the customer walks out.",
    lede: "A mechanic at the counter will go elsewhere rather than wait while someone checks three books for a rate. Across filters, brakes, bearings, clutch plates and electricals, and genuine, OEM and local-make options for most, the part has to be right and the answer has to be fast. Yukti holds the catalog and each customer's rates in one place, so the answer is already on screen.",
    featureCopy: {
      "feature-inbox": {
        h3: "The mechanic's question, with the account and the stock already open",
        body:
          "A message asking for a part arrives beside what that workshop usually buys, what they owe and what is on the shelf, so you can answer while they are still at the counter.",
        bullets: ["WhatsApp and email in one place", "Purchase history and dues beside every message", "Live stock, with alternatives across makes"],
      },
      "feature-app": {
        h3: "Workshops check their own rate and availability",
        body:
          "Each workshop opens a link and sees its own rates and what is in stock, in the browser, with no install. The calls that remain arrive with context.",
        bullets: ["Rates by customer, from garage to dealer", "Works on any phone", "Reorder a past basket in two taps"],
      },
      "feature-campaigns": {
        h3: "Bring slow-moving lines to the workshops that buy that make",
        body:
          "Campaign a deep-stock line to the customers who bought that make, with a deadline rate, and see who ordered.",
        bullets: ["Target by make, area or last purchase", "Deadline rate shown against the base rate", "Sent, opened and ordered, per customer"],
      },
    },
    pains: [
      {
        h: "Fitment mistakes that cost a return and a relationship",
        p: "The same part number spans several models and misses one. A structured catalog keeps fitment in front of whoever is selling.",
      },
      {
        h: "An unbranded and local-make catalog that lives nowhere",
        p: "Much of what moves has no brand catalog behind it. Those SKUs get recorded once in Yukti and are searchable by everyone on your team.",
      },
      {
        h: "Counter sales that depend on lookup speed",
        p: "The customer will not wait for three books. Rates and stock in one search means the answer arrives while they are still standing there.",
      },
      {
        h: "\"Do you have this, and what's the rate?\" all day",
        p: "Most answers already exist in your own system. Your customers see their own rates and availability from a link, and the ones who still message arrive with their history beside them.",
      },
      {
        h: "Slow movers only sell when someone asks",
        p: "Deep stock is why customers come to you, but only the parts somebody thinks to ask about get sold. Campaigns bring the slow lines to the customers who buy that make.",
      },
      {
        h: "Buying on instinct",
        p: "You buy periodically and work to clear. What actually moved last quarter should drive that, and your orders and sales are all in one place to show it.",
      },
    ],
    ctaHeading: "See your own parts list on Yukti",
    ctaBody:
      "Bring a rate list for one part category. We'll set up a live campaign with your parts and send it to your phone, so you see what a workshop would see.",
    validated: false,
  },
  {
    slug: "hardware",
    name: "Hardware",
    longName: "hardware and building materials distribution",
    note: "Bulky stock, project quotes against counter rates, credit-heavy.",
    icon: "hardware",
    title: "Hardware and building materials distribution software",
    h1: "Every project rate and counter rate on record, not in your head",
    description:
      "Fasteners, tools, plumbing, sanitaryware, paints and adhesives, where project rates and counter rates are different numbers. See how hardware distributors keep every rate on record.",
    lede: "Whether you distribute or make the goods and sell through dealers and resellers, the same item quotes three ways depending on who is asking and how much they are taking, and a lot of it goes out on credit. Those numbers live in memory and in loose quotations. Yukti keeps every rate on record for every customer group, every order in one queue, and shows dues beside the message so credit is never a guess.",
    featureCopy: {
      "feature-inbox": {
        h3: "Check credit and rate before you commit to a quote",
        body:
          "When a contractor messages, their dues, payment terms and rate group sit beside it, so a project quote never goes out against an overdue account.",
        bullets: ["WhatsApp and email in one place", "Dues and payment terms beside every message", "Live stock for bulky lines, by warehouse"],
      },
      "feature-app": {
        h3: "Contractors see project and counter rates without calling",
        body:
          "A link and an OTP open each contractor's own rate list and availability. The check-before-ordering call happens on their phone instead.",
        bullets: ["Project, counter and dealer rate groups", "Works on any phone", "Order status and reorders, self-serve"],
      },
      "feature-campaigns": {
        h3: "Move bulky idle stock to the customers who buy that category",
        body:
          "Put a category on a deadline rate, preview it, and send it to the contractors who bought it before. Follow it through to orders.",
        bullets: ["Target by category, area or dormancy", "Campaign rate shown against the base rate", "See who opened and who ordered"],
      },
    },
    pains: [
      {
        h: "Project rates and counter rates are different numbers",
        p: "The same item quotes three ways, and the numbers live in memory. One rate list per customer group means every quote, order and invoice uses the right one.",
      },
      {
        h: "Hundreds to thousands of SKUs, many unbranded",
        p: "Sizes, grades and finishes multiply fast, and a large part of the catalog has no brand behind it to supply the data. You record each once, and everyone sells from the same list.",
      },
      {
        h: "Contractors asking before every order",
        p: "The last quote may be stale, so they check. When each contractor opens their own rate list and availability from a link, the check happens without you.",
      },
      {
        h: "Credit you have to remember",
        p: "A large share goes out on credit. In the Yukti inbox, what a buyer owes and their payment terms sit beside their message when it lands.",
      },
      {
        h: "Bulky idle stock nobody can browse",
        p: "What sits in the warehouse is invisible to the contractors who might take it. A campaign puts it in front of the customers who buy that category.",
      },
      {
        h: "Fulfilment that crowds out planning",
        p: "The day goes on getting orders out, and the targeted follow-up that would grow the business never starts. With enquiries and orders in one queue, that time comes back.",
      },
    ],
    ctaHeading: "See project and counter rates side by side",
    ctaBody:
      "Bring a project rate and a counter rate for the same item. We'll show both on one customer's list and send it to your phone, so you see what a contractor would see.",
    validated: false,
  },
  {
    slug: "cosmetics",
    name: "Cosmetics & Salon Supply",
    longName: "cosmetics and salon supply distribution",
    note: "Hundreds of SKUs across shades and sizes, weekly scheme changes.",
    icon: "cosmetics",
    title: "Cosmetics and salon supply distribution software",
    h1: "Every salon's own rate list, one tap away on their phone",
    description:
      "Hundreds of SKUs across brands, shades and sizes, with rates that change weekly. See how cosmetics distributors put each salon's rate list on their phone and cut the constant rate enquiries.",
    lede: "\"What's the rate now?\" before nearly every order. It is most of your day and it is the same answer every time. You carry a dozen brands across hundreds of shades and sizes, sell to salons that reorder small and often, and re-quote rates that changed last week. Yukti puts each salon's own rate list on their phone, so the question answers itself.",
    featureCopy: {
      "feature-inbox": {
        h3: "A salon's shade question, answered with their history in view",
        body:
          "A message about a shade arrives beside what that salon usually reorders, what they owe, and whether the shade and size are in stock.",
        bullets: ["WhatsApp and email in one place", "Reorder history and dues beside every message", "Live stock by shade and size"],
      },
      "feature-app": {
        h3: "Each salon reorders from its own rate list",
        body:
          "Salons open a link, verify with an OTP and see their own rates and shades. A small reorder takes two taps, not a call.",
        bullets: ["Rates by salon, brand and scheme", "Nothing to install", "Two-tap reorders of past baskets"],
      },
      "feature-campaigns": {
        h3: "Launches and slow shades reach the salons that buy that brand",
        body:
          "Send a new launch or a slow shade as a campaign to the salons that bought that brand, and see who opened it and who ordered.",
        bullets: ["Target by brand, area or dormancy", "Scheme rate shown against the base rate", "Sent, opened and ordered, per salon"],
      },
    },
    pains: [
      {
        h: "A salon asks for a shade nobody is sure you have",
        p: "One brand, forty shades, three sizes each. Your team knows the fast movers and guesses at the rest. A searchable catalog with live stock removes the guess.",
      },
      {
        h: "Schemes that change Monday, notebooks that change Thursday",
        p: "The difference comes out of your margin, one quote at a time. Publish the new scheme once and every salon's rate list updates.",
      },
      {
        h: "The same rate enquiry before nearly every order",
        p: "It is most of your day and the answer never changes. When each salon opens their own list from a link, most of those messages never get sent.",
      },
      {
        h: "New launches with a short window",
        p: "If the salons that would have bought it hear in week three, you are discounting by week five. A campaign reaches the right salons the day it lands and shows who opened and ordered.",
      },
      {
        h: "Shades that have gone quiet, invisible to buyers",
        p: "Someone still wants them, but only if a salon happens to ask. Campaigns put slow shades in front of the salons that buy that brand.",
      },
      {
        h: "Small, frequent orders that each cost a call",
        p: "Salons order a little, often. Reordering in two taps from their own list takes the call and the chat thread out of it.",
      },
    ],
    ctaHeading: "See your own shade list on Yukti",
    ctaBody:
      "Bring your rate list for one brand. We'll build a live campaign with your products and send it to your phone, so you see exactly what a salon would see.",
    validated: true,
  },
];

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);
