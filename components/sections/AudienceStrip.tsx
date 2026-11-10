import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { audienceCopy } from "@/content/home";
import { SellerIcon } from "@/components/sections/SellerIcon";
import s from "./HomeSections.module.css";

/** Three seller types, one line each. No price or vertical-specific claims. */
export function AudienceStrip() {
  return (
    <section className={`${s.section} ${s.paper}`} data-yk-section="audience">
      <div className={s.inner}>
        <Heading level={2} size="h2">
          {audienceCopy.title}
        </Heading>
        <ul className={s.audienceGrid}>
          {audienceCopy.cards.map((c) => (
            <li key={c.id}>
              <Link href={`/sellers#${c.id}`} className={s.audienceCard}>
                <span className={s.audienceIcon}>
                  <SellerIcon name={c.id as "manufacturers" | "wholesalers" | "distributors"} />
                </span>
                <span className={s.audienceName}>{c.name}</span>
                <span className={s.audienceBody}>{c.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
