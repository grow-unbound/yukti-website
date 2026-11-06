import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { AudienceStrip } from "@/components/sections/AudienceStrip";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { IntegrationsStrip } from "@/components/sections/IntegrationsStrip";
import { LoopDiagram } from "@/components/sections/LoopDiagram";
import { Pillars } from "@/components/sections/Pillars";
import { ProofBlock } from "@/components/sections/ProofBlock";
import { faq } from "@/content/faq";
import { faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const homeMetadata = pageMetadata({
  title: "Yukti: AI sales operations for distributors",
  description:
    "AI sales operations for manufacturers, wholesalers and distributors. Quote, answer and invoice from one inbox, across WhatsApp, email and your storefront.",
  path: "/",
  ogTitle: "AI sales operations for manufacturers, wholesalers, and distributors",
  ogDescription:
    "Quote, answer and invoice from one inbox, across every channel.",
});

export function HomeView() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Pillars />
        <AudienceStrip />
        <LoopDiagram />
        <IntegrationsStrip />
        <ProofBlock />
        <Faq />
        <FinalCta source="home-closing" />
      </main>
      <StickyCta />
      <JsonLd data={faqLd(faq)} />
    </>
  );
}
