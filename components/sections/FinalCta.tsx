import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { TALK_EVENT, talkUrl } from "@/lib/site";
import s from "./FinalCta.module.css";

type Props = {
  heading?: string;
  body?: string;
  /** UTM campaign for this placement, so bookings attribute to a page. */
  source?: string;
  /**
   * Set to "primary" where the page has already spent its one copper CTA
   * elsewhere in the same viewport.
   */
  signupVariant?: "accent" | "primary";
};

/**
 * The closing conversion block, reused on every page. One action: Talk to us,
 * which opens the Calendly page in a new tab. The WhatsApp number and the
 * email fallback live in the footer.
 */
export function FinalCta({
  heading = "See it on your own enquiries.",
  body = "Bring a few real WhatsApp or email enquiries. We will walk through how Yukti handles them.",
  source = "final-cta",
  signupVariant = "accent",
}: Props) {
  return (
    <section id="cta" className={s.section} data-yk-section="final-cta">
      <div className={s.card}>
        <Heading level={2} size="h2sm">
          {heading}
        </Heading>
        <p className={s.body}>{body}</p>
        <div className={s.ctas}>
          <Button
            href={talkUrl(source)}
            variant={signupVariant}
            size="lg"
            event={TALK_EVENT}
          >
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}
