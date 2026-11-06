import Link from "next/link";
import type { ReactNode } from "react";
import { Heading } from "@/components/ui/Heading";
import { tuesday } from "@/content/home";
import s from "./TuesdayStory.module.css";

/**
 * The four-scene "one Tuesday" narrative.
 *
 * Step badges differ by SHAPE, not colour — rounded, circle, diamond, square.
 * That is a design system rule, not decoration: roughly 8% of users cannot
 * rely on a colour difference to tell steps apart.
 */

type Props = {
  /** /how-it-works adds a fifth month-end scene and drops the closing link. */
  extraScenes?: { time: string; body: string; shape: "square" }[];
  showLink?: boolean;
  mocks?: Record<number, ReactNode>;
};

const SHAPE_CLASS = {
  rounded: "badgeRounded",
  circle: "badgeCircle",
  diamond: "badgeDiamond",
  square: "badgeSquare",
} as const;

export function TuesdayStory({
  extraScenes = [],
  showLink = true,
  mocks = {},
}: Props) {
  const scenes = [...tuesday, ...extraScenes];

  return (
    <section id="how" className={s.section} data-yk-section="how-it-works">
      <div className={s.inner}>
        <Heading level={2} size="h2" className={s.h2}>
          One Tuesday on Yukti
        </Heading>

        <ol className={s.timeline}>
          {scenes.map((scene, i) => (
            <li key={scene.time} className={s.step}>
              <div className={s.rail}>
                <span
                  className={`${s.badge} ${s[SHAPE_CLASS[scene.shape]]}`}
                  aria-hidden="true"
                >
                  <span className={s.badgeNum}>{i + 1}</span>
                </span>
                {i < scenes.length - 1 ? <span className={s.connector} /> : null}
              </div>
              <div className={s.body}>
                <p className={s.time}>{scene.time}</p>
                <p className={s.text}>{scene.body}</p>
                {mocks[i] ?? null}
              </div>
            </li>
          ))}
        </ol>

        {showLink ? (
          <p className={s.closer}>
            That&apos;s the whole loop: decide, reach, capture, know. Every day,
            in one system.
            <br />
            <Link href="/how-it-works" className={s.link}>
              See the full story&nbsp;→
            </Link>
          </p>
        ) : (
          <p className={s.closer}>
            <strong>Decide. Reach. Capture. Know. Repeat.</strong>
          </p>
        )}
      </div>
    </section>
  );
}
