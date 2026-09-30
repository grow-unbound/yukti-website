/**
 * Comparison pages.
 *
 * Rules that govern every entry here:
 *  - Lead with the problem the competitor's approach leaves unsolved, then the
 *    resolution. Never a feature checklist.
 *  - Never overstate. Where a competitor is better, cheaper or simpler, the
 *    page says so in `wins`. Credibility compounds across all seven pages; one
 *    page that oversells poisons the rest.
 *  - Only state a competitor fact that was read on their own pages (or, for
 *    IndiaMART's MDC, its own help centre) and is listed in `sources`. Where
 *    a price or feature was not published, the row says "Not published".
 *  - Yukti's own Lite price is WhatsApp engagement only. The full platform is
 *    quoted to catalog size. No row may imply Lite includes the storefront.
 *
 * Facts last checked: September 2026. Re-check before republishing.
 */

export type CompareRow = { label: string; yukti: string; them: string };

export type Competitor = {
  slug: string;
  name: string;
  /** One line for the hub and the nav: what it is. */
  what: string;
  /** Category tag on the hub card. */
  category: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** The problem their approach leaves unsolved. Three, so the grid fills a row. */
  problems: { h: string; p: string }[];
  /** Where they are the better choice. Honest, specific. */
  wins: string[];
  /** Where Yukti is the better choice. */
  yuktiWins: string[];
  rows: CompareRow[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  ctaHeading: string;
  ctaBody: string;
};

const YUKTI_PRICE =
  "Lite from ₹5,000 (India), €300 (EU) or $300 (rest of world) a month, for WhatsApp engagement. The full platform is priced to your catalog size.";

export const competitors: Competitor[] = [
  {
    slug: "whatsapp-business-catalog",
    name: "WhatsApp Business Catalog",
    what: "The free catalog inside the WhatsApp Business app.",
    category: "Free tool",
    metaTitle: "Yukti vs WhatsApp Business Catalog: when free stops being free",
    metaDescription:
      "The WhatsApp Business catalog is free and good for a handful of buyers. See what changes when every customer needs their own rate, an order trail and the context behind each message.",
    h1: "The catalog is free. The time you spend answering from it is not.",
    lede: "WhatsApp's own catalog is a good first step: it costs nothing and your buyers are already there. The trouble starts when one price no longer fits everyone and every reply means checking three other places first.",
    problems: [
      {
        h: "One public price for every buyer",
        p: "The catalog shows the same price to anyone who opens it. Your A-class buyer, your walk-in and your contractor each pay a different rate, so the real price still gets negotiated by message, one chat at a time.",
      },
      {
        h: "A cart is not an order",
        p: "Buyers can build a cart, but there is no checkout and no inventory behind it. The order arrives as a message, and you re-key it somewhere else. Nothing tracks whether it was confirmed, dispatched or paid.",
      },
      {
        h: "Every reply starts with a search",
        p: "A message lands with no context. What did they order last? What do they owe you? Is it in stock? You open the ledger, the stock sheet and last month's chat before you can answer.",
      },
    ],
    wins: [
      "It is free, and there is nothing to set up.",
      "Buyers already have WhatsApp, so there is no new link to learn.",
      "For a few dozen buyers on one price list, it is genuinely enough.",
    ],
    yuktiWins: [
      "Each customer sees their own rate list, not one public price.",
      "Orders move through clear statuses and become invoices.",
      "WhatsApp and email land in one inbox, beside the buyer's history, dues and live stock.",
    ],
    rows: [
      { label: "Cost", yukti: YUKTI_PRICE, them: "Free" },
      { label: "Price per customer", yukti: "Each customer sees only their own rates", them: "One price per product, visible to everyone" },
      { label: "Ordering", yukti: "Orders with statuses, from enquiry to delivered", them: "Cart sent as a message, no checkout" },
      { label: "Buyer and stock context", yukti: "Order history, dues and live stock beside every message", them: "None" },
      { label: "Channels", yukti: "WhatsApp and email in one inbox", them: "WhatsApp only" },
      { label: "Accounting", yukti: "Zoho, Tally, Busy and QuickBooks", them: "None" },
      { label: "Product limit", yukti: "Sized to your plan", them: "Up to 500 products" },
    ],
    faq: [
      {
        q: "Can I keep using WhatsApp Business Catalog alongside Yukti?",
        a: "Yes. Many sellers start there. Yukti takes over when you need per-customer rates, an order trail, or the buyer's history in front of you when a message arrives.",
      },
      {
        q: "Is the WhatsApp Business catalog really free?",
        a: "Yes, the catalog in the WhatsApp Business app costs nothing. What it does not give you is customer-specific pricing, checkout, or stock and order tracking.",
      },
    ],
    sources: [
      { label: "WhatsApp Business catalog limits, as documented by Meta partners", url: "https://docs.360dialog.com/docs/messaging/catalogs" },
      { label: "WhatsApp catalog overview", url: "https://respond.io/blog/whatsapp-catalog-whatsapp-shopping-catalog" },
    ],
    ctaHeading: "Outgrown one price for everyone?",
    ctaBody: "Bring your rate list. We will set up per-customer rates and show you the inbox with your own buyers in it.",
  },
  {
    slug: "wizcommerce",
    name: "WizCommerce",
    what: "An AI platform for wholesale sales: rep app, storefront, CRM and payments.",
    category: "Wholesale platform",
    metaTitle: "Yukti vs WizCommerce: a published price and every channel in one inbox",
    metaDescription:
      "WizCommerce is a broad wholesale suite. Yukti is narrower on purpose: one inbox with buyer and stock context, a storefront, and a price you can read before you book a call.",
    h1: "A bigger suite is not a faster reply.",
    lede: "WizCommerce is the closest thing to Yukti in ambition: wholesale ordering, a storefront and a rep app in one place. If you want a full sales suite, it is a serious option. If your daily pain is answering buyers quickly, the difference is narrower than the feature list suggests.",
    problems: [
      {
        h: "Pricing you cannot see until you talk to sales",
        p: "WizCommerce does not publish its plans on its website. You can only compare it to your budget after a conversation, which makes early evaluation slow for a small team.",
      },
      {
        h: "Capture is not context",
        p: "Turning emails, PDFs and voice notes into orders is useful. But an order in the system still leaves you checking what this buyer usually takes, what they owe, and what is actually in stock before you commit.",
      },
      {
        h: "Built for reps, less for the owner at the counter",
        p: "Its strength is rep-led selling and account management. If the owner is the one answering WhatsApp all day, the daily loop is the inbox, not the CRM.",
      },
    ],
    wins: [
      "A wider suite: rep ordering app, CRM, payments and AI product photography.",
      "AI that reads emails, PDFs, spreadsheets and voice notes into orders.",
      "Strong fit for rep-led wholesale across furnishing, gifts, food and industrial goods.",
    ],
    yuktiWins: [
      "Pricing you can read: Lite is published per region, and the full platform is quoted to catalog size.",
      "WhatsApp and email land beside the buyer's history, dues and live stock.",
      "Self-serve setup: publish your first catalog in as little as 2 hours.",
    ],
    rows: [
      { label: "Entry price", yukti: YUKTI_PRICE, them: "Not published" },
      { label: "Inbox with buyer and stock context", yukti: "Core of the product", them: "Not stated on their site" },
      { label: "Channels named", yukti: "WhatsApp and email", them: "Email, PDFs, spreadsheets, scans and voice notes for order intake" },
      { label: "Storefront", yukti: "Per-customer rate lists, no install", them: "WizShop B2B storefront" },
      { label: "Rep sales app", yukti: "Not the focus", them: "WizOrder" },
      { label: "CRM and payments", yukti: "Not the focus", them: "WizCRM and WizPay" },
      { label: "Setup", yukti: "As little as 2 hours self-serve", them: "Stated as under 30 days" },
    ],
    faq: [
      {
        q: "Is Yukti a WizCommerce alternative?",
        a: "For sellers whose main problem is answering buyers fast with the right context, yes. If you need a rep app, CRM and payments in one suite, WizCommerce covers more ground.",
      },
      {
        q: "Does Yukti publish its pricing?",
        a: "Lite is published in three regions. The full platform is priced to your catalog size and migration scope, so it is quoted after one call.",
      },
    ],
    sources: [
      { label: "WizCommerce", url: "https://wizcommerce.com/" },
      { label: "WizCommerce comparisons", url: "https://wizcommerce.com/wizcommerce-vs-others/" },
    ],
    ctaHeading: "See the inbox with your own buyers in it",
    ctaBody: "Bring a rate list and a few real buyers. We will show you a message arriving with their history and your stock beside it.",
  },
  {
    slug: "indiamart",
    name: "IndiaMART",
    what: "India's B2B marketplace and lead-generation service.",
    category: "Marketplace",
    metaTitle: "Yukti vs IndiaMART: leads find you, orders keep you",
    metaDescription:
      "IndiaMART brings new buyer enquiries. Yukti runs the orders, rates and replies for the customers you already have. Different jobs, and how they fit together.",
    h1: "A lead is not an order, and it is not yet your customer.",
    lede: "IndiaMART is built to bring you new buyers. Yukti is built for what happens with the buyers you already have: quoting the right rate, taking the order, and answering the next message quickly. They solve different problems, and many sellers will use both.",
    problems: [
      {
        h: "You rent the audience",
        p: "Marketplace leads arrive through the platform, and you pay to keep them coming. The relationship with a repeat buyer is better held in your own storefront, where they order directly.",
      },
      {
        h: "Enquiries, not orders",
        p: "A lead is the start of a conversation. IndiaMART's own service description lists buyer enquiries and a catalog, and does not describe an order flow for the buyers you already serve.",
      },
      {
        h: "Everyone sees the same listing",
        p: "A marketplace catalog is public. Your regular buyers still need their own negotiated rates, stock they can trust, and a fast way to reorder.",
      },
    ],
    wins: [
      "New buyer discovery: BuyLeads put your products in front of people who do not know you yet.",
      "Reach across categories and cities without any marketing of your own.",
      "A public, searchable presence for products and services.",
    ],
    yuktiWins: [
      "Orders, rates and invoices for the customers you already have.",
      "Each customer sees their own price list, and repeat orders take two taps.",
      "One inbox with WhatsApp and email, with buyer history and live stock beside each message.",
    ],
    rows: [
      { label: "Main job", yukti: "Run orders, rates and replies for existing buyers", them: "Bring new buyer enquiries" },
      { label: "Entry price", yukti: YUKTI_PRICE, them: "Mini Dynamic Catalog from ₹35,000 a year, excluding taxes" },
      { label: "What you get", yukti: "Storefront, inbox, orders, campaigns, integrations", them: "Catalog listing and buyer enquiries (10 weekly plus 1 daily on MDC)" },
      { label: "Per-customer pricing", yukti: "Yes, each customer sees their own rates", them: "Public listing" },
      { label: "Order management", yukti: "Enquiry to delivered, with invoices", them: "Not stated" },
      { label: "Accounting", yukti: "Zoho, Tally, Busy and QuickBooks", them: "Not stated" },
    ],
    faq: [
      {
        q: "Do I have to choose between IndiaMART and Yukti?",
        a: "No. Use IndiaMART to find new buyers, and Yukti to serve them once they become regulars. They do different jobs.",
      },
      {
        q: "Can Yukti bring me new buyers?",
        a: "Yukti is not a marketplace. It helps you run the customers you already have, and campaigns help bring lapsed ones back. New-buyer discovery is what IndiaMART is for.",
      },
    ],
    sources: [
      { label: "IndiaMART Mini Dynamic Catalog, IndiaMART help centre", url: "https://help.indiamart.com/knowledge-base/mdc" },
    ],
    ctaHeading: "Keep the buyers you worked to win",
    ctaBody: "Bring your regular customers. We will set up their rates and an ordering link they can use from any phone.",
  },
  {
    slug: "turis",
    name: "Turis",
    what: "A B2B storefront and order-intake platform with email capture and EDI.",
    category: "Order intake",
    metaTitle: "Yukti vs Turis: order intake with the context to answer it",
    metaDescription:
      "Turis consolidates orders from web, email and EDI into your ERP. Yukti adds what is missing at the moment a message lands: the buyer's history, dues and your live stock.",
    h1: "Capturing the order is half the job. Knowing what to say back is the other half.",
    lede: "Turis is thoughtful about order intake: web, email and EDI feeding one system. If you sell to retail chains that mandate EDI, that is a real strength. Yukti starts from a different question: when a message arrives, what do you need in front of you to answer it in seconds?",
    problems: [
      {
        h: "An order in the system still needs a decision",
        p: "Getting an emailed PO into the system saves keying. It does not tell you that this buyer is 30 days overdue, or that one line is short by two units and there is stock at another warehouse.",
      },
      {
        h: "The channel list grows the bill",
        p: "Turis prices the storefront, email order capture (Vision) and each EDI chain separately, plus sales seats. That suits a growing operation, and it is worth adding up before you commit.",
      },
      {
        h: "Built around volume tiers",
        p: "Plans are sized by monthly order volume. That is fair, but a seller with a few hundred active buyers and modest volume may be paying for capacity that the daily inbox does not need.",
      },
    ],
    wins: [
      "EDI for retail chains, with certification and maintenance handled.",
      "Vision reads PDFs, spreadsheets and plain text into orders.",
      "Clear volume-based tiers up to enterprise scale, and a 14-day trial.",
    ],
    yuktiWins: [
      "Buyer history, dues and live stock beside every WhatsApp message and email.",
      "WhatsApp as a first-class channel, not an add-on.",
      "Per-customer rates, campaigns and a storefront in one product.",
    ],
    rows: [
      { label: "Entry price", yukti: YUKTI_PRICE, them: "From €299 a month for up to €50k monthly order volume" },
      { label: "Email order capture", yukti: "Emails land in the inbox with buyer context", them: "Vision, from €199 a month, priced by order count" },
      { label: "EDI", yukti: "Not the focus", them: "Turnkey EDI, from €200 a month per retail chain" },
      { label: "WhatsApp", yukti: "First-class channel", them: "Not listed among channels" },
      { label: "Buyer and stock context at message time", yukti: "Core of the product", them: "Not stated" },
      { label: "Sales seats", yukti: "Not the focus", them: "Orbit, €49 a seat a month, minimum 3" },
      { label: "Trial", yukti: "Self-serve signup", them: "14 days, no card" },
    ],
    faq: [
      {
        q: "Is Yukti a Turis alternative?",
        a: "If your main need is EDI with retail chains, Turis is built for it. If your main need is answering buyers fast across WhatsApp and email with their history and your stock in view, Yukti is closer.",
      },
      {
        q: "Does Yukti handle emailed purchase orders?",
        a: "Yes. They land in the same inbox as WhatsApp messages, with the buyer's history, dues and live stock beside them.",
      },
    ],
    sources: [{ label: "Turis pricing", url: "https://turis.app/pricing/" }],
    ctaHeading: "See a message arrive with its context",
    ctaBody: "Bring an emailed PO and a WhatsApp enquiry. We will show both in one inbox with the buyer's history and your stock beside them.",
  },
  {
    slug: "b2b-wave",
    name: "B2B Wave",
    what: "A wholesale ordering portal with price lists and a sales rep app.",
    category: "Ordering portal",
    metaTitle: "Yukti vs B2B Wave: a portal is not a conversation",
    metaDescription:
      "B2B Wave gives wholesalers a fast ordering portal. Yukti adds the inbox, buyer context and WhatsApp that keep the conversation moving around it.",
    h1: "A portal takes the order. It does not answer the message.",
    lede: "B2B Wave is a solid, focused wholesale ordering portal, with generous limits and no platform transaction fees. If your buyers already order online and just need a good storefront, it does that well. The gap is everything that happens before and around the order.",
    problems: [
      {
        h: "Buyers still message you first",
        p: "Even with a portal, buyers ask: is it in stock, what is my rate, can you do better on volume. Those arrive on WhatsApp and email, outside the portal, with no context attached.",
      },
      {
        h: "Portal-first means channel-last",
        p: "The product centres on a web ordering site and a rep app. WhatsApp and email are not part of it, so the conversation and the order live in different places.",
      },
      {
        h: "No view of the buyer at the moment you reply",
        p: "You can see orders in the portal, but the reply itself still needs you to look up their history, what they owe, and live stock before you commit.",
      },
    ],
    wins: [
      "A quick, focused ordering website for wholesale, with unlimited orders, quotes and customers.",
      "Generous published limits: up to 20,000 products, 10 users and 20 price lists on Pro.",
      "0% platform transaction fees, a sales rep app, API access and multilingual content.",
    ],
    yuktiWins: [
      "WhatsApp and email in one inbox, with the buyer's history, dues and live stock beside each message.",
      "Campaigns to specific customer segments, tracked to orders.",
      "Integrations with Zoho, Tally, Busy and QuickBooks included in every plan.",
    ],
    rows: [
      { label: "Entry price", yukti: YUKTI_PRICE, them: "£270 a month for Pro (listed at £135 for the first 3 months)" },
      { label: "Products and price lists", yukti: "Sized to your plan", them: "Pro: 20,000 products, 20 price lists" },
      { label: "Users", yukti: "Sized to your plan", them: "Pro: up to 10 users" },
      { label: "Inbox with buyer and stock context", yukti: "Core of the product", them: "Not stated" },
      { label: "WhatsApp and email channels", yukti: "Both, in one inbox", them: "Not stated" },
      { label: "Campaigns", yukti: "Built in, with a funnel from sent to ordered", them: "Not stated" },
      { label: "Sales rep app", yukti: "Not the focus", them: "Android and iOS" },
    ],
    faq: [
      {
        q: "Is Yukti a B2B Wave alternative?",
        a: "If you want a straightforward wholesale ordering website, B2B Wave does that well. If you also need the inbox, WhatsApp and buyer context around it, Yukti covers more of the daily work.",
      },
      {
        q: "Can I use a portal and Yukti together?",
        a: "You can, but most sellers find the Yukti storefront covers ordering, so a second portal adds cost without adding much.",
      },
    ],
    sources: [{ label: "B2B Wave pricing", url: "https://www.b2bwave.com/pricing" }],
    ctaHeading: "Put the conversation next to the order",
    ctaBody: "Bring your price lists. We will show the storefront and the inbox side by side with your own buyers.",
  },
  {
    slug: "shopify-b2b",
    name: "Shopify B2B",
    what: "B2B catalogs and company accounts inside the Shopify platform.",
    category: "Commerce platform",
    metaTitle: "Yukti vs Shopify B2B: the cost of real B2B, and the part it skips",
    metaDescription:
      "Shopify supports B2B catalogs, but its unlimited tier starts in the thousands a month. See when a purpose-built ordering and inbox tool fits a distributor better.",
    h1: "Shopify sells your goods online. It does not run your wholesale desk.",
    lede: "Shopify has real B2B features, a huge app ecosystem and excellent checkout. If you are building a web store, it is hard to beat. A distributor running orders through WhatsApp and email has a different problem, and it is the one Shopify does not try to solve.",
    problems: [
      {
        h: "Real B2B scale costs real money",
        p: "B2B catalogs are on every paid Shopify plan, but capped at 3 catalogs below Plus. Unlimited catalogs need Shopify Plus, which public pricing pages put at roughly $2,300 to $2,500 a month before apps and payments.",
      },
      {
        h: "It starts from a web store",
        p: "Shopify is built around a storefront that visitors browse. Most distributor orders start as a message from a buyer you already know, and that conversation happens outside the store.",
      },
      {
        h: "No inbox, no buyer context",
        p: "Shopify has customer records and order history, but nothing that puts a buyer's dues, payment terms and live stock beside a WhatsApp message or email as it arrives.",
      },
    ],
    wins: [
      "A full ecommerce platform: checkout, payments, themes and thousands of apps.",
      "Best choice if you also sell direct to consumers on the same catalog.",
      "B2B catalogs on every paid plan, with unlimited catalogs on Plus.",
    ],
    yuktiWins: [
      "Built for sellers who serve known accounts, not anonymous visitors.",
      "One inbox for WhatsApp and email, with history, dues and stock beside each message.",
      "A published entry price for Lite, and a full-platform quote sized to your catalog, not a platform tier.",
    ],
    rows: [
      { label: "Entry price", yukti: YUKTI_PRICE, them: "Paid plans start well under $100 a month with B2B catalogs limited to 3. Plus starts around $2,300 a month" },
      { label: "B2B catalogs", yukti: "Per-customer rate lists", them: "Up to 3 on Basic, Grow and Advanced, unlimited on Plus" },
      { label: "Inbox with buyer and stock context", yukti: "Core of the product", them: "Not part of the platform" },
      { label: "WhatsApp and email in one place", yukti: "Yes", them: "Via third-party apps" },
      { label: "Checkout and payments", yukti: "Order-led, not a public checkout", them: "Full checkout and payments" },
      { label: "Best for", yukti: "Distributors serving known accounts", them: "Brands selling online, B2B and consumer" },
    ],
    faq: [
      {
        q: "Can Yukti replace my Shopify store?",
        a: "No. If you sell to the public online, keep your store. Yukti is for the accounts you serve directly, where rates, credit and stock matter more than checkout.",
      },
      {
        q: "Do I need Shopify Plus for wholesale?",
        a: "Shopify offers B2B catalogs on every paid plan, limited to three. Unlimited catalogs need Plus. Whether you need more than three depends on how many rate tiers you run.",
      },
    ],
    sources: [
      { label: "Shopify pricing", url: "https://www.shopify.com/pricing" },
      { label: "Shopify Plus pricing, third-party analysis", url: "https://useamp.com/blog/how-much-does-shopify-plus-cost/" },
    ],
    ctaHeading: "Run wholesale without a platform bill",
    ctaBody: "Tell us how many rate tiers you run. We will show what that looks like on Yukti and what it would cost.",
  },
  {
    slug: "wati",
    name: "Wati",
    what: "A WhatsApp Business API platform with a shared team inbox and broadcasts.",
    category: "WhatsApp messaging",
    metaTitle: "Yukti vs Wati: a WhatsApp inbox, or the order behind it",
    metaDescription:
      "Wati is a solid WhatsApp inbox and broadcast tool. Yukti covers the order-to-cash side: rates, orders, stock and buyer context. When each one is the right tool.",
    h1: "A shared inbox tells you who wrote. It does not tell you what to quote.",
    lede: "Wati is good at what it does: WhatsApp API access, a shared team inbox, broadcasts and chatbots. For pure WhatsApp messaging it is simpler and typically lighter than a full ordering platform. The question is what happens after the message arrives.",
    problems: [
      {
        h: "The inbox has no idea what you sell",
        p: "A messaging inbox knows the conversation. It does not know this buyer's rate, their credit, or whether the product is in stock. Every quote still means leaving the inbox to find out.",
      },
      {
        h: "No path from message to order",
        p: "Wati offers a catalog and order templates, and connects to Shopify. Rates per customer, order statuses and invoices for a distributor are not what it is built around.",
      },
      {
        h: "Message costs stack on top",
        p: "Subscription fees, WhatsApp message fees and add-ons are billed separately. That is normal for API platforms, and it is worth modelling against your monthly volume.",
      },
    ],
    wins: [
      "Simpler and usually cheaper if all you need is WhatsApp messaging.",
      "Chatbot builder, broadcasts and omnichannel messaging across WhatsApp and social channels.",
      "Fast to adopt, with no full ordering system to configure.",
    ],
    yuktiWins: [
      "Rates per customer, orders, invoices and stock, not only messages.",
      "Buyer history, dues and live stock beside every WhatsApp message and email.",
      "Campaigns targeted by area, dormancy or dues, tracked from sent to ordered.",
    ],
    rows: [
      { label: "Main job", yukti: "Order-to-cash with an inbox that has context", them: "WhatsApp messaging, inbox and automation" },
      { label: "Entry price", yukti: YUKTI_PRICE, them: "Growth, Pro and Business plans, plus message fees. See their pricing page" },
      { label: "Shared team inbox", yukti: "Yes, with buyer and stock context", them: "Yes" },
      { label: "Chatbots", yukti: "Not the focus", them: "No-code chatbot builder" },
      { label: "Per-customer rates and orders", yukti: "Yes", them: "Catalog and order templates" },
      { label: "Email", yukti: "Yes, in the same inbox", them: "Not stated" },
      { label: "Accounting integrations", yukti: "Zoho, Tally, Busy and QuickBooks", them: "Shopify integration" },
    ],
    faq: [
      {
        q: "Is Wati cheaper than Yukti?",
        a: "For pure WhatsApp messaging, it is typically a lighter tool and a lighter bill. Yukti covers more of the job, including rates, orders and buyer context, so the comparison is between different scopes.",
      },
      {
        q: "Can I use Wati and Yukti together?",
        a: "You could, but running two inboxes brings back the tab-switching Yukti is meant to remove. Most sellers pick one home for conversations.",
      },
    ],
    sources: [{ label: "Wati pricing", url: "https://www.wati.io/pricing/" }],
    ctaHeading: "Quote with the answer in front of you",
    ctaBody: "Bring a real WhatsApp thread. We will show it with the buyer's rate, dues and stock beside it.",
  },
];

export const competitorBySlug = (slug: string) =>
  competitors.find((c) => c.slug === slug);

/**
 * Tools that came up in research but do not get a page of their own yet.
 * Deliberately no prices or claims: only what the category is.
 */
export const alsoConsidered: { name: string; what: string }[] = [
  { name: "OroCommerce", what: "Enterprise B2B commerce platform." },
  { name: "Sana Commerce", what: "B2B commerce built around ERP data." },
  { name: "BigCommerce B2B", what: "B2B features on the BigCommerce platform." },
  { name: "Ordermentum", what: "Wholesale ordering for suppliers and venues in Australia." },
  { name: "Yalo", what: "Conversational commerce for large consumer-goods companies." },
  { name: "Charles", what: "Conversational commerce across messaging channels, aimed at consumer brands." },
  { name: "Rasayel", what: "WhatsApp and messaging inbox and automation." },
];
