import Link from "next/link";
import s from "./AccountantsBand.module.css";

/**
 * Precise register only. The accountant is a gatekeeper, not an obstacle, and
 * nothing here may read as "Yukti replaces your books". The public ceiling is
 * "your books stay clean" / "structured data flows to the tools your
 * accountant already uses".
 */
export function AccountantsBand() {
  return (
    <section id="accountants" className={s.band} data-yk-section="accountants">
      <div className={s.inner}>
        <div>
          <h2 className={s.h2}>Your CA will like this</h2>
          <p className={s.body}>
            Yukti doesn&apos;t touch your books, it feeds them. Clean items,
            clean parties, clean vouchers, synced or exported. Less data entry
            for your accountant, more time for real advice.
          </p>
        </div>
        <Link href="/accountants" className={s.link}>
          For accountants&nbsp;→
        </Link>
      </div>
    </section>
  );
}
