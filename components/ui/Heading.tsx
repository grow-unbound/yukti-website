import type { ReactNode } from "react";
import styles from "./Heading.module.css";

/**
 * Heading level and visual size are separate on purpose. Document outline is
 * an accessibility and SEO concern; type size is a design one. The export
 * conflated them in two places — a pricing "card title" that was really an h2,
 * and an h2 rendered two steps down in size — and this keeps both honest.
 */
type Props = {
  children: ReactNode;
  level: 1 | 2 | 3;
  /**
   * "lead" is a real heading element styled as supporting copy — used for the
   * hero subheads, which belong in the document outline but must not look like
   * section headings.
   */
  size?: "h1" | "h1sm" | "h2" | "h2sm" | "h3" | "cardTitle" | "lead";
  id?: string;
  className?: string;
};

export function Heading({ children, level, size, id, className }: Props) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const visual = size ?? (`h${level}` as "h1" | "h2" | "h3");
  return (
    <Tag
      id={id}
      className={[styles.h, styles[visual], className ?? ""]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({
  children,
  tone = "copper",
}: {
  children: ReactNode;
  tone?: "copper" | "muted" | "onDark";
}) {
  return <p className={`${styles.eyebrow} ${styles[tone]}`}>{children}</p>;
}
