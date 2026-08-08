import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { AccountantsBand } from "@/components/sections/AccountantsBand";
import { Faq } from "@/components/sections/Faq";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { Manifesto } from "@/components/sections/Manifesto";
import { OurPromise } from "@/components/sections/OurPromise";
import { TuesdayStory } from "@/components/sections/TuesdayStory";
import { featureMocks } from "@/components/sections/featureMocks";
import { features } from "@/content/features";
import { faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./page.module.css";

export const metadata = pageMetadata({
  title: "Yukti — WhatsApp campaigns, rates & orders for distributors",
  description:
    "Yukti is the operating layer for Indian distributors: publish campaigns, reach every customer on WhatsApp, and take orders in an app they'll actually use.",
  path: "/",
  ogTitle: "Run your whole business in one place. Then grow it.",
  ogDescription:
    "Campaigns, WhatsApp reach, and an ordering app your customers will actually use. Works with Tally and Zoho.",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Manifesto />
        <TuesdayStory />

        <section className={s.features} data-yk-section="features">
          <div className={s.featuresInner}>
            {features.map((feature) => (
              <FeatureRow
                key={feature.id}
                {...feature}
                mock={featureMocks[feature.id as keyof typeof featureMocks]}
              />
            ))}
          </div>
        </section>

        <IndustriesStrip />
        <OurPromise />
        <AccountantsBand />
        <Faq />
        <FinalCta />
      </main>
      <StickyCta />
      <JsonLd data={faqLd()} />
    </>
  );
}
