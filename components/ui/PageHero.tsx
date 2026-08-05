import type { ReactNode } from "react";
import { Eyebrow, Heading } from "./Heading";
import s from "./Prose.module.css";

export function PageHero({
  eyebrow,
  title,
  lede,
  titleSize = "h1sm",
  width = "prose",
  spacious = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** "h1fit" keeps a short title on one line in the prose column. */
  titleSize?: "h1sm" | "h1fit";
  /**
   * "wide" matches the 1060px content column used by the sections below, so a
   * long page title uses the full measure instead of wrapping early inside the
   * narrower reading column.
   */
  width?: "prose" | "wide";
  /**
   * Adds bottom padding equal to the top padding of the section that follows,
   * so the gap above that section matches the gap below it.
   */
  spacious?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`${s.pageHero} ${spacious ? s.pageHeroSpacious : ""}`}>
      <div
        className={`${s.pageHeroInner} ${width === "wide" ? s.pageHeroWide : ""}`}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading level={1} size={titleSize}>
          {title}
        </Heading>
        {lede ? <p className={s.lede}>{lede}</p> : null}
        {children}
      </div>
      {/* Watched by the sticky mobile CTA bar. Zero height, no layout effect. */}
      <div id="hero-sentinel" aria-hidden="true" />
    </section>
  );
}

export { s as proseStyles };
