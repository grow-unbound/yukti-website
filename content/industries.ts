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

export type Industry = {
  slug: string;
  /** Short label for nav and cards. */
  name: string;
  /** Used in the <h1> and hero. */
  longName: string;
  /** One line, for the home strip and the nav popover. */
  note: string;
  icon: "electricals" | "mobiles" | "auto" | "hardware" | "cosmetics";
  title: string;
  description: string;
  lede: string;
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
    title: "Yukti for electricals distribution",
    description:
      "Wires, MCBs, switchgear, fans and fittings across a dozen brands, with schemes that change weekly and rates that differ by electrician, retailer and contractor. Yukti holds all of it in one place.",
    lede: "You carry wires, MCBs, switchgear, fans, lighting and modular fittings across a dozen brands. Every brand runs its own scheme calendar and its own portal, and your A-class electrician, your counter retailer and your project contractor each pay a different rate. Yukti holds the catalog, the rates and the orders in one place, and puts each customer's own rate list on their phone.",
    pains: [
      {
        h: "Scheme-heavy pricing that moves weekly",
        p: "A new scheme lands on Monday and the old rate is still in somebody's notebook on Thursday. The gap comes out of your margin, one quote at a time.",
      },
      {
        h: "Hundreds to thousands of SKUs",
        p: "Every gauge, every rating, every colour and finish. Your team knows the fast movers by heart and guesses at the rest.",
      },
      {
        h: "Rate enquiries all day on WhatsApp",
        p: "\"What's the rate on 1.5 sq mm now?\" arrives twenty times a day, from twenty people, and it is the same answer every time — one you already know.",
      },
      {
        h: "No cross-brand view of your own business",
        p: "Each brand gives you a portal for ordering from them. Nobody gives you one picture of what you carry, what moves and what is sitting.",
      },
      {
        h: "Idle stock nobody can discover",
        p: "You buy to a plan and sell to clear. The slow-moving cartons at the back are invisible to the customers who might actually want them.",
      },
      {
        h: "Buying on gut feel",
        p: "Procurement runs on memory and a blanket order, not on what your own sales data has been telling you for six months.",
      },
    ],
    ctaHeading: "See your own rate list on Yukti",
    ctaBody:
      "Bring your rate list for one brand. We'll build a live campaign with your products and send it to your phone, so you see exactly what your electricians would see.",
    validated: false,
  },
  {
    slug: "mobiles-electronics",
    name: "Mobiles & Electronics",
    longName: "mobiles and electronics distribution",
    note: "Weekly rate drops, price protection, dead-stock risk.",
    icon: "mobiles",
    title: "Yukti for mobiles & electronics distribution",
    description:
      "Handsets, accessories and appliances where the rate changes weekly and yesterday's stock is today's markdown. Yukti gets the new rate to every retailer the day it changes.",
    lede: "Handsets, accessories, audio, and small appliances, where the rate can change on a Tuesday and yesterday's landing cost is already the wrong number. You carry stock that loses value while it sits, and every retailer wants today's price before they commit. Yukti gets the current rate to every one of them the day it changes.",
    pains: [
      {
        h: "Rates that drop weekly, sometimes faster",
        p: "Price protection, new launches and end-of-line clearances move your numbers constantly. A rate list printed on Monday is wrong by Friday.",
      },
      {
        h: "Thousands of SKUs across models and variants",
        p: "Every model, storage size, colour and bundled accessory is its own line. Nobody holds that in their head.",
      },
      {
        h: "\"What's the rate now?\" on WhatsApp all day",
        p: "Retailers ask before every order because they know it may have moved. Your team answers the same question dozens of times a day.",
      },
      {
        h: "No cross-brand picture",
        p: "Every brand has its own procurement portal. None of them tells you how your own business is doing across all of them.",
      },
      {
        h: "Dead stock that nobody sees",
        p: "The model that stopped moving is still worth something to someone — but only if the retailers who would take it know it is there.",
      },
      {
        h: "Buying periodically, then racing to clear",
        p: "You purchase in cycles and then work the phones to move it. That works better when you can target the retailers who bought it last time.",
      },
    ],
    ctaHeading: "See your own rate list on Yukti",
    ctaBody:
      "Bring your rate list for one brand. We'll build a live campaign with your models and send it to your phone, so you see exactly what your retailers would see.",
    validated: false,
  },
  {
    slug: "automotive-spares",
    name: "Automotive Spares",
    longName: "automotive spares distribution",
    note: "Huge SKU counts, fitment lookups, counter-sale speed.",
    icon: "auto",
    title: "Yukti for automotive spares distribution",
    description:
      "Filters, brake parts, bearings, electricals and body parts across makes, models and years. Yukti holds the catalog and the rates so the counter moves faster.",
    lede: "Filters, brake parts, bearings, clutch plates, electricals and body parts, across makes, models and years — with genuine, OEM and local-make options for most of them. The counter has to move fast and the part has to be right. Yukti holds the catalog and the rates in one place, and lets your mechanics and retailers look up their own.",
    pains: [
      {
        h: "Thousands of SKUs, and fitment matters",
        p: "The same part number spans several models and misses one. Getting it wrong costs a return and a relationship, not just a sale.",
      },
      {
        h: "A large unbranded and local-make catalog",
        p: "Much of what moves has no brand catalog behind it. Those SKUs live in your own records or nowhere at all.",
      },
      {
        h: "Counter speed decides the sale",
        p: "A mechanic waiting at the counter will go elsewhere rather than wait while somebody checks three books for a rate.",
      },
      {
        h: "Rate and stock enquiries on WhatsApp",
        p: "\"Do you have this, and what's the rate?\" all day. Most of those answers already exist in your own system.",
      },
      {
        h: "Slow movers you cannot surface",
        p: "Deep stock is the reason customers come to you — but only the parts somebody thinks to ask about ever get sold.",
      },
      {
        h: "Procurement on instinct",
        p: "You buy periodically and work to clear. What actually moved last quarter should be driving that, not memory.",
      },
    ],
    ctaHeading: "See your own parts list on Yukti",
    ctaBody:
      "Bring your rate list for one category. We'll build a live campaign with your parts and send it to your phone, so you see exactly what your retailers would see.",
    validated: false,
  },
  {
    slug: "hardware",
    name: "Hardware",
    longName: "hardware and building materials distribution",
    note: "Bulky stock, project quotes against counter rates, credit-heavy.",
    icon: "hardware",
    title: "Yukti for hardware and building materials distribution",
    description:
      "Fasteners, tools, plumbing, sanitaryware, paints and adhesives — where project rates and counter rates are different numbers. Yukti keeps both straight.",
    lede: "Fasteners, hand and power tools, plumbing, sanitaryware, paints, adhesives and ironmongery. A contractor buying for a project and a customer at the counter pay different numbers for the same item, and a lot of it goes out on credit. Yukti keeps every rate on record and every order in one queue.",
    pains: [
      {
        h: "Project rates and counter rates are different numbers",
        p: "The same item quotes three ways depending on who is asking and how much they are taking. Those numbers live in memory and in loose quotations.",
      },
      {
        h: "Hundreds to thousands of SKUs, many unbranded",
        p: "Sizes, grades and finishes multiply fast, and a large part of the catalog has no brand behind it to supply the data.",
      },
      {
        h: "Rate and availability enquiries on WhatsApp",
        p: "Contractors ask before every order because the last quote may be stale. Your team re-answers what the system already knows.",
      },
      {
        h: "No single view across your brands",
        p: "Each supplier has its own ordering portal. None of them shows you your own business across all of them.",
      },
      {
        h: "Bulky idle stock nobody can browse",
        p: "What is sitting in the godown is invisible to the contractors who might take it if they simply knew it was there.",
      },
      {
        h: "Fulfilment crowds out planning",
        p: "The day goes on getting orders out. The targeted follow-up that would grow the business never gets started.",
      },
    ],
    ctaHeading: "See your own rate list on Yukti",
    ctaBody:
      "Bring your rate list for one category. We'll build a live campaign with your products and send it to your phone, so you see exactly what your contractors would see.",
    validated: false,
  },
  {
    slug: "cosmetics",
    name: "Cosmetics & Salon Supply",
    longName: "cosmetics and salon supply distribution",
    note: "Hundreds of SKUs across shades and sizes, weekly scheme changes.",
    icon: "cosmetics",
    title: "Yukti for cosmetics and salon supply distribution",
    description:
      "Hundreds of SKUs across brands, shades and sizes. Rates that change weekly. Salons asking what's the rate now. Yukti puts your rate list on their phone.",
    lede: "You carry a dozen brands across hundreds of shades and sizes, sell to salons that reorder small and often, and re-quote rates that changed last week. Yukti holds the catalog, the rates and the orders in one place, and puts each salon's own rate list on their phone.",
    pains: [
      {
        h: "Hundreds of SKUs across brands, shades and sizes",
        p: "One brand, forty shades, three sizes each. Your team knows the fast movers and guesses at the rest, and a salon asks for a shade nobody is sure you have.",
      },
      {
        h: "Rates and schemes that change week to week",
        p: "A new scheme lands Monday, the old rate is still in a notebook Thursday. The difference comes out of your margin, one quote at a time.",
      },
      {
        h: "Constant rate enquiries from salons",
        p: "\"What's the rate now?\" before nearly every order. It is most of your day and it is the same answer every time.",
      },
      {
        h: "New launches with a short window",
        p: "If the salons that would have bought it hear about it in week three, you are discounting it by week five.",
      },
      {
        h: "Idle stock nobody can discover",
        p: "Shades that stopped moving are still wanted by someone. They are invisible unless a salon happens to ask.",
      },
      {
        h: "Small, frequent repeat orders",
        p: "Salons order a little, often. Every one of those orders currently costs a phone call or a chat thread.",
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
