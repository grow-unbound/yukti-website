import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { alsoConsidered, competitors } from "@/content/compare";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "./[slug]/page.module.css";

export const metadata = pageMetadata({
  title: "Compare Yukti with the tools you are weighing",
  description:
    "Honest comparisons of Yukti with WhatsApp Business Catalog, WizCommerce, IndiaMART, Turis, B2B Wave, Shopify B2B and Wati: who each is right for, and where each falls short.",
  path: "/compare",
});

export default function CompareHubPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Compare"
          title="Which tool fits how you actually sell?"
          lede="Every option here is good at something. Each page starts with the problem that tool leaves unsolved, says plainly where it is the better choice, and shows the two side by side."
          width="wide"
        />

        <div className={s.hubGrid}>
          {competitors.map((c) => (
            <Link key={c.slug} href={`/compare/${c.slug}`} className={s.card}>
              <span className={s.p}>{c.category}</span>
              <h2 className={s.h}>Yukti vs {c.name}</h2>
              <p className={s.p}>{c.what}</p>
            </Link>
          ))}
        </div>

        <section className={s.section}>
          <div className={s.sectionInner}>
            <h2 className={s.sectionH}>Also worth knowing</h2>
            <ul className={s.list}>
              {alsoConsidered.map((o) => (
                <li key={o.name}>
                  <strong>{o.name}</strong>: {o.what}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={s.cta}>
          <FinalCta />
        </div>
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ])}
      />
    </>
  );
}
