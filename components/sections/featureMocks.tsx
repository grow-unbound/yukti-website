import {
  MockButton,
  MockFigure,
  MockRow,
  Price,
  RateCell,
  StatusChip,
  Pill,
} from "@/components/mock/primitives";
import f from "./FeatureRow.module.css";
import s from "./featureMocks.module.css";

/**
 * The six illustrative mockups for the home feature rows.
 *
 * Every one is wrapped in MockFigure, which hides it from assistive tech and
 * supplies a one-sentence description instead. They are drawings of the
 * product, not screenshots — real captures wait until the app's density pass
 * ships, since shooting now would mean reshooting in weeks.
 */

export function CampaignsMock() {
  const rows = [
    { name: "FR Wire 1.5 sq mm", base: "1,420", rate: "1,289" },
    { name: "MCB 16 A C-curve", base: "178", rate: "164" },
    { name: "Ceiling fan 1200 mm", base: "2,150", rate: "1,940" },
  ];
  return (
    <MockFigure
      description="A campaign builder showing three products, each with its base rate struck through and a lower campaign rate, and an average discount of 9.4% before publishing."
      className={f.mockShell}
    >
      <div className={s.head}>
        <span className={s.headTitle}>New campaign</span>
        <span className={s.headMeta}>DRAFT</span>
      </div>

      <div className={s.card}>
        <MockRow label="Name" value="Monsoon Stock-Up" bordered={false} />
        <MockRow label="Customer group" value="A-class · Hyderabad (84)" bordered={false} />
        <MockRow label="Valid" value={<span className={s.tnum}>5 Jul – 12 Jul</span>} bordered={false} />
      </div>

      <div className={`${s.card} ${s.table}`}>
        <div className={s.tRow + " " + s.tHead}>
          <span>Product</span>
          <span>Base</span>
          <span>Campaign</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className={s.tRow}>
            <span className={s.tName}>{r.name}</span>
            <s className={s.tBase}>{r.base}</s>
            <RateCell>{r.rate}</RateCell>
          </div>
        ))}
      </div>

      <div className={s.foot}>
        <span className={s.footNote}>
          12 products · avg discount <span className={s.tnumInk}>9.4%</span>
        </span>
        <MockButton tone="copper">Publish campaign</MockButton>
      </div>
    </MockFigure>
  );
}

export function WhatsappMock() {
  return (
    <MockFigure
      description="A WhatsApp targeting screen: filters for customers who haven't ordered in 30 days and are in Secunderabad, matching 46 customers with 3 opted out and excluded, above a re-engagement message template."
      className={f.mockShell}
    >
      <div className={s.headTitle}>Send to</div>
      <div className={s.pillRow}>
        <Pill active>Hasn&apos;t ordered in 30 days</Pill>
        <Pill active>Area: Secunderabad</Pill>
        <Pill>Has dues</Pill>
        <Pill>Customer group</Pill>
      </div>
      <p className={s.matchLine}>
        Matches <span className={s.tnumInk}>46</span> customers ·{" "}
        <span className={s.tnumInk}>3</span> opted out, excluded
      </p>
      <div className={s.card}>
        <div className={s.cardLabel}>Template · Re-engagement</div>
        <div className={s.bubble}>
          Namaste Ramesh ji — new monsoon stock has landed at Anand Agencies.
          Your rates are ready in your catalog. Tap to see what&apos;s new.
        </div>
      </div>
      <div className={s.funnelRow}>
        <span>84 sent</span>
        <span>81 delivered</span>
        <span>52 opened</span>
        <span>19 ordered</span>
      </div>
    </MockFigure>
  );
}

export function OrderingAppMock() {
  return (
    <MockFigure
      description="A customer's own rate list on their phone, with a repeat-last-order button and access to order history."
      className={f.mockShell}
    >
      <div className={s.head}>
        <span className={s.headTitle}>Sri Balaji Electricals</span>
        <StatusChip glyph="✓" tone="success">
          Verified
        </StatusChip>
      </div>
      <div className={s.card}>
        <MockRow
          label="FR Wire 1.5 sq mm"
          value={<Price value="1,289" unit="/ coil" />}
        />
        <MockRow label="MCB 16 A C-curve" value={<Price value="164" unit="/ pc" />} />
        <MockRow
          label="Ceiling fan 1200 mm"
          value={<Price value="1,940" unit="/ pc" />}
          bordered={false}
        />
      </div>
      <div className={s.foot}>
        <MockButton>Repeat last order</MockButton>
        <MockButton tone="ghost">Order history</MockButton>
      </div>
    </MockFigure>
  );
}

