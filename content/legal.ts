/**
 * Legal pages.
 *
 * Transcribed from the privacy policy and terms drafts, with the business
 * details filled in: grievance officer, contact address, jurisdiction, billing
 * cadence and the effective date.
 *
 * These render as published pages — the pre-review banner has been removed on
 * instruction. Two things did not change with it and are still worth knowing:
 * the liability cap in terms §10 remains bracketed, and both routes are still
 * noindex (see the pages' metadata and app/robots.ts).
 */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

export type LegalSection = {
  h: string;
  blocks: Block[];
};

export const privacy = {
  title: "Privacy policy",
  updated: "Last updated: 31 July 2026 · Effective date: 31 July 2026",
  summary:
    "Yukti is the software distributors use to run their catalog, pricing, campaigns, and orders, and that their customers use to browse and order. We collect what's needed to run that, nothing more. Your business owns its data; you can export or delete it anytime. Every marketing message we help you send carries an opt-out, and we enforce it platform-wide. This summary isn't the whole policy — read on for the details, but this is the shape of it.",
  sections: [
    {
      h: "1. Who this applies to",
      blocks: [
        { kind: "p", text: "This policy covers two audiences, and we're specific about which section applies to which:" },
        {
          kind: "ul",
          items: [
            "Visitors to useyukti.in — anyone browsing this website or contacting us about a demo.",
            "Users of the Yukti platform — businesses that run their operations on Yukti, their team members, and the business customers those sellers add to their account who use the ordering app.",
          ],
        },
      ],
    },
    {
      h: "2. What we collect",
      blocks: [
        { kind: "p", text: "On this website: basic analytics — pages visited, time on page, general location at city or country level, device type. This is collected to understand what's working on the site, not to identify you personally. If you contact us on WhatsApp, we hold that conversation as we would any business enquiry." },
        { kind: "p", text: "On the Yukti platform:" },
        {
          kind: "ul",
          items: [
            "Account and business information: business name, GSTIN if provided, address, team member names, roles, and contact details.",
            "Catalog and commercial data: products, brands, categories, pricing, customer lists, orders, invoices, and related business records a distributor enters or imports.",
            "Customer information: name, phone number, business details, order history, and communication preferences, provided by the distributor when they add a customer to their account.",
            "Communication data: WhatsApp message delivery, open, and response status for campaigns and notifications sent through Yukti.",
            "Usage data: how the platform is used, to improve reliability and to build the reporting features distributors rely on.",
          ],
        },
        { kind: "p", text: "We do not collect more than the platform needs to function. We do not sell any of this data, to anyone, ever." },
      ],
    },
    {
      h: "3. How we use it",
      blocks: [
        {
          kind: "ul",
          items: [
            "To operate the platform: authentication, order processing, catalog and pricing management, reporting.",
            "To send the messages a business asks Yukti to send on their behalf — campaigns, order updates, payment reminders — always through the consent model in Section 4.",
            "To improve the product. Understanding usage patterns helps us build features that matter, not to build profiles for advertising. Yukti does not run advertising and does not share platform data with advertisers.",
            "To provide support: responding to questions and resolving issues.",
            "To meet legal obligations, including tax, accounting, and regulatory requirements applicable in India.",
          ],
        },
      ],
    },
    {
      h: "4. Our consent model",
      blocks: [
        { kind: "p", text: "This is the part we want to be explicit about, not bury." },
        {
          kind: "ul",
          items: [
            "A business's customers are added to Yukti by that business, not by signing up themselves. When a customer first logs in via WhatsApp OTP, they explicitly consent to receive order-related and marketing communications from that business through Yukti.",
            "Every marketing message includes a clear opt-out. Opting out is one tap, and it is enforced platform-wide — once a customer opts out, no business on Yukti can send them further marketing messages, only transactional ones tied to an order they placed themselves.",
            "We cap marketing messages at one per customer per day, regardless of how many campaigns a business runs. This is enforced by the platform, not left to individual sellers' discretion.",
            "Customers can see who has access to their data at any time, and can request it be corrected or removed by contacting the business directly, or by contacting us.",
          ],
        },
      ],
    },
    {
      h: "5. Who we share data with",
      blocks: [
        {
          kind: "ul",
          items: [
            "Your team, within your business's account. Data is isolated per business; one distributor cannot see another's catalog, customers, or pricing.",
            "Service providers who help us run the platform, under contract and only for that purpose: cloud hosting and database infrastructure, WhatsApp message delivery via Meta's Cloud API and our messaging partner, email delivery, and analytics.",
            "Accounting integrations you choose to connect. Data flows only when you explicitly connect an integration, and only the data needed for that sync.",
            "Legal or regulatory authorities, only when required by law, and only to the extent required.",
            "We do not sell, rent, or trade personal data to third parties for their own marketing purposes.",
          ],
        },
      ],
    },
    {
      h: "6. Data ownership, export, and deletion",
      blocks: [
        {
          kind: "ul",
          items: [
            "Your business owns its data. Catalog, pricing, customer lists, order history — all of it is yours.",
            "You can export your data at any time, in full, without needing to ask us for a special export.",
            "You can request deletion of your account and associated data by contacting us. We'll confirm what's deleted and what we're required to retain, for example financial records we're legally obligated to keep under Indian tax law, and for how long.",
            "If your business stops using Yukti, we retain data for a limited period in case you return, then delete it. Details available on request.",
          ],
        },
      ],
    },
    {
      h: "7. Security",
      blocks: [
        { kind: "p", text: "We use industry-standard measures to protect data: encryption in transit, access controls scoped per business, and regular review of who has access to what. No system is perfectly secure, and we'll notify affected businesses promptly if we become aware of a breach affecting their data, consistent with our obligations under Indian law." },
      ],
    },
    {
      h: "8. Your rights, and how to reach us",
      blocks: [
        { kind: "p", text: "Under India's Digital Personal Data Protection Act (DPDP) and other applicable law, you have the right to access, correct, and request deletion of your personal data, and to withdraw consent for its processing where consent is the basis for that processing." },
        { kind: "p", text: "To exercise any of these rights, or with questions about this policy:" },
        {
          kind: "ul",
          items: [
            "Grievance Officer: Phani Krishna",
            "Email: legal@useyukti.in",
            "WhatsApp: +91 94907 44841",
            "Address: Hyderabad, Telangana, India",
          ],
        },
        { kind: "p", text: "We aim to respond to all requests within the timelines required by applicable law." },
      ],
    },
    {
      h: "9. Changes to this policy",
      blocks: [
        { kind: "p", text: "We may update this policy as the product or applicable law changes. Material changes will be communicated to platform users through the product or by email; the date at the top of this page always reflects the current version." },
      ],
    },
  ] satisfies LegalSection[],
};

