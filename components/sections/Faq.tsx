import { Heading } from "@/components/ui/Heading";
import { faqFor } from "@/content/faq";
import type { Region } from "@/lib/region";
import s from "./Faq.module.css";

/**
 * Built on <details>/<summary>.
 *
 * The export hand-rolled this as a div with role="button", tabIndex and its
 * own Enter/Space handler, and unmounted the panel when closed. Native
 * disclosure gets keyboard operation, the expanded state and the
 * open/closed semantics right for free, works with JS disabled, and removes a
 * client component. The +/− marker is a CSS pseudo-element.
 */
export function Faq({ region }: { region: Region }) {
  const faq = faqFor(region);
  return (
    <section id="faq" className={s.section} data-yk-section="faq">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          Frequently asked questions
        </Heading>
        <div className={s.list}>
          {faq.map((item) => (
            <details key={item.q} className={s.item}>
              <summary className={s.summary}>{item.q}</summary>
              <div className={s.answer}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
