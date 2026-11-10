import { LITE } from "@/content/plans";
import { REGION_LABEL } from "./region";
import { CONTACT_LANGUAGES, SITE_ORIGIN, WHATSAPP_NUMBER } from "./site";

/**
 * Structured data. The FAQPage entries derive from content/faq.ts, so the
 * markup and the rendered accordion cannot drift apart — the design export
 * kept two hand-maintained copies and its own handover notes flagged the risk.
 */

const REGION_AREA = {
  in: "IN",
  eu: "EU",
  row: "Worldwide",
} as const;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: "Yukti",
    url: `${SITE_ORIGIN}/`,
    description:
      "AI sales operations for manufacturers, wholesalers and distributors: one inbox for WhatsApp and email with rates, stock and dues beside every message, a customer storefront, and quotes and orders your team approves.",
    areaServed: ["IN", "Worldwide"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${WHATSAPP_NUMBER}`,
      availableLanguage: CONTACT_LANGUAGES,
    },
  };
}

/**
 * SoftwareApplication, without prices. Pricing is hidden (v2.2): no price in
 * schema, and pricingOffersLd() below is unused while app/_pricing is parked.
 */
export function softwareApplicationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_ORIGIN}/#software`,
    name: "Yukti",
    url: `${SITE_ORIGIN}/`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI sales operations",
    operatingSystem: "Web browser",
    description:
      "Yukti is AI sales operations for manufacturers, wholesalers and distributors: one inbox for WhatsApp and email, AI answers on price, stock, order status and dues, customer-specific rates, quotes and orders you approve, and Zoho sync.",
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    featureList: [
      "One inbox for WhatsApp and email with rates, stock and dues beside every message",
      "AI answers to customer questions on price, stock, order status and dues",
      "Customer storefront with each customer's own rates",
      "Draft quotes you approve, and approvals on rate changes",
      "WhatsApp campaigns and payment reminders with tracking",
      "Zoho sync",
    ],
  };
}

/**
 * The same SoftwareApplication node, extended with the one public figure.
 * Rendered on /pricing only. Only Lite carries a public figure; the other
 * tiers are quote-based and are described rather than priced.
 */
export function pricingOffersLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_ORIGIN}/#software`,
    name: "Yukti",
    offers: (["in", "eu", "row"] as const).map((region) => ({
      "@type": "Offer",
      name: `Lite (${REGION_LABEL[region]})`,
      description: "WhatsApp engagement, with unlimited contacts.",
      price: LITE[region].amount,
      priceCurrency: LITE[region].currency,
      url: `${SITE_ORIGIN}/pricing`,
      availability: "https://schema.org/InStock",
      eligibleRegion: REGION_AREA[region],
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: LITE[region].amount,
        priceCurrency: LITE[region].currency,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_ORIGIN}/#faq`,
    mainEntity: items.map((item) => ({
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
