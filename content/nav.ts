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

export type NavGroup = {
  label: string;
  /** Where the group's own label points, if anywhere. */
  href?: string;
  items: NavItem[];
};

export const industryNavItems: NavItem[] = industries.map((i) => ({
  href: `/industries/${i.slug}`,
  label: i.name,
  note: i.note,
}));

export const audienceNavItems: NavItem[] = [
  {
    href: "/accountants",
    label: "For accountants",
    note: "What lands in Tally and Zoho, and what Yukti deliberately does not do.",
  },
  {
    href: "/customers",
    label: "For your customers",
    note: "The page to share with a customer who asks what this Yukti link is.",
  },
];

/** Flat links in the header. */
export const mainNav: NavItem[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
];

/** Grouped links, rendered as popovers on desktop and sections in the drawer. */
export const navGroups: NavGroup[] = [
  { label: "Industries", items: industryNavItems },
  { label: "Who it's for", items: audienceNavItems },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Product",
    items: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/integrations", label: "Integrations" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Industries",
    items: industryNavItems.map(({ href, label }) => ({ href, label })),
  },
  {
    heading: "Who it's for",
    items: audienceNavItems.map(({ href, label }) => ({ href, label })),
  },
  {
    heading: "Legal",
    items: [
      { href: "/legal/privacy", label: "Privacy policy" },
      { href: "/legal/terms", label: "Terms of service" },
    ],
  },
];
