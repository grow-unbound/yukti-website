import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Heading } from "@/components/ui/Heading";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { PageHero } from "@/components/ui/PageHero";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SellerIcon } from "@/components/sections/SellerIcon";
import { faq } from "@/content/faq";
import { industries } from "@/content/industries";
import {
  industriesCopy,
  layerCopy,
  sellerTypes,
} from "@/content/solutions";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import w from "@/components/sections/WithWithout.module.css";
import h from "@/components/sections/HomeSections.module.css";

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
 * Solutions. Route kept as /sellers so existing links hold. Three seller
 * types, each shown with and without Yukti; an explainer of how Yukti works
 * as an operating layer on top of any books (not tied to one ERP); and a
 * "works across industries" grid. No GCC regional copy: the product is
 * English, left to right only today.
 */
export default function SolutionsPage() {
  return (
    <>
      <Header current="/sellers" />
      <main id="main">
        <PageHero
          eyebrow="Solutions"
          title="Built for the people who sell"
          lede="Manufacturers, wholesalers and distributors run on conversations. Yukti puts them in one inbox, has the draft ready with the customer's rate, stock and dues beside it, and your team approves."
        />

        {sellerTypes.map((t, i) => (
          <section
            key={t.id}
            id={t.id}
            className={`${w.block} ${i % 2 === 1 ? h.paper : ""}`}
            data-yk-section={`solution-${t.id}`}
          >
            <div className={w.inner}>
              <div className={w.head}>
                <span className={w.icon}>
                  <SellerIcon name={t.id} />
                </span>
                <div>
                  <h2 className={w.title}>{t.name}</h2>
                  <p className={w.line}>{t.line}</p>
                </div>
              </div>
              <div className={w.table}>
                {t.rows.map((r) => (
                  <div key={r.with} className={w.row}>
                    <p className={`${w.cell} ${w.without}`}>
                      <span className={w.tag}>Without Yukti</span>
                      {r.without}
                    </p>
                    <p className={`${w.cell} ${w.with}`}>
                      <span className={w.tag}>With Yukti</span>
                      {r.with}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="layer" className={w.block} data-yk-section="solution-layer">
          <div className={w.inner}>
            <Heading level={2} size="h2">
              {layerCopy.title}
            </Heading>
            <p className={h.lede}>{layerCopy.lede}</p>

            <div className={w.stack} aria-label="Where Yukti sits">
              <div className={`${w.layer} ${w.layerTop}`}>
                Your customers
                <span className={w.layerSub}>
                  WhatsApp, email, your storefront
                </span>
              </div>
              <div className={`${w.layer} ${w.layerMid}`}>
                Yukti
                <span className={w.layerSub}>
                  Enquiries, quotes, orders, approvals
                </span>
              </div>
              <div className={`${w.layer} ${w.layerBottom}`}>
                Your books: your ERP or accounting system
                <span className={w.layerSub}>
                  Stays the system of record
                </span>
              </div>
            </div>

            <ul className={w.layerGrid}>
              {layerCopy.points.map((p) => (
                <li key={p.h} className={w.layerCard}>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </li>
              ))}
            </ul>
            <p className={w.outro}>
              <Link href="/accountants">For your accountant</Link> ·{" "}
              <Link href="/integrations">Integrations</Link>
            </p>
          </div>
        </section>

        <section
          id="industries"
          className={`${w.block} ${h.paper}`}
          data-yk-section="solution-industries"
        >
          <div className={w.inner}>
            <Heading level={2} size="h2">
              {industriesCopy.title}
            </Heading>
            <p className={h.lede}>{industriesCopy.lede}</p>
            <ul className={w.indGrid}>
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className={w.indCard}>
                    <span className={h.audienceIcon}>
                      <IndustryIcon name={ind.icon} />
                    </span>
                    <span className={w.indName}>{ind.name}</span>
                    <span className={w.indNote}>{ind.note}</span>
                    <ul className={w.indList}>
                      {ind.pains.slice(0, 3).map((p) => (
                        <li key={p.h}>{p.h}</li>
                      ))}
                    </ul>
                    <span className={w.indMore}>
                      See {ind.name}&nbsp;→
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className={w.outro}>{industriesCopy.outro}</p>
          </div>
        </section>

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
