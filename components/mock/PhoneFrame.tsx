import type { ReactNode } from "react";
import s from "./Mock.module.css";

/**
 * The customer ordering app, in a phone shell. Per the brief this is the
 * primary hero visual — phone frame first, seller cockpit second — because
 * the customer-side experience is what the pitch turns on.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={s.phone}>
      <div className={s.phoneScreen}>{children}</div>
    </div>
  );
}

const TABS = ["Home", "Catalog", "Orders", "Profile"] as const;

export function PhoneTabs({ active = "Catalog" }: { active?: string }) {
  return (
    <div className={s.phoneTabs}>
      {TABS.map((t) => (
        <div
          key={t}
          className={`${s.phoneTab} ${t === active ? s.phoneTabActive : ""}`}
        >
          {t}
        </div>
      ))}
    </div>
  );
}
