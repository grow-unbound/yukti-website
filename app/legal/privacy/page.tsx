import { LegalPage } from "@/components/sections/LegalPage";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What Yukti collects, how the consent model works for your customers, and how to export or delete your data. Written to be read, not skimmed past.",
  path: "/legal/privacy",
  // Still noindex, and /legal/ is disallowed in app/robots.ts. Removing the
  // on-page review banner did not change that — drop both when these should
  // be findable in search.
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title={privacy.title}
      updated={privacy.updated}
      summary={privacy.summary}
      sections={privacy.sections}
    />
  );
}
