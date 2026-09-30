import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Pill } from "@/components/mock/primitives";
import { InboxMock } from "@/components/sections/InboxMock";
import { SIGNUP_URL } from "@/lib/site";
import { DEMO_URL } from "@/lib/whatsapp";
import { heroCopy } from "@/content/home";
import s from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={s.hero} data-yk-section="hero">
      <div className={s.inner}>
        <Eyebrow>{heroCopy.eyebrow}</Eyebrow>

        {/* Exactly one h1. The export carried a second headline as an A/B
            variant span inside the same element; the brief defers that test
            until traffic allows, so the alternate line lives in content/home.ts
            rather than in the markup. */}
        <Heading level={1} size="h1" className={s.h1}>
          {heroCopy.h1}
        </Heading>

        <Heading level={2} size="lead" className={s.sub}>
          {heroCopy.sub}
        </Heading>

        <div className={s.ctas}>
          <Button
            href={SIGNUP_URL}
            variant="accent"
            size="lg"
            event="site_signup_click"
          >
            Use Yukti now
          </Button>
          <Button
            href={DEMO_URL}
            variant="primary"
            size="lg"
            event="site_demo_click"
          >
            Book a demo
          </Button>
        </div>

        <p className={s.micro}>{heroCopy.micro}</p>

        <div className={s.visual}>
          <InboxMock />

          <div className={s.trust}>
            <p className={s.trustLabel}>Works with the tools you already use</p>
            <div className={s.trustPills}>
              {["Zoho", "Tally", "Busy", "QuickBooks"].map((t) => (
                <Pill key={t} trust>
                  {t}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Watched by the sticky mobile CTA bar. Zero height, no layout effect. */}
      <div id="hero-sentinel" aria-hidden="true" className={s.sentinel} />
    </section>
  );
}
