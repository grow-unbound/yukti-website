import s from "./BillingToggle.module.css";

/**
 * Monthly / annual choice, centred above the plan cards.
 *
 * No client JS: these are native radios, and the pricing page's CSS shows the
 * matching figure with :has(). Both figures are in the server-rendered HTML,
 * so crawlers and no-script visitors see a valid page, and nothing shifts.
 * Annual is preselected.
 */
export function BillingToggle() {
  return (
    <fieldset className={s.group}>
      <legend className="srOnly">Billing period</legend>
      <label className={s.option}>
        <input
          className={s.input}
          type="radio"
          name="billing"
          value="monthly"
        />
        <span className={s.label}>Monthly</span>
      </label>
      <label className={s.option}>
        <input
          className={s.input}
          type="radio"
          name="billing"
          value="annual"
          defaultChecked
        />
        <span className={s.label}>
          Annual <span className={s.badge}>2 months free</span>
        </span>
      </label>
    </fieldset>
  );
}
