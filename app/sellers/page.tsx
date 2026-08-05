import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/ui/Prose.module.css";

export const metadata = pageMetadata({
  title: "For B2B sellers — distributors, wholesalers and stockists",
  description:
    "If you sell to other businesses on relationships, rates and repeat orders, Yukti is the side of the product you run. Catalog, rates, campaigns and orders in one place.",
  path: "/sellers",
  ogTitle: "Yukti for the business doing the selling",
  ogDescription:
    "Distributors, wholesalers and stockists. Your catalog, your rates, your customers, your orders — in one place.",
});

/**
 * The seller persona page, paired with /buyers.
 *
 * These two exist because "For your customers" told a visitor nothing about
 * whose customers were meant. Naming both sides removes the ambiguity: this is
 * the page for the business running Yukti, /buyers is the page for the
 * business ordering from them.
 *
 * This is deliberately not a second homepage. The homepage sells the outcome;
 * this page answers "is this meant for me, and which side of it am I on".
 * Keep it short — every link out of here goes somewhere that sells properly.
 */
export default function SellersPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="For B2B sellers"
          title="You're the business doing the selling"
          lede="Distributors, wholesalers and stockists who sell to other businesses on relationships, rates and repeat orders. Yukti is the side of the product you run — your catalog, your rates, your customers, your orders."
        />

        <div className={s.prose}>
          <section>
            <h2>This is you if</h2>
            <ul>
              <li>
                You carry several brands and sell them on to retailers,
                electricians, mechanics, salons, contractors or other trades.
              </li>
              <li>
                Different customers pay different rates, and those rates live
                partly in a spreadsheet and partly in someone&apos;s head.
              </li>
              <li>
                A large share of your orders and enquiries arrive on WhatsApp,
                and some of them quietly never become orders.
              </li>
              <li>
                Your books are in Tally, Busy or Zoho, and you have no intention
                of moving them.
              </li>
            </ul>
          </section>

          <section>
            <h2>What you run in Yukti</h2>
            <ul>
              <li>
                <strong>Your catalog and rates.</strong> Every product, every
                customer group, every pricelist, with validity windows. Set the
                rate once and every quote, order and invoice follows it.
              </li>
              <li>
                <strong>Campaigns.</strong> Chosen products at a chosen rate,
                for a chosen group of customers, for a limited time. You see the
                average discount before you publish.
              </li>
              <li>
                <strong>WhatsApp engagement.</strong> Reach everyone in an area,
                everyone who hasn&apos;t ordered in 30 days, or everyone with
                dues — computed from your own data, sent one to one, tracked.
              </li>
              <li>
                <strong>Orders.</strong> Enquiry to delivered in one queue with
                clear statuses, and an invoice in one click.
              </li>
            </ul>
            <p>
              <Link href="/how-it-works">
                See a full day of it, start to finish
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>What your customers get</h2>
            <p>
              Their own rate list on their phone. A link and a one-time code,
              nothing to install, no password. They reorder in two taps and
              check their own order status instead of calling to ask.
            </p>
            <p>
              If a customer of yours is wondering what the Yukti link you sent
              them is, send them{" "}
              <Link href="/buyers">the page written for them</Link>.
            </p>
          </section>

          <section>
            <h2>What stays where it is</h2>
            <p>
              Your accounting. Yukti runs your selling and feeds clean,
              structured data to Tally, Busy, Zoho Books and Zoho Inventory. It
              is not accounting software, makes no journal entries and files
              nothing on your behalf.{" "}
              <Link href="/accountants">
                The page for your accountant explains exactly what lands in the
                books
              </Link>
              .
            </p>
          </section>
        </div>

        <FinalCta />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "For B2B sellers", path: "/sellers" },
        ])}
      />
    </>
  );
}
