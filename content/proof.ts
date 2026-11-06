/**
 * Live results from the first customer, anonymised.
 *
 * Source: read-only aggregate queries against production, run 6 Nov 2026
 * (see docs/PROOF-SOURCES.md for the exact definitions). Only counts and
 * totals were read; no customer-level data leaves the database.
 *
 * Claim rules (brief §7, not negotiable):
 *  - Never name the customer. "A multi-outlet electronics distributor in
 *    India" only, until there is written approval for more. Sector, city and
 *    outlet count together identify them.
 *  - "Estimates invoiced" is not collected revenue. Payments are off-platform.
 *  - The invoice step is team-converted by call and Zoho. Never "automatic".
 *  - Never claim revenue growth. Never add an accuracy percentage, "calls
 *    saved", or "10k enquiries".
 *  - Update `refreshedOn` whenever the figures are re-run.
 */

export const refreshedOn = "6 Nov 2026";

/** Flip to true once the case-study placeholders are filled and approved. */
export const caseStudyReady = false;

export const proofHeader =
  "What one multi-outlet distributor in India did with Yukti, Aug to Nov 2026";

export const proofIntro =
  "A multi-outlet electronics distributor in India put its customers on the Yukti storefront. These are live numbers from its own system, not a pilot.";

/** Six cards: 1, 2 and 3 columns all divide evenly. */
export const proofStats = [
  {
    value: "13 → 239",
    label: "weekly active customers",
    note: "Distinct customers placing an order in the app in a week: 13 in early August, 239 in the week of 26 October.",
    featured: true,
  },
  {
    value: "440",
    label: "customers have ordered through the app",
    note: "At least one app order since 1 August.",
  },
  {
    value: "₹1.63 Cr",
    label: "quoted in October",
    note: "Value of orders customers placed in the app in October.",
  },
  {
    value: "31%",
    label: "of the distributor's invoices came from the app in October",
    note: "By count. 28% by value.",
  },
  {
    value: "73%",
    label: "of October app orders were invoiced",
    note: "By count. 61% by value.",
  },
  {
    value: "6.3 min",
    label: "median from order to invoice",
    note: "Team-converted: the team confirms and invoices each order.",
  },
];

export const proofFootnote = `"Invoiced" is not collected revenue; payments happen outside Yukti. Data from the distributor's own system, refreshed on ${refreshedOn}.`;

/** The full table for the case-study page. */
export const proofTable = [
  ["Customers who have ordered through the app", "440", "At least one app order since 1 Aug 2026"],
  ["Weekly active customers", "13 → 239", "Distinct customers placing an app order in the week; week of 3 Aug to week of 26 Oct"],
  ["App orders, October", "2,166", "Orders created by customers in the app"],
  ["Value quoted, October", "₹1.63 Cr", "Value of those app orders"],
  ["Invoices from the app, October", "1,577 · ₹97.9L", "Invoices created from app orders"],
  ["Share of the distributor's invoices from the app, October", "31%", "By count; 28% by value"],
  ["App orders invoiced, October", "73%", "By count; 61% by value"],
  ["Median time from order to invoice", "6.3 min", "Team-converted"],
  ["Repeat ordering", "271 of 375", "Customers with an app invoice since 1 Aug who have two or more"],
];
