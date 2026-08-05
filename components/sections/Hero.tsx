import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { PhoneFrame, PhoneTabs } from "@/components/mock/PhoneFrame";
import {
  MockFigure,
  Pill,
  Price,
  StatTile,
  StrikePrice,
  MockButton,
} from "@/components/mock/primitives";
import { SIGNUP_URL } from "@/lib/site";
import { DEMO_URL } from "@/lib/whatsapp";
import { heroCopy } from "@/content/home";
import s from "./Hero.module.css";

const PRODUCTS = [
  { name: "FR Wire 1.5 sq mm · 90 m", mrp: "MRP ₹1,610", rate: "1,289", unit: "/ coil" },
  { name: "MCB 16 A · C-curve · SP", mrp: "MRP ₹185", rate: "164", unit: "/ pc" },
  { name: "Modular switch 6 A · 10 pk", mrp: "MRP ₹640", rate: "575", unit: "/ pack" },
];

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

        <p className={s.sub}>{heroCopy.sub}</p>

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
            variant="secondary"
            size="lg"
            event="site_demo_click"
          >
            Book a demo
          </Button>
        </div>

        <p className={s.micro}>{heroCopy.micro}</p>

        <div className={s.visual}>
          <MockFigure description="The customer ordering app on a phone, showing a campaign called Monsoon Stock-Up with three products. Each shows its MRP struck through and a lower campaign rate.">
            <PhoneFrame>
              <div className={s.phoneHead}>
                <span className={s.avatar}>AA</span>
                <span>
                  <span className={s.supplierName}>Anand Agencies</span>
                  <span className={s.supplierMeta}>Your supplier · Hyderabad</span>
                </span>
              </div>

              <div className={s.campaignBanner}>
                <span>
                  <span className={s.campaignTitle}>Monsoon Stock-Up</span>
                  <span className={s.campaignSub}>Campaign rates for you</span>
                </span>
                <span className={s.campaignEnds}>ends 12 Jul</span>
              </div>

              <div className={s.productList}>
                {PRODUCTS.map((p) => (
                  <div key={p.name} className={s.productRow}>
                    <span className={s.productCol}>
                      <span className={s.productName}>{p.name}</span>
                      <StrikePrice>{p.mrp}</StrikePrice>
                      <Price value={p.rate} unit={p.unit} className={s.productPrice} />
                    </span>
                    <MockButton>Add</MockButton>
                  </div>
                ))}
              </div>

              <PhoneTabs />
            </PhoneFrame>
          </MockFigure>

          <div className={s.aside}>
            <MockFigure description="A cockpit summary card: 23 orders today, ₹1.4 lakh in order value, and a campaign funnel reading 84 sent, 52 opened, 19 ordered.">
              <div className={s.cockpit}>
                <div className={s.cockpitLabel}>Your business · today</div>
                <div className={s.cockpitGrid}>
                  <StatTile label="Orders today">23</StatTile>
                  <StatTile label="Order value">
                    <Price value="1.4L" small />
                  </StatTile>
                  <div className={s.funnelTile}>
                    <span className={s.funnelLabel}>Campaign funnel</span>
                    <span className={s.funnelValue}>84 → 52 → 19</span>
                  </div>
                </div>
              </div>
            </MockFigure>

            <div className={s.trust}>
              <p className={s.trustLabel}>Works with the tools you already use</p>
              <div className={s.trustPills}>
                {["Tally", "Busy", "Zoho", "QuickBooks"].map((t) => (
                  <Pill key={t} trust>
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watched by the sticky mobile CTA bar. Zero height, no layout effect. */}
      <div id="hero-sentinel" aria-hidden="true" className={s.sentinel} />
    </section>
  );
}
