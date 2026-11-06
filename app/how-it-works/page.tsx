import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Heading } from "@/components/ui/Heading";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { FinalCta } from "@/components/sections/FinalCta";
import { LoopDiagram } from "@/components/sections/LoopDiagram";
import { featureMocks } from "@/components/sections/featureMocks";
import { features, headed, pillarIntro, type Pillar } from "@/content/features";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/sections/HomeSections.module.css";
import g from "../page.module.css";

/**
 * The Product page (route kept as /how-it-works so existing links hold).
 * Organised by the three pillars, each in present tense for what is live and
 * direction language for what is next, with "Where we are headed" at the end.
 */
export const metadata = pageMetadata({
  title: "Product: AI sales operations in one inbox",
  description:
    "Capture, Respond, Process. One inbox for WhatsApp and email, AI answers on price, stock and dues, quotes and orders you approve, and Zoho sync.",
  path: "/how-it-works",
});

const PILLARS: Pillar[] = ["capture", "respond", "process"];

export default function ProductPage() {
  return (
    <>
      <Header current="/how-it-works" />
      <main id="main">
        <PageHero
          eyebrow="Product"
          title="One platform. Three jobs."
          lede="Capture orders and enquiries, respond to customers, and process the work, from one inbox."
          ledeAs="h2"
        />

        <LoopDiagram />

        {PILLARS.map((p) => (
          <section
            key={p}
            id={p}
            className={`${s.section} ${p === "respond" ? s.paper : ""}`}
            data-yk-section={`pillar-${p}`}
          >
            <div className={s.inner}>
              <div className={s.pillarHead}>
                <Heading level={2} size="h2">
                  {pillarIntro[p].name}
                </Heading>
                <p className={s.lede}>{pillarIntro[p].lede}</p>
              </div>
              <div className={g.featuresInner}>
                {features
                  .filter((f) => f.pillar === p)
                  .map((feature) => (
                    <FeatureRow
                      key={feature.id}
                      {...feature}
                      mock={
                        featureMocks[feature.id as keyof typeof featureMocks]
                      }
                    />
                  ))}
              </div>
            </div>
          </section>
        ))}

        <section id="headed" className={`${s.section} ${s.paper}`}>
          <div className={s.inner}>
            <Heading level={2} size="h2">
              {headed.title}
            </Heading>
            <p className={s.lede}>{headed.lede}</p>
            <ul className={s.headedList}>
              {headed.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta source="product-closing" />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Product", path: "/how-it-works" },
        ])}
      />
    </>
  );
}
