import { LegalPage } from "@/components/sections/LegalPage";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of service",
  description:
    "The terms for using Yukti as a business: what you're responsible for, what we are, and what Yukti explicitly does not do.",
  path: "/legal/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPage
      title={terms.title}
      updated={terms.updated}
      summary={terms.summary}
      sections={terms.sections}
      outstanding="Billing cadence (section 6), the liability cap (section 10), and jurisdiction (section 12) need deliberate business decisions, not just a lawyer's sign-off."
    />
  );
}
