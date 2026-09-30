import { notFound } from "next/navigation";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FinalCta } from "@/components/sections/FinalCta";
import { competitorBySlug, competitors } from "@/content/compare";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./page.module.css";

/**
 * One template, seven instances, built like the industry pages: static, one
 * per slug, unknown slugs 404. Every page follows the same order on purpose:
 * the problem their approach leaves unsolved, who each is right for, the
 * table, then questions. Never a feature checklist first.
 */

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = competitorBySlug(slug);
  if (!c) return {};
  return pageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/compare/${c.slug}`,
    ogTitle: c.h1,
    ogDescription: c.metaDescription,
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = competitorBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow={`Yukti vs ${c.name}`}
          title={c.h1}
          lede={c.lede}
          width="wide"
          spacious
        />

        <section className={s.problems} data-yk-section="compare-problems">
          <div className={s.grid}>
            {c.problems.map((p) => (
              <div key={p.h} className={s.item}>
                <h2 className={s.h}>{p.h}</h2>
                <p className={s.p}>{p.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionInner}>
            <div className={s.split}>
              <div>
                <h2 className={s.listH}>Where {c.name} is the better choice</h2>
                <ul className={s.list}>
                  {c.wins.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={s.listH}>Where Yukti is the better choice</h2>
                <ul className={s.list}>
                  {c.yuktiWins.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={s.section} data-yk-section="compare-table">
          <div className={s.sectionInner}>
            <h2 className={s.sectionH}>Side by side</h2>
            <ComparisonTable
              rows={c.rows}
              themName={c.name}
              caption={`Yukti compared with ${c.name}`}
            />
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionInner}>
            <h2 className={s.sectionH}>Questions</h2>
            <div className={s.faq}>
              {c.faq.map((f) => (
                <div key={f.q}>
                  <h3 className={s.q}>{f.q}</h3>
                  <p className={s.a}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionInner}>
            <p className={s.sources}>
              Facts about {c.name} were checked against their public pages in
              September 2026 and can change:
            </p>
            <ul className={s.sources}>
              {c.sources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} rel="noopener noreferrer" target="_blank">
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={s.cta}>
          <FinalCta heading={c.ctaHeading} body={c.ctaBody} />
        </div>
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: `Yukti vs ${c.name}`, path: `/compare/${c.slug}` },
        ])}
      />
      <JsonLd data={faqLd(c.faq)} />
    </>
  );
}
