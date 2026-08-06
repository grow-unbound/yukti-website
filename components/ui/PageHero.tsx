import type { ReactNode } from "react";
import { Eyebrow, Heading } from "./Heading";
import s from "./Prose.module.css";

export function PageHero({
  eyebrow,
  title,
  lede,
  width = "prose",
  spacious = false,
  ledeAs = "p",
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
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
  spacious?: boolean | "cta";
  /**
   * Render the lede as an <h2> where it carries real keyword-bearing copy and
   * belongs in the document outline. Styled identically either way.
   */
  ledeAs?: "p" | "h2";
  children?: ReactNode;
}) {
  return (
    <section
      className={[
        s.pageHero,
        spacious === true ? s.pageHeroSpacious : "",
        spacious === "cta" ? s.pageHeroSpaciousCta : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={`${s.pageHeroInner} ${width === "wide" ? s.pageHeroWide : ""}`}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading level={1} size="h1sm">
          {title}
        </Heading>
        {lede ? (
          ledeAs === "h2" ? (
            <Heading level={2} size="lead" className={s.lede}>
              {lede}
            </Heading>
          ) : (
            <p className={s.lede}>{lede}</p>
          )
        ) : null}
        {children}
      </div>
      {/* Watched by the sticky mobile CTA bar. Zero height, no layout effect. */}
      <div id="hero-sentinel" aria-hidden="true" />
    </section>
  );
}

export { s as proseStyles };
