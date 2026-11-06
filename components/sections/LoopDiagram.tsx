import { Heading } from "@/components/ui/Heading";
import { loopCopy } from "@/content/home";
import s from "./HomeSections.module.css";

/**
 * The loop, drawn as seven numbered steps. No status chips. Steps differ by
 * number and label, never colour alone.
 */
export function LoopDiagram({ id = "how" }: { id?: string }) {
  return (
    <section id={id} className={s.section} data-yk-section="loop">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          {loopCopy.title}
        </Heading>
        <p className={s.lede}>{loopCopy.lede}</p>
        <ol className={s.loop}>
          {loopCopy.steps.map((step, i) => (
            <li key={step.name} className={s.loopStep}>
              <span className={s.loopNum} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={s.loopName}>{step.name}</h3>
              <p className={s.loopBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
