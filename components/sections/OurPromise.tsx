import { Heading } from "@/components/ui/Heading";
import { promises } from "@/content/home";
import s from "./OurPromise.module.css";

/**
 * Commitments, not outcomes — what we will do, not what the customer will get.
 * Keep it that way: the moment a line here predicts a result it becomes a claim
 * that has to be defended.
 *
 * This section previously paired the promises with anonymised pilot figures.
 * Those are withheld until the numbers are finalised; the copy is still in
 * content/home.ts as `pilot`, along with the claim rules that govern it, so
 * restoring the two-column layout is a content change rather than a rebuild.
 */
export function OurPromise() {
  return (
    <section id="promise" className={s.section} data-yk-section="promise">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          What we promise
        </Heading>
        <p className={s.lede}>
          Four commitments we hold ourselves to, from the first call onward.
        </p>

        {/* No eyebrow on the card: it read "Our promise" directly under a
            heading saying "What we promise". It existed to label this as the
            right-hand column when the pilot figures filled the left. */}
        <div className={s.promiseCard}>
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
    </section>
  );
}
