import { notFound } from "next/navigation";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  CampaignsMock,
  ContextMock,
  OrderingAppMock,
  WhatsappMock,
} from "@/components/sections/featureMocks";
import { features } from "@/content/features";
import { industries, industryBySlug } from "@/content/industries";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./page.module.css";

/**
 * One template, five instances. Repetition is intentional — a visitor reads
 * exactly one of these pages, and the point is that it speaks their trade's
 * language rather than a generic one.
 *
 * There is deliberately no security/CCTV page, and there must not be one while
 * the pilot proof is anonymised: it would make that
 * distributor trivially identifiable.
 */

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    ogTitle: `Yukti for ${industry.longName}`,
    ogDescription: industry.note,
  });
}

const SHOWN = ["feature-inbox", "feature-app", "feature-campaigns"];
const MOCKS = {
  "feature-inbox": <ContextMock />,
  "feature-campaigns": <CampaignsMock />,
  "feature-whatsapp": <WhatsappMock />,
  "feature-app": <OrderingAppMock />,
} as const;

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <Header current="/industries" />
      <main id="main">
        {/* wide so the long title uses the full content measure; spacious so
            the gap down to the problems matches the gap from the problems
            down to the product sections. */}
        <PageHero
          eyebrow={industry.name}
          title={industry.title}
          lede={industry.lede}
          width="wide"
          spacious
        />

        <section className={s.pains} data-yk-section="industry-pains">
          <div className={s.painGrid}>
            {industry.pains.map((pain) => (
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

        <FinalCta heading={industry.ctaHeading} body={industry.ctaBody} />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <JsonLd data={faqLd()} />
    </>
  );
}
