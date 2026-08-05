import type { ReactNode } from "react";
import { Eyebrow, Heading } from "./Heading";
import s from "./Prose.module.css";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className={s.pageHero}>
      <div className={s.pageHeroInner}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading level={1} size="h1sm">
          {title}
        </Heading>
        {lede ? <p className={s.lede}>{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}

export { s as proseStyles };
