import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { HeroFlow } from "@/components/sections/HeroFlow";
import { TALK_EVENT, talkUrl } from "@/lib/site";
import { heroCopy } from "@/content/home";
import s from "./Hero.module.css";

/**
 * Headline and subline are fixed copy from the GTM docket (6 Nov). One CTA
 * only: Talk to us. No eyebrow, no micro line, no integration pills: the hero
 * claims nothing that has to be defended beyond the two lines.
 */
export function Hero() {
  return (
    <section id="top" className={s.hero} data-yk-section="hero">
      <div className={s.inner}>
        <Heading level={1} size="h1" className={s.h1}>
          {heroCopy.h1}
        </Heading>

        <Heading level={2} size="lead" className={s.sub}>
          {heroCopy.sub}
        </Heading>

        <div className={s.ctas}>
          <Button
            href={talkUrl("home-hero")}
            variant="accent"
            size="lg"
            event={TALK_EVENT}
          >
            Talk to us
          </Button>
        </div>

        <div className={s.visual}>
          <HeroFlow />
        </div>
      </div>

      {/* Watched by the sticky mobile CTA bar. Zero height, no layout effect. */}
      <div id="hero-sentinel" aria-hidden="true" className={s.sentinel} />
    </section>
  );
}
