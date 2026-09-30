import { Heading } from "@/components/ui/Heading";
import { CountUp } from "@/components/ui/CountUp";
import { pilot } from "@/content/home";
import s from "./PilotProof.module.css";

/**
 * Anonymised results from a 10-week pilot.
 *
 * The claim rules live with the data in content/home.ts and are not optional:
 * the customer is never named, and nothing here may be restated beyond what
 * the figures say.
 *
 * The repeat-ordering number is elevated because it is the one that means the
 * most — demand and volume say the pilot ran, but customers coming back
 * unprompted says the habit stuck. It is elevated by TREATMENT, not by
 * spanning columns: six cards divide evenly into one, two and three columns,
 * so a spanning card would orphan another one at some breakpoint.
 */
export function PilotProof() {
  return (
    <section id="proof" className={s.section} data-yk-section="pilot-proof">
      <div className={s.inner}>
        <p className={s.eyebrow}>{pilot.eyebrow}</p>
        <Heading level={2} size="h2">
          What a pilot showed
        </Heading>
        <p className={s.intro}>{pilot.intro}</p>
        <p className={s.headline}>{pilot.headline}</p>

        <ul className={s.grid}>
          {pilot.stats.map((stat) => (
            <li
              key={stat.value + stat.label}
              className={`${s.card} ${"featured" in stat && stat.featured ? s.featured : ""}`}
            >
              <p className={s.value}>
                <CountUp value={stat.value} />
              </p>
              <p className={s.label}>{stat.label}</p>
              <p className={s.note}>{stat.note}</p>
              {"derivation" in stat && stat.derivation ? (
                <p className={s.derivation}>{stat.derivation}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <p className={s.footnote}>
          Results from one 10-week pilot with a security-products distributor.
          Your own numbers will depend on your catalog, your customers, and how
          you sell today.
        </p>
      </div>
    </section>
  );
}
