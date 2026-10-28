import type { CSSProperties, ReactNode } from "react";
import s from "./Mock.module.css";

/**
 * Primitives for the illustrative product UI.
 *
 * Everything here is decorative. Wrap any composed mockup in <MockFigure>,
 * which hides it from assistive technology and supplies a short text
 * description in its place.
 */

export function MockFigure({
  children,
  description,
  className,
  style,
}: {
  children: ReactNode;
  /** What a sighted user learns from the image, in one sentence. */
  description: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure className={className} style={{ margin: 0, ...style }}>
      <div aria-hidden="true">{children}</div>
      <figcaption className="srOnly">{description}</figcaption>
    </figure>
  );
}

export function MockFrame({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`${s.frame} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}

export function MockPanel({
  children,
  paper = false,
  divided = false,
  style,
}: {
  children: ReactNode;
  paper?: boolean;
  divided?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className={[s.panel, paper ? s.panelPaper : "", divided ? s.divider : ""]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

export function MockRow({
  label,
  value,
  bordered = true,
}: {
  label: ReactNode;
  value: ReactNode;
  bordered?: boolean;
}) {
  return (
    <div className={`${s.row} ${bordered ? s.rowBordered : ""}`}>
      <span className={s.rowLabel}>{label}</span>
      <span className={s.rowValue}>{value}</span>
    </div>
  );
}

export function MockTableHead({ cols }: { cols: string[] }) {
  return (
    <div className={s.tableHead}>
      {cols.map((c) => (
        <span key={c}>{c}</span>
      ))}
    </div>
  );
}

/** Money, drawn without a currency symbol: the site is global and the mocks must not belong to one country. */
export function Price({
  value,
  unit,
  className,
}: {
  value: string;
  unit?: string;
  /** Kept for call-site compatibility; no symbol is drawn. */
  small?: boolean;
  className?: string;
}) {
  return (
    <span className={`${s.price} ${className ?? ""}`}>
      {value}
      {unit ? <span className={s.priceUnit}> {unit}</span> : null}
    </span>
  );
}

export function StrikePrice({ children }: { children: ReactNode }) {
  return <span className={s.strike}>{children}</span>;
}

export function RateCell({ children }: { children: ReactNode }) {
  return <span className={s.rateCell}>{children}</span>;
}

export type ChipTone = "success" | "info" | "copper";

const CHIP_TONE: Record<ChipTone, string> = {
  success: s.chipSuccess ?? "",
  info: s.chipInfo ?? "",
  copper: s.chipCopper ?? "",
};

/** Status is shape glyph + label. Never colour alone. */
export function StatusChip({
  glyph,
  children,
  tone = "success",
}: {
  glyph: string;
  children: ReactNode;
  tone?: ChipTone;
}) {
  return (
    <span className={`${s.chip} ${CHIP_TONE[tone]}`}>
      <span>{glyph}</span>
      {children}
    </span>
  );
}

export function Pill({
  children,
  active = false,
  trust = false,
}: {
  children: ReactNode;
  active?: boolean;
  trust?: boolean;
}) {
  return (
    <span
      className={[s.pill, active ? s.pillActive : "", trust ? s.pillTrust : ""]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

/**
 * A drawn button by default (a span: decorative, aria-hidden by its figure).
 * Pass onClick and it renders a real <button>, for the one mockup that is
 * interactive.
 */
export function MockButton({
  children,
  tone = "ink",
  onClick,
  disabled,
  pressed,
}: {
  children: ReactNode;
  tone?: "ink" | "copper" | "ghost";
  onClick?: () => void;
  disabled?: boolean;
  pressed?: boolean;
}) {
  const toneClass =
    tone === "copper" ? s.mockBtnCopper : tone === "ghost" ? s.mockBtnGhost : s.mockBtnInk;
  const cls = `${s.mockBtn} ${toneClass}`;
  if (!onClick) return <span className={cls}>{children}</span>;
  return (
    <button
      type="button"
      className={`${cls} ${s.mockBtnLive}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={pressed}
    >
      {children}
    </button>
  );
}

/** Funnel bars. Ratios are flex weights, exactly as the export drew them. */
export function BarMeter({ values }: { values: number[] }) {
  const max = Math.max(...values);
  return (
    <div className={s.barTrack}>
      {values.map((v, i) => (
        <span
          key={i}
          className={s.bar}
          style={
            {
              "--bar": String(v),
              "--bar-opacity": String(0.35 + 0.65 * (v / max)),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className={s.checkList}>
      {items.map((item, i) => (
        <li key={i} className={s.checkItem}>
          <span className={s.checkGlyph} aria-hidden="true">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StatTile({
  label,
  children,
  span = false,
}: {
  label: string;
  children: ReactNode;
  span?: boolean;
}) {
  return (
    <div className={s.statTile} style={span ? { gridColumn: "1 / -1" } : undefined}>
      <div className={s.statLabel}>{label}</div>
      <div className={s.statValue}>{children}</div>
    </div>
  );
}

export { s as mockStyles };
