import Link from "next/link";
import { YuktiMark } from "./YuktiMark";
import styles from "./Wordmark.module.css";

type Props = {
  /** Charcoal on light surfaces, paper on the charcoal footer. */
  tone?: "ink" | "onDark";
  size?: number;
  href?: string;
};

/**
 * Mark plus logotype. Baloo 2 is used here and nowhere else on the site.
 */
export function Wordmark({ tone = "ink", size = 24, href = "/" }: Props) {
  return (
    <Link
      href={href}
      className={`${styles.lockup} ${tone === "onDark" ? styles.onDark : ""}`}
    >
      <YuktiMark size={size} variant={tone === "onDark" ? "copperLt" : "copper"} />
      <span className={styles.word} style={{ fontSize: size * 0.875 }}>
        Yukti
      </span>
    </Link>
  );
}
