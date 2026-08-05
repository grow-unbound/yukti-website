import Link from "next/link";
import type { ReactNode } from "react";
import { CheckList } from "@/components/mock/primitives";
import s from "./FeatureRow.module.css";

type Props = {
  id: string;
  eyebrow: string;
  h3: string;
  body: string;
  bullets: string[];
  linkLabel: string;
  href: string;
  reverse?: boolean;
  mock: ReactNode;
};

/**
 * One alternating image-and-text feature row, used six times on the home page.
 *
 * The reversal uses direction:rtl on the grid with direction:ltr restored on
 * the children. That is not a quirk to clean up — it is what lets the row
 * respond with no media query: when auto-fit collapses the grid to a single
 * column, the text still ends up below the image rather than above it.
 */
export function FeatureRow({
  id,
  eyebrow,
  h3,
  body,
  bullets,
  linkLabel,
  href,
  reverse = false,
  mock,
}: Props) {
  return (
    <div id={id} className={`${s.row} ${reverse ? s.reverse : ""}`}>
      <div className={s.child}>{mock}</div>
      <div className={s.child}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h3 className={s.h3}>{h3}</h3>
        <p className={s.body}>{body}</p>
        <CheckList items={bullets} />
        <Link href={href} className={s.link}>
          {linkLabel}&nbsp;→
        </Link>
      </div>
    </div>
  );
}
