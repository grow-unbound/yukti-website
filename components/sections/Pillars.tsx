import { Heading } from "@/components/ui/Heading";
import { pillarsCopy } from "@/content/home";
import s from "./HomeSections.module.css";

/** "One platform. Three jobs." Copy is fixed (brief §3). */
export function Pillars() {
  return (
    <section className={s.section} data-yk-section="pillars">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          {pillarsCopy.title}
        </Heading>
        <p className={s.lede}>{pillarsCopy.lede}</p>
        <ol className={s.pillarGrid}>
          {pillarsCopy.pillars.map((p, i) => (
            <li key={p.id} className={s.pillar}>
              <span className={s.pillarNum} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={s.pillarName}>{p.name}</h3>
              <p className={s.pillarBody}>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
