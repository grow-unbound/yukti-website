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
      outstanding="Billing cadence and jurisdiction are settled. The liability cap in section 10 is still a commercial decision to make, not just a lawyer's sign-off."
    />
  );
}
