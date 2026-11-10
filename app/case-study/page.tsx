import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  caseStudyReady,
  proofFootnote,
  proofHeader,
  proofTable,
} from "@/content/proof";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/ui/Prose.module.css";

/**
 * Anonymised case study: "a multi-outlet electronics distributor in India".
 * Three chapters. Chapters 2 and 3 are placeholders until Phani supplies the
 * incentive details and a measured time-saved figure. The page stays noindex
 * and out of the sitemap until `caseStudyReady` is flipped in content/proof.ts.
 * No named version without written approval.
 */
export const metadata = pageMetadata({
  title: "Case study: a distributor moves orders to the app",
  description:
    "How a multi-outlet electronics distributor in India grew from 13 to 239 weekly active customers ordering through Yukti.",
  path: "/case-study",
  noIndex: !caseStudyReady,
});

export default function CaseStudyPage() {
  return (
    <>
      <Header current="/case-study" />
      <main id="main">
        <PageHero
          eyebrow="Case study"
          title="A multi-outlet electronics distributor in India"
          lede={proofHeader}
        />

        <div className={s.prose}>
          <section>
            <h2>1. Critical mass</h2>
            <p>
              Weekly active customers, meaning distinct customers placing an
              order in the app in a week, went from 13 in early August to 239 in
              the week of 26 October. By the end of the period, 440 customers had
              ordered through the app, and in October 31% of the distributor&apos;s
              invoices came from it (28% by value).
            </p>
          </section>

          <section>
            <h2>2. Incentives</h2>
            <p>
              <strong>[Placeholder: details to be supplied.]</strong> What the
              distributor did to get customers to use the app.
            </p>
          </section>

          <section>
            <h2>3. Time saved for the sales team</h2>
            <p>
              <strong>[Placeholder: to be measured.]</strong> Today the team
              converts each app order to an invoice in a median of 6.3 minutes.
              The before-and-after figure will come from a measured rollout or a
              team time study.
            </p>
          </section>

          <section>
            <h2>The numbers, with definitions</h2>
            <table>
              <thead>
                <tr>
                  <th>Figure</th>
                  <th>Value</th>
                  <th>Definition</th>
                </tr>
              </thead>
              <tbody>
                {proofTable.map(([label, value, def]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>
                      <strong>{value}</strong>
                    </td>
                    <td>{def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>{proofFootnote}</p>
            <p>
              Orders moved to the app. The distributor&apos;s total invoiced
              value did not grow in October.
            </p>
            <p>
              <Link href="/">Back to the home page</Link>
            </p>
          </section>
        </div>

        <FinalCta source="case-study-closing" />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Case study", path: "/case-study" },
        ])}
      />
    </>
  );
}
