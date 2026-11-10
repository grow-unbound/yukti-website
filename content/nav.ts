import { industries } from "./industries";

/**
 * Navigation.
 *
 * "For accountants" and "For your customers" were footer-only, which buries
 * two of the highest-intent pages on the site: a distributor's CA and a
 * distributor's own customer both arrive wanting exactly one of them. They now
 * sit in a header menu.
 *
 * Every route listed here exists. The design export's footer promised About,
 * Book a demo, privacy, terms and five industry pages, none of which resolved.
 */

export type NavItem = { href: string; label: string; note?: string };

export type NavSection = { heading?: string; items: NavItem[] };

export type NavGroup = {
  label: string;
  /** Where the group's own label points, if anywhere. */
  href?: string;
  /** One or more headed columns of links in the panel. */
  sections: NavSection[];
};

export const industryNavItems: NavItem[] = industries.map((i) => ({
  href: `/industries/${i.slug}`,
  label: i.name,
  note: i.note,
}));

/** Seller types: anchors on the Solutions page. */
export const sellerNavItems: NavItem[] = [
  {
    href: "/sellers#manufacturers",
    label: "Manufacturers",
    note: "RFQs, part numbers, quotes.",
  },
  {
    href: "/sellers#wholesalers",
    label: "Wholesalers",
    note: "Rates, stock, repeat orders.",
  },
  {
    href: "/sellers#distributors",
    label: "Distributors",
    note: "WhatsApp orders, dues, campaigns.",
  },
];

/** The two pages written for the people around the seller. */
export const audienceNavItems: NavItem[] = [
  {
    href: "/accountants",
    label: "Accountants",
    note: "How Yukti sits on top of your books.",
  },
  {
    href: "/buyers",
    label: "B2B buyers",
    note: "The page to share with a customer who asks what this Yukti link is.",
  },
];

/**
 * Header: Product, Solutions (two grouped columns), Industries (a dropdown),
 * Case Studies. FAQ lives on the home and Solutions pages and in the footer,
 * not in the header, to keep the bar uncrowded.
 */
export const headerLeading: NavItem[] = [{ href: "/how-it-works", label: "Product" }];

export const navGroups: NavGroup[] = [
  {
    label: "Solutions",
    href: "/sellers",
    sections: [
      { heading: "By seller type", items: sellerNavItems },
      { heading: "Around the business", items: audienceNavItems },
    ],
  },
  { label: "Industries", sections: [{ items: industryNavItems }] },
];

export const headerTrailing: NavItem[] = [
  { href: "/case-study", label: "Case Studies" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Product",
    items: [
      { href: "/how-it-works", label: "Product" },
      { href: "/sellers", label: "Solutions" },
      { href: "/case-study", label: "Case Studies" },
      { href: "/integrations", label: "Integrations" },
      { href: "/#faq", label: "FAQ" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Industries",
    items: industryNavItems.map(({ href, label }) => ({ href, label })),
  },
  {
    heading: "Solutions",
    items: [...sellerNavItems, ...audienceNavItems].map(({ href, label }) => ({ href, label })),
  },
  {
    heading: "Legal",
    items: [
      { href: "/legal/privacy", label: "Privacy policy" },
      { href: "/legal/terms", label: "Terms of service" },
    ],
  },
];
