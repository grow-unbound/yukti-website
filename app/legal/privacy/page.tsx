import { LegalPage } from "@/components/sections/LegalPage";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What Yukti collects, how the consent model works for your customers, and how to export or delete your data. Written to be read, not skimmed past.",
  path: "/legal/privacy",
  // Not indexed while it is an unreviewed draft. Flip this by setting
  // LEGAL_REVIEW_PENDING to false in content/legal.ts once counsel signs off.
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title={privacy.title}
      updated={privacy.updated}
      summary={privacy.summary}
      sections={privacy.sections}
      outstanding="Section 8 in particular — the DPDP grievance officer details — has real regulatory weight and needs both a named person and a lawyer's review."
    />
  );
}