export function OrdersMock() {
  const orders = [
    { id: "YK-2026-00214", name: "Sri Balaji Electricals", amt: "18,640", glyph: "○", tone: "info" as const, status: "Received" },
    { id: "YK-2026-00213", name: "Kumar Traders", amt: "7,120", glyph: "✓", tone: "copper" as const, status: "Confirmed" },
    { id: "YK-2026-00211", name: "Deccan Hardware", amt: "42,300", glyph: "→", tone: "info" as const, status: "Dispatched" },
    { id: "YK-2026-00208", name: "Ramesh Agencies", amt: "9,450", glyph: "✓", tone: "success" as const, status: "Delivered" },
  ];
  return (
    <MockFigure
      description="An order queue with four orders moving through received, confirmed, dispatched and delivered statuses, each marked with both a shape and a label."
      className={f.mockShell}
    >
      <div className={s.headTitle}>Orders today</div>
      <div className={`${s.card} ${s.orderList}`}>
        {orders.map((o) => (
          <div key={o.id} className={s.orderRow}>
            <span className={s.orderCol}>
              <span className={s.orderId}>{o.id}</span>
              <span className={s.orderName}>
                {o.name} · <Price value={o.amt} />
              </span>
            </span>
            <StatusChip glyph={o.glyph} tone={o.tone}>
              {o.status}
            </StatusChip>
          </div>
        ))}
      </div>
    </MockFigure>
  );
}

export function RatesMock() {
  return (
    <MockFigure
      description="Customer groups with their own pricelists: A-class Hyderabad, B-class Secunderabad, and a project-rates group, each showing how many customers it covers."
      className={f.mockShell}
    >
      <div className={s.headTitle}>Customer groups</div>
      <div className={s.card}>
        <MockRow label="A-class · Hyderabad" value={<span className={s.tnum}>84 customers</span>} />
        <MockRow label="B-class · Secunderabad" value={<span className={s.tnum}>46 customers</span>} />
        <MockRow label="Project rates" value={<span className={s.tnum}>12 customers</span>} bordered={false} />
      </div>
      <div className={s.card}>
        <div className={s.cardLabel}>Pricelist · A-class</div>
        <MockRow label="FR Wire 1.5 sq mm" value={<Price value="1,289" />} bordered={false} />
        <MockRow label="Valid until" value={<span className={s.tnum}>31 Mar 2027</span>} bordered={false} />
      </div>
    </MockFigure>
  );
}

export function IntegrationsMock() {
  return (
    <MockFigure
      description="Integration status: Zoho Books and Zoho Inventory connected with two-way sync, Tally exporting clean CSV, and Busy marked coming soon."
      className={f.mockShell}
    >
      <div className={s.headTitle}>Connected</div>
      <div className={s.card}>
        <MockRow
          label="Zoho Books"
          value={<StatusChip glyph="✓" tone="success">Two-way</StatusChip>}
        />
        <MockRow
          label="Zoho Inventory"
          value={<StatusChip glyph="✓" tone="success">Two-way</StatusChip>}
        />
        <MockRow label="Tally Prime" value={<MockButton tone="ghost">Download CSV</MockButton>} />
        <MockRow
          label="Busy"
          value={<StatusChip glyph="◷" tone="info">Coming soon</StatusChip>}
          bordered={false}
        />
      </div>
      <p className={s.footNote}>
        Items, parties, orders, invoices and estimates. Included in every plan.
      </p>
    </MockFigure>
  );
}

export const featureMocks = {
  "feature-campaigns": <CampaignsMock />,
  "feature-whatsapp": <WhatsappMock />,
  "feature-app": <OrderingAppMock />,
  "feature-orders": <OrdersMock />,
  "feature-rates": <RatesMock />,
  "feature-integrations": <IntegrationsMock />,
} as const;
