import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { integrationsCopy } from "@/content/home";
import s from "./HomeSections.module.css";

/** Zoho live; QuickBooks and Tally coming soon; nothing else named. */
export function IntegrationsStrip() {
  return (
    <section className={`${s.section} ${s.paper}`} data-yk-section="integrations">
      <div className={`${s.inner} ${s.center}`}>
        <Heading level={2} size="h2sm">
          {integrationsCopy.line}
        </Heading>
        <p className={s.lede}>{integrationsCopy.soon}</p>
        <p className={s.more}>
          <Link href="/integrations">See integrations&nbsp;→</Link>
        </p>
      </div>
    </section>
  );
}
