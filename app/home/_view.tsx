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
import { PilotProof } from "@/components/sections/PilotProof";
import { TuesdayStory } from "@/components/sections/TuesdayStory";
import { featureMocks } from "@/components/sections/featureMocks";
import { features } from "@/content/features";
import { faq } from "@/content/faq";
import { faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "../page.module.css";

export const homeMetadata = pageMetadata({
  title: "Yukti: One inbox for every buyer enquiry, with full context",
  description:
    "Every WhatsApp message and email in one inbox, with buyer history, dues and live stock beside it. Plus a storefront where each buyer sees their own rates.",
  path: "/",
  ogTitle: "Answer every buyer enquiry with the full context already in front of you.",
  ogDescription:
    "One inbox for WhatsApp and email, with buyer history and live stock beside every message. Plus a storefront where each buyer sees their own rates.",
});

export function HomeView() {
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
        <PilotProof />
        <OurPromise />
        <AccountantsBand />
        <Faq />
        <FinalCta />
      </main>
      <StickyCta />
      <JsonLd data={faqLd(faq)} />
    </>
  );
}
