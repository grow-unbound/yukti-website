import { Heading } from "@/components/ui/Heading";
import { pilot, promises } from "@/content/home";
import s from "./ProofPromise.module.css";

/**
 * Pilot results on the left, commitments on the right.
 *
 * The pilot figures are real and anonymised, and must stay that way — see the
 * claim rules on `pilot` in content/home.ts. The right-hand column is
 * deliberately commitments rather than outcomes: what we will do, not what the
 * customer will get.
 */
export function ProofPromise() {
  return (
    <section id="proof" className={s.section} data-yk-section="proof">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          What a pilot showed. What we promise.
        </Heading>

        <div className={s.grid}>
          <div>
            <p className={s.intro}>{pilot.intro}</p>
            <div className={s.stats}>
              {pilot.stats.map((stat) => (
                <div key={stat.label} className={s.stat}>
                  <p className={s.statValue}>{stat.value}</p>
                  <p className={s.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
            <p className={s.closer}>{pilot.closer}</p>
          </div>

          <div className={s.promiseCard}>
            <p className={s.promiseEyebrow}>Our promise</p>
            <ol className={s.promiseList}>
              {promises.map((p, i) => (
                <li key={p} className={s.promiseItem}>
                  <span className={s.promiseNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
