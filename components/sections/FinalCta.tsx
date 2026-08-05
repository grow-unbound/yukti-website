import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SIGNUP_URL, WHATSAPP_DISPLAY } from "@/lib/site";
import { DEMO_URL, WHATSAPP_URL } from "@/lib/whatsapp";
import s from "./FinalCta.module.css";

type Props = {
  heading?: string;
  body?: string;
  /**
   * Set to "primary" where the page has already spent its one copper CTA
   * elsewhere — the pricing page's elevated Growth card is short enough to
   * share a viewport with this section.
   */
  signupVariant?: "accent" | "primary";
};

/**
 * The closing conversion block, reused on every page.
 *
 * Both CTAs leave the site: signup goes to the product, "Book a demo" opens
 * WhatsApp. Nothing here scrolls to another part of the same page — the export
 * had 18 CTAs pointing at an on-page #cta anchor, which put a scroll between
 * the visitor and the only two actions the site is measured on.
 */
export function FinalCta({
  heading = "Grow your business with Yukti today",
  body = "Bring your rate list. We'll build a live campaign with your products and send it to your phone, so you see exactly what your customers would see.",
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
            href={SIGNUP_URL}
            variant={signupVariant}
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
        <a
          href={WHATSAPP_URL}
          className={s.number}
          data-yk-event="site_whatsapp_click"
          target="_blank"
          rel="noopener noreferrer"
        >
          {WHATSAPP_DISPLAY}
        </a>
      </div>
    </section>
  );
}
