import { Header } from "@/components/chrome/Header";
import { StickyCta } from "@/components/chrome/StickyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_DISPLAY } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import s from "@/components/ui/Prose.module.css";

export const metadata = pageMetadata({
  title: "About: the name, the belief, the ambition",
  description:
    "Yukti means practical intelligence: the right move under constraint. Built alongside real operators, for the businesses that sell to businesses.",
  path: "/about",
});

/**
 * The naming story here is the ONLY one on the site.
 *
 * There is no keystone narrative anywhere — that is a locked decision in the
 * brief. The voussoir mark appears; it is never explained. Do not add the arch
 * metaphor or the "keystone of your business" tagline to this page.
 *
 * The ambition line below is the public ceiling. "The operating layer" is
 * sayable; anything about accounting being derived from operations, or about
 * displacing an ERP, is internal.
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="About"
          title="Yukti (युक्ति)"
          lede="Practical intelligence: the right move under constraint. From yuj, to join, everything joined into one working whole. Both meanings are the product."
        />

        <div className={s.prose}>
          <section>
            <h2>The belief</h2>
            <p>
              A business grows when its owner makes better decisions and
              executes them faster. Not when they spend more time feeding the
              system.
            </p>
            <p>
              Most software gets this backwards. It asks to be fed, configured,
              reconciled and filed through, and somewhere along the way the tool
              becomes the boss. We build against that one enemy: the busywork
              that sits between an owner and their next good decision.
            </p>
          </section>

          <section>
            <h2>The ambition</h2>
            <p>
              The operating layer modern businesses run, grow, and win on: starting with the businesses that sell to businesses.
            </p>
            <p>
              That is a long way off and we would rather say so. Today Yukti
              does a narrower thing well: it holds a distributor&apos;s stock,
              rates, customers and orders in one place, puts their catalog on
              their customers&apos; phones, and reaches those customers on the
              channel they already use.
            </p>
          </section>

          <section>
            <h2>How it was built</h2>
            <p>
              Alongside real operators, not in a lab. The campaign builder
              exists because a distributor described the spreadsheet it
              replaced. The one-message-per-customer-per-day cap exists because
              a customer told us what receiving five felt like. The pricing
              model is usage-based because charging for seats would have meant
              charging before the value showed up.
            </p>
            <p>
              India-first, and built to travel. Lakh and crore, GST and
              WhatsApp, are in the foundations rather than bolted on, but the
              loop underneath them is not specific to any one market.
            </p>
          </section>

          <section>
            <h2>Talk to us</h2>
            <p>
              We reply on WhatsApp within one working day, which is also the
              promise we make to customers.
            </p>
            <p>
              <a
                href={WHATSAPP_URL}
                data-yk-event="site_whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </section>
        </div>

        <FinalCta />
      </main>
      <StickyCta />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
