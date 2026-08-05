import type { ReactNode } from "react";
import { Eyebrow, Heading } from "./Heading";
import s from "./Prose.module.css";

export function PageHero({
  eyebrow,
  title,
  lede,
  titleSize = "h1sm",
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** "h1fit" keeps a short title on one line in the prose column. */
  titleSize?: "h1sm" | "h1fit";
  children?: ReactNode;
}) {
  return (
    <section className={s.pageHero}>
      <div className={s.pageHeroInner}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading level={1} size={titleSize}>
          {title}
        </Heading>
        {lede ? <p className={s.lede}>{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}

export { s as proseStyles };
