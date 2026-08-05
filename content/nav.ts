/**
 * Navigation.
 *
 * Integrations is deliberately not a main-nav item: with only Tally, Busy and
 * Zoho shown it is too thin to hold one of four slots. It stays reachable from
 * the home feature section and the footer.
 *
 * Every route listed here exists. Nothing in the footer points at a page that
 * was never built — the design export's footer promised About, Book a demo,
 * privacy, terms and five industry pages, none of which resolved.
 */

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/industries/cosmetics", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
];

/** Shown only in the mobile drawer, where there is room for a fourth. */
export const mobileExtraNav: NavItem[] = [
  { href: "/accountants", label: "For accountants" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Product",
    items: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/integrations", label: "Integrations" },
    ],
  },
  {
    heading: "Industries",
    items: [
      // Only Cosmetics has been validated against real customer conversations.
      // The brief's rule is explicit: ship only pages that survive validation,
      // because a thin industry page in a visitor's own trade language is
      // worse than no page. The other four are held, not stubbed.
      { href: "/industries/cosmetics", label: "Cosmetics & salon supply" },
    ],
  },
  {
    heading: "Also on Yukti",
    items: [
      { href: "/accountants", label: "For accountants" },
      { href: "/customers", label: "For your customers" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { href: "/legal/privacy", label: "Privacy policy" },
      { href: "/legal/terms", label: "Terms of service" },
    ],
  },
];
