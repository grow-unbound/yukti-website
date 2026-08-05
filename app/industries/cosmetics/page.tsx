import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  CampaignsMock,
  OrderingAppMock,
  WhatsappMock,
} from "@/components/sections/featureMocks";
import { features } from "@/content/features";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./page.module.css";

export const metadata = pageMetadata({
  title: "Yukti for cosmetics & salon supply distribution",
  description:
    "Hundreds of SKUs across brands, shades and sizes. Rates that change weekly. Salons asking what's the rate now. Yukti puts your rate list on their phone.",
  path: "/industries/cosmetics",
  ogTitle: "Yukti for cosmetics & salon supply",
  ogDescription:
    "New launches reach every salon the day stock lands. Rates on their phone, orders in one queue.",
});

/**
 * The only industry page that ships.
 *
 * Cosmetics is validated — a Hyderabad cosmetics distributor selling to salons
 * confirmed these pains and the loop. The other four verticals in the brief
 * (electricals, mobiles, auto spares, hardware) are NOT validated and are held
 * back on purpose: an industry page written in a trade's own language, with
 * the wrong pains in it, does more damage than generic copy would.
 *
 * There is also deliberately no security/CCTV page, and there must not be one
 * while the pilot proof on the home page is anonymised — it would make that
 * distributor trivially identifiable.
 *
 * Retailer vocabulary is allowed on industry pages. Here the buyer is a salon,
 * so "salon" is the concrete noun throughout.
 */
const PAINS = [
  {
    h: "Hundreds of SKUs across brands, shades and sizes",
    p: "One brand, forty shades, three sizes each. Your team knows the fast movers by heart and guesses at the rest. A salon asks for a shade you stock and nobody is sure whether it is in the godown or on the way.",
  },
  {
    h: "Rates and schemes that change week to week",
    p: "New scheme lands Monday, old rate is still in someone's notebook Thursday. The difference comes out of your margin, one quote at a time.",
  },
  {
    h: "Small, frequent repeat orders and constant rate enquiries",
    p: "A salon orders a little, often, and asks what's the rate now before every order. That question is most of your day, and it is the same answer every time — one you already know.",
  },
  {
    h: "New launches that need to reach every salon the day stock lands",
    p: "The launch window is short. If the salons that would have bought it hear about it in week three, you are discounting it by week five.",
  },
];

const SHOWN = ["feature-campaigns", "feature-whatsapp", "feature-app"];
const MOCKS = {
  "feature-campaigns": <CampaignsMock />,
  "feature-whatsapp": <WhatsappMock />,
  "feature-app": <OrderingAppMock />,
} as const;

export default function CosmeticsPage() {
  return (
    <>
      <Header current="/industries/cosmetics" />
      <main id="main">
        <PageHero
          eyebrow="Cosmetics & salon supply"
          title="Yukti for cosmetics and salon supply distribution"
          lede="You carry a dozen brands across hundreds of shades and sizes, sell to salons that reorder small and often, and re-quote rates that changed last week. Yukti holds the catalog, the rates and the orders in one place, and puts each salon's own rate list on their phone."
        />

        <section className={s.pains} data-yk-section="industry-pains">
          <div className={s.painGrid}>
            {PAINS.map((pain) => (
              <div key={pain.h} className={s.pain}>
                <h2 className={s.painH}>{pain.h}</h2>
                <p className={s.painP}>{pain.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={s.features}>
          <div className={s.featuresInner}>
            {features
              .filter((f) => SHOWN.includes(f.id))
              .map((feature) => (
                <FeatureRow
                  key={feature.id}
                  {...feature}
                  mock={MOCKS[feature.id as keyof typeof MOCKS]}
                />
              ))}
          </div>
        </section>

        <FinalCta
          heading="See your own shade list on Yukti"
          body="Bring your rate list for one brand. We'll build a live campaign with your products and send it to your phone, so you see exactly what a salon would see."
        />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Cosmetics & salon supply", path: "/industries/cosmetics" },
        ])}
      />
      <JsonLd data={faqLd()} />
    </>
  );
}
