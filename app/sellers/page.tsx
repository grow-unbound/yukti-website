import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Faq } from "@/components/sections/Faq";
import { industries } from "@/content/industries";
import { faq } from "@/content/faq";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/ui/Prose.module.css";

export const metadata = pageMetadata({
  title: "Solutions: manufacturers, wholesalers, distributors",
  description:
    "How Yukti works for manufacturers (RFQs, part numbers, quotes), wholesalers (rates, stock, repeat orders) and distributors (WhatsApp orders, dues, campaigns).",
  path: "/sellers",
  ogTitle: "Yukti for manufacturers, wholesalers and distributors",
  ogDescription:
    "RFQs and part numbers, rates and repeat orders, WhatsApp orders and dues. One inbox.",
});

/**
 * Solutions: one page, three anchors. Verticals appear only as examples and
 * link to their own pages. No GCC regional copy until the languages and
 * formats the product handles are confirmed (brief §4).
 *
 * Route kept as /sellers so existing links hold.
 */
export default function SolutionsPage() {
  return (
    <>
      <Header current="/sellers" />
      <main id="main">
        <PageHero
          eyebrow="Solutions"
          title="Built for the people who sell"
          lede="Manufacturers, wholesalers and distributors run on conversations. Yukti puts them in one inbox, with the customer's rate, stock and dues beside every message."
        />

        <div className={s.prose}>
          <section id="manufacturers">
            <h2>Manufacturers</h2>
            <p>
              Customers send part numbers and ask for quotes, usually over email
              and WhatsApp. Yukti matches product names, part numbers and SKUs
              from the message and turns it into a draft quote you approve.
              PDF and Excel RFQs are next.
            </p>
          </section>

          <section id="wholesalers">
            <h2>Wholesalers</h2>
            <p>
              Different customers pay different rates, and the answer lives in
              a spreadsheet or someone&apos;s head. Each customer sees their own
              rate on a storefront they can order from, repeat orders take two
              taps, and your team sees live stock beside every enquiry.
            </p>
          </section>

          <section id="distributors">
            <h2>Distributors</h2>
            <p>
              Orders arrive on WhatsApp, dues need chasing, and new stock needs
              announcing. Yukti keeps WhatsApp and email in one inbox, sends
              payment reminders on WhatsApp, and runs WhatsApp campaigns you can
              track one customer at a time.
            </p>
          </section>

          <section>
            <h2>Examples by trade</h2>
            <p>
              The same inbox works across trades. A few we have written up:
            </p>
            <ul>
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`}>{i.name}</Link>:{" "}
                  {i.note}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>What stays where it is</h2>
            <p>
              Your accounting. Yukti runs your selling and syncs with Zoho. It
              is not accounting software and files nothing on your behalf.{" "}
              <Link href="/accountants">
                The page for your accountant explains what lands in the books
              </Link>
              .
            </p>
          </section>
        </div>

        <Faq />
        <FinalCta source="solutions-closing" />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/sellers" },
        ])}
      />
      <JsonLd data={faqLd(faq)} />
    </>
  );
}
