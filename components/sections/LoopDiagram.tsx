import { Heading } from "@/components/ui/Heading";
import { loopCopy } from "@/content/home";
import s from "./Timeline.module.css";

/**
 * The seven steps as a timeline in three phases that match the three jobs
 * (Capture, Process, Respond), so the loop reads as the detail of the pillars
 * above it rather than a second, unrelated list. Horizontal on wide screens,
 * vertical on phones. A return line closes the loop back to the next
 * enquiry. Steps differ by number and label, never colour alone.
 */
export function LoopDiagram({ id = "how" }: { id?: string }) {
  // Running step number across phases, computed up front.
  const starts = loopCopy.phases.map((_, i) =>
    loopCopy.phases.slice(0, i).reduce((sum, ph) => sum + ph.steps.length, 0)
  );
  return (
    <section id={id} className={s.section} data-yk-section="loop">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          {loopCopy.title}
        </Heading>
        <p className={s.lede}>{loopCopy.lede}</p>

        <div className={s.timeline}>
          {loopCopy.phases.map((phase, pi) => (
            <div
              key={phase.id}
              className={s.phase}
              style={{ flexGrow: phase.steps.length }}
            >
              <p className={s.phaseName}>{phase.name}</p>
              <ol className={s.steps}>
                {phase.steps.map((step, si) => {
                  const n = (starts[pi] ?? 0) + si + 1;
                  return (
                    <li key={step.name} className={s.step}>
                      <span className={s.node} aria-hidden="true">
                        {n}
                      </span>
                      <h3 className={s.stepName}>{step.name}</h3>
                      <p className={s.stepBody}>{step.body}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>

        <p className={s.loopBack}>
          <span aria-hidden="true">↺</span> Then the next enquiry, with the
          customer&apos;s history already in place.
        </p>
      </div>
    </section>
  );
}
