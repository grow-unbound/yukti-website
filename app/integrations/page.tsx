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
  title: "Integrations: Zoho now, QuickBooks and Tally soon",
  description:
    "Yukti works with Zoho. QuickBooks and Tally are coming soon. Start without connecting anything and link Zoho when you are ready.",
  path: "/integrations",
});

/**
 * Not a main-nav item, deliberately. With one connector live it is too thin
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
    state: "Coming soon",
    glyph: "◇",
    tone: "info" as const,
    note: "On the way. Tell us if it is what you run, so we can build in the right order.",
  },
  {
    name: "Tally",
    state: "Coming soon",
    glyph: "◇",
    tone: "info" as const,
    note: "On the way. Tell us if it is what you run, so we can build in the right order.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Integrations"
          title="Works with Zoho. Coming soon: QuickBooks, Tally."
          lede="Start without connecting anything. Link Zoho when it suits you. QuickBooks and Tally are coming soon."
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

        <FinalCta source="integrations-closing" />
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
