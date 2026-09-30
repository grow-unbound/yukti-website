import type { CompareRow } from "@/content/compare";
import s from "./ComparisonTable.module.css";

/**
 * A plain semantic table. No filters, no sorting, no client JS: the page is
 * for reading, and adding interaction would only spend main-thread time.
 *
 * The scroll wrapper is focusable so a keyboard user can pan it on a narrow
 * screen, and has a fixed min-width table inside so nothing reflows on load.
 */
export function ComparisonTable({
  rows,
  themName,
  caption,
}: {
  rows: CompareRow[];
  themName: string;
  caption: string;
}) {
  return (
    <div className={s.scroll} tabIndex={0} role="region" aria-label={caption}>
      <table className={s.table}>
        <caption className="srOnly">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className={s.corner}>
              <span className="srOnly">Feature</span>
            </th>
            <th scope="col" className={s.yuktiHead}>
              Yukti
            </th>
            <th scope="col">{themName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className={s.rowHead}>
                {row.label}
              </th>
              <td className={s.yukti}>{row.yukti}</td>
              <td>{row.them}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
