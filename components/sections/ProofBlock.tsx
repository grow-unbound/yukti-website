import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { CountUp } from "@/components/ui/CountUp";
import {
  proofFootnote,
  proofHeader,
  proofIntro,
  proofStats,
} from "@/content/proof";
import s from "./PilotProof.module.css";

/**
 * Live results from the first customer, anonymised (brief §7). Claim rules
 * and definitions live in content/proof.ts and docs/PROOF-SOURCES.md.
 * Reuses the proof card styling of the earlier pilot block.
 */
export function ProofBlock() {
  return (
    <section id="proof" className={s.section} data-yk-section="proof">
      <div className={s.inner}>
        <p className={s.eyebrow}>Impact metrics</p>
        <Heading level={2} size="h2">
          {proofHeader}
        </Heading>
        <p className={s.intro}>{proofIntro}</p>

        <ul className={s.grid}>
          {proofStats.map((stat) => (
            <li
              key={stat.value + stat.label}
              className={`${s.card} ${"featured" in stat && stat.featured ? s.featured : ""}`}
            >
              <p className={s.value}>
                <CountUp value={stat.value} />
              </p>
              <p className={s.label}>{stat.label}</p>
              <p className={s.note}>{stat.note}</p>
            </li>
          ))}
        </ul>

        <p className={s.footnote}>{proofFootnote}</p>
        <p className={s.footnote}>
          <Link href="/case-study">Read the case study&nbsp;→</Link>
        </p>
      </div>
    </section>
  );
}
