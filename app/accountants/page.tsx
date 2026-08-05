import { Header } from "@/components/chrome/Header";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { DEMO_URL } from "@/lib/whatsapp";
import s from "@/components/ui/Prose.module.css";

export const metadata = pageMetadata({
  title: "For accountants — less punching, more reviewing",
  description:
    "Yukti is where your client runs their selling. You get the output: clean items, parties and vouchers, synced to Zoho or exported for Tally. It is not accounting software.",
  path: "/accountants",
});

/**
 * Precise register only. No growth bravado on this page — the audience is a
 * professional whose judgment we are explicitly not replacing. The section on
 * what Yukti does NOT do is the most important one here, and it is not
 * defensive: it is the reason a CA can trust the rest.
 */
export default function AccountantsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="For accountants & CAs"
          title="Less punching. More reviewing."
          lede="Yukti is where your client runs their selling. You get the output: clean, structured, ready for the books."
        />

        <div className={s.prose}>
          <section>
            <h2>What lands in your books</h2>
            <p>
              Everything your client sells through Yukti arrives as structured
              records, not as a WhatsApp screenshot to re-type.
            </p>
            <ul>
              <li>
                <strong>Items</strong> — product master with codes, units, tax
                rates and HSN where the client has entered it.
              </li>
              <li>
                <strong>Parties</strong> — customer master with GSTIN, billing
                and shipping details, and credit terms.
              </li>
              <li>
                <strong>Sales vouchers and invoices</strong> — with the rate
                that was actually applied, resolved from the client&apos;s own
                pricelist rather than typed in per order.
              </li>
              <li>
                <strong>Estimates</strong> — so the enquiries that became
                orders, and the ones that didn&apos;t, are both on record.
              </li>
            </ul>
            <p>
              Zoho Books and Zoho Inventory sync directly, two-way. Tally takes
              clean CSV for items, sales vouchers and ledgers. Busy is coming.
              Integrations are included in every plan, including Lite.
            </p>
          </section>

          <section>
            <h2>What Yukti does not do</h2>
            <p>
              This matters more than the list above, so it is stated plainly.
              Yukti is not accounting software.
            </p>
            <ul>
              <li>It does not make journal entries.</li>
              <li>It does not file returns or compute tax liability.</li>
              <li>It does not maintain a ledger or produce financial statements.</li>
              <li>It does not reconcile bank accounts.</li>
            </ul>
            <p>
              Your domain stays yours. Yukti&apos;s job is to make sure the
              data arriving in it was captured once, at the moment the sale
              happened, instead of reconstructed later from chat history.
            </p>
          </section>

          <section>
            <h2>Why we build this way</h2>
            <p>
              The CA is how good businesses stay good. We have never met a
              distributor who outgrew the need for one. What we have met is a
              lot of accountants spending their most valuable hours on data
              entry that a system should have captured at source. That is the
              part we are trying to delete, and it is the only part.
            </p>
          </section>

          <section>
            <h2>Have a client drowning in WhatsApp orders?</h2>
            <p>
              Send them our way, or talk to us first — whichever you would
              rather. We will not pitch them anything that makes your job
              harder.
            </p>
            <p style={{ marginTop: 22 }}>
              <Button href={DEMO_URL} variant="primary" size="md" event="site_demo_click">
                Introduce us
              </Button>
            </p>
          </section>
        </div>
      </main>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "For accountants", path: "/accountants" },
        ])}
      />
    </>
  );
}
