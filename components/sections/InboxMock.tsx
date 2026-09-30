import type { CSSProperties } from "react";
import { MockButton, MockFigure, Pill, StatusChip } from "@/components/mock/primitives";
import s from "./InboxMock.module.css";

/**
 * The inbox, drawn from the product's Today view: a queue of what needs
 * attention on the left, and the selected item with buyer and stock context
 * on the right.
 *
 * Names and figures are deliberately generic and currency-free. This is one
 * global site, so the drawing must not read as belonging to one country.
 */

const QUEUE = [
  { group: "Today" },
  { name: "Riverside Wholesale", meta: "Overdue invoice · 16 days · 22,000", count: 3 },
  { name: "MobileMart", meta: "New order · 42 minutes · 58,000", selected: true },
  { name: "Northside Supply", meta: "New business account · 3 hours" },
  { group: "Yesterday" },
  { name: "Harbor Traders", meta: "Open enquiry · 2 days · 34,200", count: 2 },
  { group: "This week" },
  { name: "Summit Electrical", meta: "Invoice due in 4 days · 18,400" },
] as const;

export function InboxMock({ className }: { className?: string }) {
  return (
    <MockFigure
      description="The Yukti inbox. A queue shows 11 items needing attention. The selected item is a 58,000 order from MobileMart received by email 42 minutes ago, with its price list and credit headroom beside it, an alert that one product is short by 2 units with 40 available at another warehouse, and buttons to substitute, partially accept, move stock or accept the order."
      className={className}
    >
      <div className={s.window}>
        <div className={s.queue}>
          <div className={s.queueHead}>
            <span className={s.label}>Today</span>
            <span className={s.queueTitle}>11 need your attention</span>
          </div>
          <div className={s.filters}>
            <Pill active>Enquiries 3</Pill>
            <Pill>Orders 2</Pill>
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
                    <span className={s.itemMeta}>{q.meta}</span>
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
            <StatusChip glyph="✉" tone="info">
              Email
            </StatusChip>
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

          <div className={s.alert}>
            <strong>CAT6 cable short by 2</strong>
            <span>
              40 units available at Warehouse B. Everything else on this order
              is in stock at the buyer&apos;s nearest location.
            </span>
            <span className={s.alertActions}>
              <MockButton tone="ghost">Substitute</MockButton>
              <MockButton tone="ghost">Partial accept</MockButton>
              <MockButton tone="ghost">Move stock</MockButton>
            </span>
          </div>

          <div className={s.actions}>
            <MockButton>Accept order</MockButton>
            <MockButton tone="ghost">Contact buyer</MockButton>
          </div>
        </div>
      </div>
    </MockFigure>
  );
}
