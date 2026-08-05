import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { FinalCta } from "@/components/sections/FinalCta";
import { PlanCard } from "@/components/sections/PlanCard";
import { plans, pricingBlocks } from "@/content/plans";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./page.module.css";

export const metadata = pageMetadata({
  title: "Pricing — pay for adoption, not ambition",
  description:
    "Yukti plans are sized by how many of your customers actively use it each month. Lite starts at ₹5,000 a month. Integrations included in every plan.",
  path: "/pricing",
  ogTitle: "Yukti pricing — pay for adoption, not ambition",
  ogDescription:
    "Plans grow with how many of your customers actually use Yukti. Lite from ₹5,000 a month. Tally and Zoho included in every plan.",
});

export default function PricingPage() {
  return (
    <>
      <Header current="/pricing" />
      <main id="main">
        <section className={s.hero}>
          <div className={s.heroInner}>
            <Eyebrow>Pricing</Eyebrow>
            <Heading level={1} size="h1sm">
              Pay for adoption, not ambition
            </Heading>
            <p className={s.sub}>
              Every plan includes the full platform for what it does, with no
              feature grids to decode. Plans grow with how many of your
              customers actively use Yukti each month.
            </p>
          </div>
          {/* Watched by the sticky mobile CTA bar. */}
          <div id="hero-sentinel" aria-hidden="true" />
        </section>

        <section className={s.plans} data-yk-section="plans">
          <div className={s.planGrid}>
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className={s.footnote}>
            Active customers means the customers who actually place an order or
            request an estimate that month. Band numbers are reviewed as we
            learn how businesses use Yukti.
          </p>
        </section>

        <section className={s.blocks}>
          <div className={s.blockGrid}>
            {pricingBlocks.map((block) => (
              <div key={block.h}>
                <h2 className={s.blockH}>{block.h}</h2>
                <p className={s.blockP}>{block.p}</p>
              </div>
            ))}
          </div>
        </section>

        <FinalCta
          signupVariant="primary"
          heading="One call. One number."
          body="Tell us your catalog size and how you sell today. We'll give you a number that makes sense next to a fraction of one salesperson's salary."
        />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
    </>
  );
}
