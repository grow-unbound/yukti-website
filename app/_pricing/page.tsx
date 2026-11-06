import { PricingView, pricingMetadata } from "./_view";

/**
 * Fallback only. proxy.ts rewrites /pricing to a regional variant, so this
 * renders when the proxy has not run (for example a static export).
 */
export const metadata = pricingMetadata("row");

export default function PricingPage() {
  return <PricingView region="row" />;
}
