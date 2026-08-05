import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { industries } from "@/content/home";
import s from "./IndustriesStrip.module.css";

/**
 * Only Cosmetics links anywhere. The brief gates industry pages on validation
 * against real customer conversations, and Cosmetics is the only one that has
 * cleared it — a thin page written in a trade's own language, with the wrong
 * pains in it, does more damage than no page at all.
 *
 * The other four render as plain cards, not links. The export styled all five
 * as non-focusable divs with cursor:pointer and no handler, which promised a
 * click that never existed.
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
          {industries.map((ind) => {
            const isLinked = ind.name === "Cosmetics & Salon Supply";
            const inner = (
              <>
                <span className={s.name}>{ind.name}</span>
                <span className={s.note}>{ind.note}</span>
                {isLinked ? <span className={s.arrow}>See the page&nbsp;→</span> : null}
              </>
            );
            return (
              <li key={ind.name}>
                {isLinked ? (
                  <Link href="/industries/cosmetics" className={`${s.card} ${s.cardLink}`}>
                    {inner}
                  </Link>
                ) : (
                  <div className={s.card}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
