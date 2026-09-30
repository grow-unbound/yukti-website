import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { StatusChip } from "@/components/mock/primitives";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/ui/Prose.module.css";
import p from "./page.module.css";

export const metadata = pageMetadata({
  title: "Integrations: Zoho, Tally, Busy, QuickBooks",
  description:
    "Start today without connecting anything, then link Zoho, Tally, Busy or QuickBooks when you are ready. Included in every plan, including Lite.",
  path: "/integrations",
});

/**
 * Not a main-nav item, deliberately. With four connectors live it is too thin
 * to hold one of four nav slots — it stays reachable from the home feature
 * section and the footer. Revisit when the depth justifies the click.
 *
 * Status is shape plus label, never colour alone.
 */
const CONNECTORS = [
  {
    name: "Zoho",
    state: "Live · two-way",
    glyph: "✓",
    tone: "success" as const,
    note: "Zoho Books and Zoho Inventory sync both ways: items, parties, invoices, estimates and stock. Set up in minutes with a connection test before anything moves.",
  },
  {
    name: "QuickBooks",
    state: "Live",
    glyph: "✓",
    tone: "success" as const,
    note: "Items, customers, invoices and orders flow to QuickBooks, so your books stay current without double entry.",
  },
  {
    name: "Tally Prime",
    state: "Live · CSV export",
    glyph: "✓",
    tone: "success" as const,
    note: "Clean CSV for items, sales vouchers and ledgers that imports without hand-fixing.",
  },
  {
    name: "Busy",
    state: "Live",
    glyph: "✓",
    tone: "success" as const,
    note: "Connect Busy and orders and items flow across. Talk to us if your setup is unusual.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Integrations"
          title="Get started today. Connect your ERP when you are ready."
          lede="Start without connecting anything. Link your accounting when it suits you. Included in every plan, because your data flowing in is what makes targeting and campaigns work at all."
        />

        <div className={p.wrap}>
          <ul className={p.grid}>
            {CONNECTORS.map((c) => (
              <li key={c.name} className={p.card}>
                <div className={p.cardHead}>
                  <h2 className={p.cardName}>{c.name}</h2>
                  <StatusChip glyph={c.glyph} tone={c.tone}>
                    {c.state}
                  </StatusChip>
                </div>
                <p className={p.cardNote}>{c.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.prose}>
          <section>
            <h2>What syncs</h2>
            <ul>
              <li>
                <strong>Items</strong>: codes, units, tax rates, HSN where
                entered.
              </li>
              <li>
                <strong>Parties</strong>: customers with GSTIN, addresses and
                credit terms.
              </li>
              <li>
                <strong>Orders and invoices</strong>: with the rate that was
                actually applied, resolved from your pricelist.
              </li>
              <li>
                <strong>Estimates</strong>: so enquiries that converted and
                those that didn&apos;t are both on record.
              </li>
            </ul>
          </section>

          <section>
            <h2>Setup takes minutes, not days</h2>
            <p>
              A guided wizard with a connection test: you see exactly what will
              move before anything moves. If the test fails, nothing syncs and
              nothing is half-written into your books.
            </p>
          </section>

          <section>
            <h2>Your data stays yours</h2>
            <p>
              Export everything, anytime, in full, you do not have to ask us
              for a special export, and you do not need an active integration to
              get your data out. No lock-in is a commitment, not a feature.
            </p>
          </section>
        </div>

        <FinalCta />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
        ])}
      />
    </>
  );
}
