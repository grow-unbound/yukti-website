import { faq } from "@/content/faq";
import { CONTACT_LANGUAGES, SITE_ORIGIN, WHATSAPP_NUMBER } from "./site";

/**
 * Structured data. The FAQPage entries derive from content/faq.ts, so the
 * markup and the rendered accordion cannot drift apart — the design export
 * kept two hand-maintained copies and its own handover notes flagged the risk.
 */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: "Yukti",
    url: `${SITE_ORIGIN}/`,
    description:
      "Software for Indian distributors and wholesalers: campaigns, WhatsApp engagement, a customer ordering app, rates and orders.",
    areaServed: "IN",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${WHATSAPP_NUMBER}`,
      availableLanguage: CONTACT_LANGUAGES,
    },
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_ORIGIN}/#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`,
    })),
  };
}
