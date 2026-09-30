import { Button } from "@/components/ui/Button";
import type { Plan } from "@/content/plans";
import { SIGNUP_URL } from "@/lib/site";
import { DEMO_URL } from "@/lib/whatsapp";
import s from "./PlanCard.module.css";

export function PlanCard({ plan }: { plan: Plan }) {
  const isSignup = plan.cta.kind === "signup";

  return (
    <div className={`${s.card} ${plan.featured ? s.featured : ""}`}>
      {plan.featured ? (
        <p className={s.ribbon}>Most businesses start here</p>
      ) : null}

      <h2 className={s.name}>{plan.name}</h2>
      <p className={s.blurb}>{plan.blurb}</p>

      {/* Figures are Inter with tabular numerals, per the design system: mono
          is for codes and IDs. Plans with a billing choice render both
          variants; the page-level toggle (pure CSS) shows one. */}
      {plan.billing ? (
        (["annual", "monthly"] as const).map((mode) => (
          <div key={mode} data-billing={mode}>
            <p className={`${s.price} ${s.priceNum}`}>{plan.billing![mode].price}</p>
            <p className={s.priceNote}>{plan.billing![mode].note}</p>
          </div>
        ))
      ) : (
        <>
          <p
            className={`${s.price} ${/\d/.test(plan.price) ? s.priceNum : s.priceWord}`}
          >
            {plan.price}
          </p>
          {plan.priceNote ? <p className={s.priceNote}>{plan.priceNote}</p> : null}
        </>
      )}

      <dl className={s.rows}>
        {plan.rows.map((row) => (
          <div key={row.label} className={s.row}>
            <dt className={s.rowLabel}>{row.label}</dt>
            <dd
              className={`${s.rowValue} ${row.value === "✓" ? s.tick : ""} ${
                row.value === "-" ? s.dash : ""
              }`}
            >
              {/* "✓" and "-" carry meaning, so they get a text equivalent
                  rather than being left as bare glyphs for a screen reader. */}
              {row.value === "✓" ? (
                <>
                  <span aria-hidden="true">✓</span>
                  <span className="srOnly">Included</span>
                </>
              ) : row.value === "-" ? (
                <>
                  <span aria-hidden="true">-</span>
                  <span className="srOnly">Not included</span>
                </>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className={s.spacer} />

      <Button
        href={isSignup ? SIGNUP_URL : DEMO_URL}
        variant={plan.featured ? "accent" : "primary"}
        size="md"
        block
        event={isSignup ? "site_signup_click" : "site_demo_click"}
      >
        {plan.cta.label}
      </Button>
    </div>
  );
}
