"use client";

import { useState, type CSSProperties } from "react";
import { MockButton, Pill, StatusChip } from "@/components/mock/primitives";
import s from "./InboxMock.module.css";

/**
 * The inbox, drawn from the product's Today view: a queue of what needs
 * attention on the left, and the selected item with buyer and stock context
 * on the right.
 *
 * It is the one interactive mockup. One scenario, start to finish: MobileMart
 * emails an order for 500 CAT6 cable, the nearest location holds 498, and the
 * seller picks how to resolve the shortage before accepting. The WhatsApp
 * mock in featureMocks.tsx tells the same story about the same buyer.
 *
 * Names and figures are deliberately generic and currency-free. This is one
 * global site, so the drawing must not read as belonging to one country.
 */

type Fix = "substitute" | "partial" | "move";

const FIX_RESULT: Record<Fix, { title: string; body: string }> = {
  substitute: {
    title: "Substitute offered for 2 units",
    body: "MobileMart sees an equivalent CAT6 cable on the order and confirms it with one tap. The other 498 units stay as ordered.",
  },
  partial: {
    title: "Accepting 498 of 500",
    body: "The 2 missing units are back-ordered on the same order, so MobileMart sees one order with one open line.",
  },
  move: {
    title: "2 units moved from Warehouse B",
    body: "The full 500 is now in stock at the buyer's nearest location. 38 units remain at Warehouse B.",
  },
};

const QUEUE = [
  { group: "Today" },
  { name: "Riverside Wholesale", meta: "Overdue invoice · 16 days · 22,000", count: 3 },
  { name: "MobileMart", selected: true },
  { name: "Northside Supply", meta: "New business account · 3 hours" },
  { group: "Yesterday" },
  { name: "Harbor Traders", meta: "Open enquiry · 2 days · 34,200", count: 2 },
  { group: "This week" },
  { name: "Summit Electrical", meta: "Invoice due in 4 days · 18,400" },
] as const;

export function InboxMock({ className }: { className?: string }) {
  const [fix, setFix] = useState<Fix | null>(null);
  const [accepted, setAccepted] = useState(false);

  const reset = () => {
    setFix(null);
    setAccepted(false);
  };

  const result = fix ? FIX_RESULT[fix] : null;
  const pending = accepted ? 10 : 11;

  return (
    <div
      className={className}
      role="group"
      aria-label="Interactive demo of the Yukti inbox: an emailed order from MobileMart for 500 CAT6 cable, 2 units short at the nearest location. Choose how to resolve the shortage, then accept the order."
    >
      <div className={s.window}>
        <div className={s.queue} aria-hidden="true">
          <div className={s.queueHead}>
            <span className={s.label}>Today</span>
            <span className={s.queueTitle}>{pending} need your attention</span>
          </div>
          <div className={s.filters}>
            <Pill active>Enquiries 3</Pill>
            <Pill>Orders {accepted ? 1 : 2}</Pill>
            <Pill>Approvals 2</Pill>
            <Pill>Collections 4</Pill>
          </div>
          <ul className={s.list}>
            {QUEUE.map((q, i) =>
              "group" in q ? (
                <li key={i} className={s.group} style={{ "--n": i } as CSSProperties}>
                  {q.group}
                </li>
              ) : (
                <li
                  key={q.name}
                  className={`${s.item} ${"selected" in q ? s.itemSelected : ""}`}
                  style={{ "--n": i } as CSSProperties}
                >
                  <span>
                    <span className={s.itemName}>{q.name}</span>
                    <span className={s.itemMeta}>
                      {"selected" in q
                        ? accepted
                          ? "Order accepted · invoice drafted"
                          : "New order · 42 minutes · 58,000"
                        : q.meta}
                    </span>
                  </span>
                  {"count" in q ? <span className={s.count}>{q.count}</span> : null}
                </li>
              )
            )}
          </ul>
        </div>

        <div className={s.detail}>
          <div className={s.detailHead}>
            <span className={s.detailName}>MobileMart</span>
            {accepted ? (
              <StatusChip glyph="✓" tone="success">
                Accepted
              </StatusChip>
            ) : (
              <StatusChip glyph="✉" tone="info">
                Email
              </StatusChip>
            )}
          </div>

          <div className={s.orderLine}>
            <span className={s.label}>New order · 42m</span>
            <span className={s.orderValue}>58,000 · 14 items</span>
            <span className={s.orderMeta}>Received by email 42 minutes ago</span>
          </div>

          <dl className={s.context}>
            <div>
              <dt>Usually orders</dt>
              <dd>Cables, adapters</dd>
            </div>
            <div>
              <dt>Price list</dt>
              <dd>Wholesale A</dd>
            </div>
            <div>
              <dt>Credit headroom</dt>
              <dd className={s.mono}>120,000</dd>
            </div>
          </dl>

          <div className={`${s.alert} ${result ? s.alertDone : ""}`} aria-live="polite">
            {result ? (
              <>
                <strong>{result.title}</strong>
                <span>{result.body}</span>
              </>
            ) : (
              <>
                <strong>CAT6 cable short by 2</strong>
                <span>
                  The order is for 500 and the buyer&apos;s nearest location holds
                  498. 40 units are available at Warehouse B. Everything else
                  on this order is in stock.
                </span>
                <span className={s.alertActions}>
                  <MockButton tone="ghost" onClick={() => setFix("substitute")}>
                    Substitute
                  </MockButton>
                  <MockButton tone="ghost" onClick={() => setFix("partial")}>
                    Partial accept
                  </MockButton>
                  <MockButton tone="ghost" onClick={() => setFix("move")}>
                    Move stock
                  </MockButton>
                </span>
              </>
            )}
          </div>

          <div className={s.actions}>
            <MockButton
              onClick={() => setAccepted(true)}
              disabled={fix === null || accepted}
            >
              {accepted ? "Order accepted" : "Accept order"}
            </MockButton>
            {fix || accepted ? (
              <button type="button" className={s.reset} onClick={reset}>
                Reset demo
              </button>
            ) : (
              <span className={s.hint}>Resolve the shortage to accept.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
