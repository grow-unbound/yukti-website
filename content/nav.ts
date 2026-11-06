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

/**
 * "Who it's for" now holds the two pages written for the people around the
 * seller. The seller page itself is Solutions, a main-nav item.
 */
export const audienceNavItems: NavItem[] = [
  {
    href: "/buyers",
    label: "For your customers",
    note: "The page to share with a customer who asks what this Yukti link is.",
  },
  {
    href: "/accountants",
    label: "For accountants",
    note: "What lands in Zoho, and what Yukti deliberately does not do.",
  },
];

/**
 * Flat links in the header.
 *
 * FAQ points at the home page section rather than a page of its own: the
 * answers are the FAQPage structured data source, and splitting them onto a
 * separate route would either duplicate that markup or move it off the page
 * that earns the traffic.
 */
export const mainNav: NavItem[] = [
  { href: "/how-it-works", label: "Product" },
  { href: "/sellers", label: "Solutions" },
  { href: "/case-study", label: "Case study" },
  { href: "/#faq", label: "FAQ" },
];

/** Grouped links, rendered as popovers on desktop and sections in the drawer. */
export const navGroups: NavGroup[] = [
  { label: "Examples by trade", items: industryNavItems },
  { label: "Who it's for", items: audienceNavItems },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Product",
    items: [
      { href: "/how-it-works", label: "Product" },
      { href: "/sellers", label: "Solutions" },
      { href: "/case-study", label: "Case study" },
      { href: "/integrations", label: "Integrations" },
      { href: "/#faq", label: "FAQ" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "By trade",
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