export const terms = {
  title: "Terms of service",
  updated: "Last updated: 31 July 2026 · Effective date: 31 July 2026",
  summary:
    "These terms cover using Yukti as a business — running your catalog, pricing, and orders — and using useyukti.in. You're responsible for the accuracy of what you enter and for having the right to message your own customers. We're responsible for keeping the platform running, keeping your data yours, and being straightforward about what Yukti does and doesn't do.",
  sections: [
    {
      h: "1. Acceptance of terms",
      blocks: [
        { kind: "p", text: "By creating a seller account, accessing the Yukti platform, or using useyukti.in, you agree to these terms on behalf of the business you represent. If you don't agree, don't use Yukti." },
      ],
    },
    {
      h: "2. What Yukti is",
      blocks: [
        { kind: "p", text: "Yukti is a platform that helps businesses that sell to other businesses manage their catalog, pricing, customer relationships, campaigns, and orders, and gives their customers a self-serve way to browse and order. Yukti is not accounting software, does not file taxes on your behalf, and does not make journal entries. It feeds clean, structured data to the accounting tools you already use — Tally, Zoho Books, Zoho Inventory — it doesn't replace them." },
      ],
    },
    {
      h: "3. Accounts and eligibility",
      blocks: [
        {
          kind: "ul",
          items: [
            "Yukti is built for businesses that sell to other businesses. You must be authorized to act on behalf of the business you register.",
            "You're responsible for the accuracy of the information you provide: business details, catalog, pricing, and customer records.",
            "You're responsible for keeping your account credentials secure and for all activity under your account, including actions taken by team members you add.",
            "You must be legally able to enter into a binding contract to create an account.",
          ],
        },
      ],
    },
    {
      h: "4. Your data and your customers",
      blocks: [
        {
          kind: "ul",
          items: [
            "You own your business data. Catalog, pricing, customer lists, orders — Yukti stores it on your behalf; it doesn't become ours.",
            "You are responsible for the customers you add to Yukti and the consent you have to message them. When you add a customer and enable them for the ordering app or campaigns, you're representing that you have a legitimate business relationship with them and the right to communicate with them for that purpose. Yukti provides the consent and opt-out mechanisms; you're responsible for using them honestly.",
            "You are responsible for the accuracy of pricing, stock, and order information you publish through Yukti. Yukti is a tool for managing that information — it doesn't verify or guarantee its accuracy on your behalf.",
          ],
        },
      ],
    },
    {
      h: "5. Acceptable use",
      blocks: [
        { kind: "p", text: "You agree not to:" },
        {
          kind: "ul",
          items: [
            "Use Yukti to send unsolicited messages to people who haven't consented to hear from your business.",
            "Attempt to access another business's account, data, or catalog without authorization.",
            "Reverse-engineer, resell, or white-label the platform without our written agreement.",
            "Use the platform for any unlawful purpose, including fraud, misrepresentation of products or pricing, or violation of applicable consumer protection or data protection law.",
            "Circumvent or interfere with the opt-out and consent mechanisms built into the platform.",
          ],
        },
        { kind: "p", text: "We reserve the right to suspend or terminate accounts that violate these terms, particularly around consent and messaging conduct, since that conduct affects other businesses' trust in the platform." },
      ],
    },
    {
      h: "6. Fees and billing",
      blocks: [
        {
          kind: "ul",
          items: [
            "Yukti is offered on the plans described on our pricing page, priced by active customer usage and transaction volume, as applicable to your plan.",
            "Fees are billed monthly or annually, according to the subscription you choose, and are non-refundable except as required by law or as separately agreed in writing.",
            "We'll provide reasonable notice before any pricing change takes effect for existing accounts.",
            "WhatsApp messaging is billed via included monthly credits per plan, with transparent per-message top-up pricing beyond the included bundle, reflecting costs charged to us by Meta.",
          ],
        },
      ],
    },
    {
      h: "7. Third-party integrations",
      blocks: [
        { kind: "p", text: "Yukti integrates with third-party services including Tally, Zoho Books and Zoho Inventory, and with WhatsApp via Meta's Cloud API. These integrations are provided for your convenience; we aren't responsible for the availability, accuracy, or conduct of third-party services outside our control, and your use of those services is also subject to their own terms." },
      ],
    },
    {
      h: "8. Intellectual property",
      blocks: [
        { kind: "p", text: "Yukti, the Yukti name and logo, and the platform's software are our property or licensed to us. Nothing in these terms transfers ownership of the platform to you. Your business data and content remain yours, as described in Section 4." },
      ],
    },
    {
      h: "9. Warranties and disclaimers",
      blocks: [
        { kind: "p", text: "Yukti is provided as is. We work to keep the platform reliable and accurate, but we don't guarantee uninterrupted or error-free operation. We are not liable for business decisions made based on data or reports generated by the platform, or for losses arising from inaccurate information entered into the platform by you or your team." },
      ],
    },
    {
      h: "10. Limitation of liability",
      blocks: [
        { kind: "p", text: "To the maximum extent permitted by applicable law, Yukti's total liability for any claim arising from your use of the platform is limited to the fees paid by your business in the [three (3) months] preceding the claim. We are not liable for indirect, incidental, or consequential damages, including lost profits or lost business opportunities." },
      ],
    },
    {
      h: "11. Termination",
      blocks: [
        {
          kind: "ul",
          items: [
            "You may stop using Yukti and request account closure at any time.",
            "We may suspend or terminate an account for violation of these terms, non-payment, or conduct that puts other businesses on the platform at risk, particularly around messaging consent.",
            "On termination, you can export your data for a limited period as described in our privacy policy, after which it will be deleted subject to our legal retention obligations.",
          ],
        },
      ],
    },
    {
      h: "12. Governing law",
      blocks: [
        { kind: "p", text: "These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana." },
      ],
    },
    {
      h: "13. Changes to these terms",
      blocks: [
        { kind: "p", text: "We may update these terms as the product evolves. We'll notify active accounts of material changes through the product or by email before they take effect." },
      ],
    },
    {
      h: "14. Contact",
      blocks: [
        { kind: "p", text: "Questions about these terms: legal@useyukti.in · WhatsApp: +91 94907 44841 · Hyderabad, Telangana, India" },
      ],
    },
  ] satisfies LegalSection[],
};
