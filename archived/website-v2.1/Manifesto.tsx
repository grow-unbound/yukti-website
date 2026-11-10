import { Heading } from "@/components/ui/Heading";
import { manifesto } from "@/content/home";
import s from "./Manifesto.module.css";

export function Manifesto() {
  return (
    <section className={s.section} data-yk-section="manifesto">
      <div className={s.inner}>
        {/* The export set white-space:nowrap on this heading, which overflowed
            below ~400px. clamp() plus balanced wrapping does the same job
            without clipping on the primary viewport. */}
        <Heading level={2} size="h2sm">
          {manifesto.h2}
        </Heading>
        <div className={s.body}>
          {manifesto.lines.map((line, i) => (
            <p
              key={line}
              className={i === manifesto.emphasisIndex ? s.pull : undefined}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
