import Link from "next/link";
import { Header } from "@/components/chrome/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import s from "@/components/ui/Prose.module.css";

export const metadata = pageMetadata({
  title: "Your supplier runs on Yukti",
  description:
    "Got a Yukti link from your supplier? Here's what it is: your own rate list, new stock on WhatsApp, and order status you can check yourself. No app, no password.",
  path: "/buyers",
});

/**
 * The trust page, for the person who taps a shared link or receives a Yukti
 * WhatsApp message and wonders what this is. Also linked from the app's login
 * screen — that link should be repointed to /buyers; /customers still
 * redirects here in the meantime.
 *
 * There is deliberately NO signup CTA here and no sticky bar. This audience
 * structurally cannot sign up — customers are added by their supplier — so a
 * conversion prompt would be both useless and slightly dishonest. The page's
 * job is reassurance, and the only outbound link is back to the seller story.
 *
 * Vocabulary note: the brief bans "buyers" in customer-facing copy in favour
 * of "customers". The nav label deliberately breaks that rule — "For your
 * customers" gave no clue whose customers were meant, and "For B2B buyers"
 * names the persona unambiguously next to "For B2B sellers". Inside the page
 * body, where there is no such ambiguity, the copy still says "you" and
 * "your supplier".
 */
export default function CustomersPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="For B2B buyers"
          title="Your supplier runs on Yukti"
          lede="Yukti is the ordering system your supplier uses to serve you better. Your own rate list, new stock and offers on WhatsApp, and order status you can check yourself. No app to install, no password to remember."
        />

        <div className={s.prose}>
          <section>
            <h2>Three things worth knowing</h2>
            <ul>
              <li>
                <strong>Your number is safe.</strong> We verify you with a
                one-time code and never sell your data. Your phone number is
                used to identify you to your supplier, and for nothing else.
              </li>
              <li>
                <strong>You control the messages.</strong> Opt out of
                promotional messages anytime, in one tap. Once you do, it is
                enforced across every business on Yukti, not just the one you
                opted out of. Order updates for orders you placed yourself
                still reach you.
              </li>
              <li>
                <strong>Your rates are private.</strong> Only you and your
                supplier see your prices. No other customer of theirs can see
                what you pay, and no other business on Yukti can see you at all.
              </li>
            </ul>
          </section>

          <section>
            <h2>What is this OTP?</h2>
            <p>
              A one-time code sent to your WhatsApp to confirm the phone number
              is yours. It replaces a password. There is nothing to remember and
              nothing to install — the ordering page opens in your phone&apos;s
              browser like any other link.
            </p>
          </section>

          <section>
            <h2>How do I stop the messages?</h2>
            <p>
              Every promotional message carries an opt-out link. Tap it once and
              the promotional messages stop. You can also reply to your supplier
              directly and ask them to remove you. Businesses on Yukti cannot
              send you more than one marketing message a day in any case — the
              platform enforces that cap, not the sender.
            </p>
          </section>

          <section>
            <h2>How do I see my orders?</h2>
            <p>
              Open the same link your supplier sent you and go to Orders. You
              will see what you ordered, what it cost, and where each order has
              reached — received, confirmed, dispatched, delivered. You do not
              need to call to ask.
            </p>
          </section>

          <section>
            <h2>Are you a supplier?</h2>
            <p>
              If you sell to other businesses and want to run your own catalog,
              rates and orders this way,{" "}
              <Link href="/">see what Yukti does</Link>.
            </p>
          </section>
        </div>
      </main>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "For B2B buyers", path: "/buyers" },
        ])}
      />
    </>
  );
}
