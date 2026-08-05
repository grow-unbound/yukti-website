import type { ElementType, ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  children: ReactNode;
  id?: string;
  /** paper adds the recessed band treatment with hairlines top and bottom. */
  tone?: "canvas" | "paper";
  /** prose caps the inner column at 760px, the export's editorial measure. */
  width?: "wide" | "prose";
  pad?: "normal" | "tight";
  as?: ElementType;
  className?: string;
};

export function Section({
  children,
  id,
  tone = "canvas",
  width = "wide",
  pad = "normal",
  as: Tag = "section",
  className,
}: Props) {
  return (
    <Tag
      id={id}
      className={[
        styles.section,
        tone === "paper" ? styles.paper : "",
        pad === "tight" ? styles.tight : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={width === "prose" ? styles.prose : styles.inner}>
        {children}
      </div>
    </Tag>
  );
}
