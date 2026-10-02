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
      "Software for businesses that sell to businesses: one inbox for WhatsApp and email with buyer and stock context, a customer storefront, rates, campaigns and orders.",
    areaServed: ["IN", "EU", "Worldwide"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${WHATSAPP_NUMBER}`,
      availableLanguage: CONTACT_LANGUAGES,
    },
  };
}

/**
 * SoftwareApplication, without prices. This node renders on every page, and
 * prices belong on /pricing only, so the Offers live in pricingOffersLd().
 */
export function softwareApplicationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_ORIGIN}/#software`,
    name: "Yukti",
    url: `${SITE_ORIGIN}/`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Order management and B2B commerce",
    operatingSystem: "Web browser",
    description:
      "Yukti is the ordering platform for manufacturers, distributors and wholesalers: one inbox for WhatsApp and email with buyer and stock context, digital catalogs, customer-specific rates, campaigns, and an ordering app customers use without installing anything.",
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    featureList: [
      "Multi-channel inbox with buyer history, dues and live stock beside every message",
      "Digital catalogs with customer-specific rates",
      "Campaigns with time-limited pricing",
      "WhatsApp engagement with delivery and open tracking",
      "Customer ordering app with no install and no password",
      "Order management from enquiry to delivery",
      "Zoho, Tally, Busy and QuickBooks integrations",
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
