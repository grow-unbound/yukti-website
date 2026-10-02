import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { FinalCta } from "@/components/sections/FinalCta";
import { BillingToggle } from "@/components/sections/BillingToggle";
import { PlanCard } from "@/components/sections/PlanCard";
import { LITE, plansFor, pricingBlocks } from "@/content/plans";
import { REGIONS, REGION_LABEL, type Region } from "@/lib/region";
import { breadcrumbLd, pricingOffersLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./page.module.css";

export function pricingMetadata(region: Region) {
  const lite = LITE[region].price;
  return pageMetadata({
    title: "Pricing: pay for adoption, not ambition",
    description: `Yukti plans are sized by how many of your customers actively use it each month. Lite starts at ${lite} a month. Integrations included in every plan.`,
    path: "/pricing",
    ogTitle: "Yukti pricing: pay for adoption, not ambition",
    ogDescription: `Plans grow with how many of your customers actually use Yukti. Lite from ${lite} a month. Zoho, Tally, Busy and QuickBooks included in every plan.`,
  });
}

export function PricingView({ region }: { region: Region }) {
  const plans = plansFor(region);
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
          <BillingToggle />
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

        <p className={s.region}>
          Prices shown for <strong>{REGION_LABEL[region]}</strong>.{" "}
          {REGIONS.filter((r) => r !== region).map((r, i) => (
            <span key={r}>
              {i > 0 ? " · " : ""}
              {/* Plain anchors, not <Link>: prefetching would set the region
                  cookie for a link nobody clicked. */}
              <a href={`/region/${r}`}>{REGION_LABEL[r]}</a>
            </span>
          ))}
        </p>

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
      <JsonLd data={pricingOffersLd()} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
    </>
  );
}
