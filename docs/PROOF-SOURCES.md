# Proof figures: sources and definitions

Run 6 Nov 2026, read-only aggregate queries against the production database,
for the first customer's tenant. Counts and totals only. Re-run before
changing `refreshedOn` in `content/proof.ts`.

| Figure | Definition |
|---|---|
| Customers who have ordered through the app (440) | distinct `buyer_id` on `estimates` where `is_buyer_app_estimate`, not deleted, created on or after 2026-08-01 |
| Weekly active customers (13 → 239) | distinct `buyer_id` per ISO week on the same set; week of 3 Aug = 13; week of 26 Oct = 239 (week of 2 Nov is partial) |
| October app orders (2,166), ₹1.63 Cr | same set, created in October; sum of `total_amount` |
| October app invoices (1,577), ₹97.9L | `invoices` with `is_buyer_app_invoice`, not deleted or voided, created in October |
| 31% / 28% | app invoices over all of the tenant's invoices in October, by count (1,577 / 5,106) and value |
| 73% / 61% | October app orders that have a non-voided invoice with `estimate_id` = the order, by count (1,575 / 2,166) and value |
| 6.3 min | median of (earliest linked invoice `created_at` minus order `created_at`) for those invoiced orders |
| 271 of 375 | distinct customers with app invoices since 1 Aug; those with two or more |

## Not reproduced: do not publish

The 1 Nov docket quoted **639 of 777 enabled customers** and **401 weekly
active customers**. These queries return 440 customers and a peak of 239.
The earlier figures probably used a wider definition (any app activity, not
only orders). Not used until the definition is confirmed.

**90.5% of baskets invoiced exactly as built** was not re-run. Not published.

## Revenue

Total tenant invoice value was lower in October (₹3.52 Cr) than September
(₹3.80 Cr) on these queries. The site therefore says only that total invoiced
value did not grow in October; it never claims revenue growth.
