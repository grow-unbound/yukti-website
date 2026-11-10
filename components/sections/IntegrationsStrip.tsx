import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { integrationsCopy } from "@/content/home";
import s from "./HomeSections.module.css";

/**
 * Zoho live; QuickBooks and Tally coming soon; nothing else named. Logos are
 * the vendors' own marks, self-hosted from /public/logos (no third-party
 * request), shown only to say which systems Yukti works with or will. Each
 * tile links to the integrations page.
 */
const LOGOS = [
  { name: "Zoho", src: "/logos/zoho.svg", w: 110, h: 38, live: true },
  { name: "QuickBooks", src: "/logos/quickbooks.svg", w: 130, h: 33, live: false },
  { name: "Tally", src: "/logos/tally.svg", w: 90, h: 36, live: false },
];

export function IntegrationsStrip() {
  return (
    <section className={`${s.section} ${s.paper}`} data-yk-section="integrations">
      <div className={`${s.inner} ${s.center}`}>
        <Heading level={2} size="h2sm">
          {integrationsCopy.line}
        </Heading>
        <p className={s.lede}>{integrationsCopy.soon}</p>
        <ul className={s.logoRow}>
          {LOGOS.map((l) => (
            <li key={l.name}>
              <Link
                href="/integrations"
                className={s.logoTile}
                aria-label={`${l.name}: ${l.live ? "live" : "coming soon"}. See integrations`}
              >
                <Image
                  src={l.src}
                  alt={l.name}
                  width={l.w}
                  height={l.h}
                  className={s.logoImg}
                  unoptimized
                />
                <span className={`${s.logoState} ${l.live ? s.logoLive : ""}`}>
                  {l.live ? "✓ Live" : "Coming soon"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
