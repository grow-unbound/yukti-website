import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { industries } from "@/content/industries";
import s from "./IndustriesStrip.module.css";

/**
 * All five industries link to their own page. The cards carry no explicit
 * "see the page" affordance — they are whole-card links and the hover lift
 * already says so; a second arrow inside a clickable card is noise.
 */
export function IndustriesStrip() {
  return (
    <section className={s.section} data-yk-section="industries">
      <div className={s.inner}>
        <Heading level={2} size="h2" id="industries">
          Built for businesses that sell to businesses
        </Heading>
        <p className={s.lede}>
          Distribution and wholesale are where we started. If you sell on
          relationships, rates, and repeat orders, Yukti is built for you.
        </p>

        <ul className={s.grid}>
          {industries.map((ind) => (
            <li key={ind.slug}>
              <Link href={`/industries/${ind.slug}`} className={s.card}>
                <span className={s.icon}>
                  <IndustryIcon name={ind.icon} />
                </span>
                <span className={s.name}>{ind.name}</span>
                <span className={s.note}>{ind.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
