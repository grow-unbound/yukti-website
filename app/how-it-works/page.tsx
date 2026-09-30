import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { TuesdayStory } from "@/components/sections/TuesdayStory";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How it works: one Tuesday on Yukti",
  description:
    "Decide, reach, capture, know. A single day on Yukti, from building a campaign at 9am to reading the funnel at 6pm, with nothing to re-enter at month end.",
  path: "/how-it-works",
});

/** The fifth scene exists only here — the home page stops at four. */
const MONTH_END = [
  {
    time: "Month-end · Nothing to re-enter",
    body: "Orders and invoices already flowed to Tally or Zoho as they happened. Your accountant reviews; nobody re-types.",
    shape: "square" as const,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header current="/how-it-works" />
      <main id="main">
        <PageHero
          eyebrow="Decide. Reach. Capture. Know."
          title="Yukti runs on a loop, not a list of features."
          lede="Yukti captures the work that drives your business, stock, rates, customers, orders, and turns it into growth. Here is one day of it, start to finish."
          ledeAs="h2"
          spacious="cta"
        />
        <TuesdayStory extraScenes={MONTH_END} showLink={false} />
        <FinalCta />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
    </>
  );
}
