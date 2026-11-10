import { MockFigure, MockRow, Price, StatusChip } from "@/components/mock/primitives";
import s from "./HeroFlow.module.css";

/**
 * The hero visual: a customer message arrives, lands in the one inbox, and
 * becomes a priced draft with rate, stock and dues beside it. Mock data, no
 * currency symbol. A short one-pass CSS animation; static under
 * prefers-reduced-motion.
 *
 * It deliberately stops at a draft the seller approves. It must not show a
 * PDF flow or an automatic-invoice flow: neither is live (brief §3).
 */
export function HeroFlow() {
  return (
    <MockFigure
      description="A customer's WhatsApp message asking for a quote on 200 metres of FR wire arrives in the inbox and becomes a draft quote with the customer's rate, live stock and dues beside it, ready for the team to approve."
      className={s.wrap}
    >
      <div className={s.grid}>
        <div className={`${s.panel} ${s.step1}`}>
          <p className={s.tag}>1 · A message arrives</p>
          <div className={s.chatHead}>
            <span className={s.who}>MobileMart</span>
            <StatusChip glyph="●" tone="success">
              WhatsApp
            </StatusChip>
          </div>
          <div className={s.bubble}>
            Need a quote for 200 m FR wire 1.5 sq mm, deliver Friday
          </div>
        </div>

        <span className={`${s.arrow} ${s.arrow1}`}>→</span>

        <div className={`${s.panel} ${s.step2}`}>
          <p className={s.tag}>2 · One inbox</p>
          <ul className={s.queue}>
            <li className={s.qSel}>
              <span>MobileMart</span>
              <span className={s.qMeta}>Quote request · now</span>
            </li>
            <li>
              <span>Northside Supply</span>
              <span className={s.qMeta}>Email order · 3 h</span>
            </li>
            <li>
              <span>Harbor Traders</span>
              <span className={s.qMeta}>Stock question · 1 d</span>
            </li>
          </ul>
        </div>

        <span className={`${s.arrow} ${s.arrow2}`}>→</span>

        <div className={`${s.panel} ${s.step3}`}>
          <p className={s.tag}>3 · A priced draft</p>
          <MockRow label="FR wire 1.5 sq mm × 200 m" value={<Price value="1,289" unit="/ coil" />} />
          <MockRow label="Their rate" value="Wholesale A" />
          <MockRow label="In stock" value={<span className={s.tnum}>412 m</span>} />
          <MockRow label="Dues" value={<span className={s.tnum}>None overdue</span>} bordered={false} />
          <p className={s.approve}>Draft · you approve before it goes out</p>
        </div>
      </div>
    </MockFigure>
  );
}
