# Yukti marketing site

The public site at **useyukti.in**. A standalone Next.js project, deployed as
its own Vercel project. It is not coupled to the product app in any way —
`app.useyukti.in` is deployed separately, and this repo has no Supabase, no
auth, and no shared code with it.

Rebuilt from a Claude Design export (`reference/design-export/`), which remains
the source of truth for visual design and copy. See `docs/BUILD-NOTES.md` for
what changed in the rebuild and why.

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (all routes prerender static)
npm run check        # typecheck + lint + token discipline
```

## Environment

Copy `.env.example` to `.env.local`. Set the same values in the Vercel project.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_ORIGIN` | This site's origin. Canonical URLs, sitemap, `og:url`. |
| `NEXT_PUBLIC_SIGNUP_URL` | Where every "Use Yukti now" CTA goes. **Must not be this site's own origin.** |
| `NEXT_PUBLIC_LOGIN_URL` | Header "Login". |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, country code included. Used for the demo deep link and the footer. |
| `NEXT_PUBLIC_POSTHOG_KEY` | Analytics. Without it, no analytics script loads at all. |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingest host. |

## Structure

```
app/          routes, metadata, sitemap, robots, generated OG image
components/
  chrome/     Header, MobileMenu, Footer, StickyCta
  ui/         Button, Wordmark, YuktiMark, Heading, Section, JsonLd
  mock/       primitives for the illustrative product UI
  sections/   composed page sections
content/      all copy, as data — faq, features, plans, legal, nav, home
lib/          site constants, whatsapp deep link, analytics, JSON-LD, metadata
styles/       tokens.css (the palette) and reset.css
reference/    the original design export and the briefs. Read-only.
```

Four small client components: `MobileMenu`, `NavMenu`, `HeaderCta` and
`StickyCta`. Everything else is a server component and every route prerenders
static.

## Rules worth knowing before editing

**Colour.** `#B5642F` is a mark/decoration colour, `#6A3D18` is a text colour,
`#A1572A` is a fill colour. They are not interchangeable — each exists because
the others fail a contrast check in that role. `npm run check` fails the build
if a raw colour appears outside `styles/tokens.css`.

**Copper CTAs — one per viewport, enforced at runtime.** Every accent `Button`
is tagged `data-copper-cta`. `HeaderCta` observes all of them and shows the
header's copper button only while none is on screen, so it stays hidden over
the hero and reappears once you scroll past. Where a page's own layout would
put two coppers together — the pricing page's elevated Growth card sharing a
viewport with the closing CTA — the closing CTA steps down via
`signupVariant="primary"`. Everything else is charcoal.

**Copy lives in `content/`, not in components.** The FAQ in particular is the
single source for both the rendered accordion and the `FAQPage` structured
data — they cannot drift apart.

**Persona pages.** `/sellers` and `/buyers` name both sides of the
transaction. The nav labels say "For B2B sellers" and "For B2B buyers", which
deliberately breaks the brief's ban on "buyers" — "For your customers" gave no
clue whose customers were meant. Inside page bodies the copy still avoids the
word. `/customers` 308-redirects to `/buyers`; the product's login page still
links to the old path and should be repointed.

**Voice.** Short, active, concrete. Bold about the owner's growth, exact about
money and data. Never lead with "AI", "smart", "automate", "leverage". No
exclamation marks. The ceiling on finance claims is "your books stay clean" —
never "replace Tally", never "books keep themselves", never "error-free".

**The pilot figures on the home page are anonymised and must stay that way.**
The customer is not named anywhere, and there is deliberately no security/CCTV
industry page, because one would make them identifiable.

**Industry pages** are one template, five instances, driven from
`content/industries.ts` — adding one updates the nav, the home strip, the
footer and the sitemap automatically. Only Cosmetics has been validated against
a real customer conversation; the other four carry `validated: false`. If a
real conversation contradicts any of their pain copy, change that page before
it earns more traffic.

## Before launch

These are outstanding and are not code changes:

1. **Legal review.** `/legal/privacy` and `/legal/terms` are working drafts,
   render a visible warning, and are `noindex` + disallowed in robots.txt.
   Resolve the `[bracketed]` placeholders and get counsel's sign-off, then set
   `LEGAL_REVIEW_PENDING = false` in `content/legal.ts` and remove `/legal/`
   from `app/robots.ts` and add them to `app/sitemap.ts`.
2. **GST treatment on the Lite price.** Currently renders ₹5,000/month and
   ₹50,000/year with no GST line, because none was specified. One line in
   `content/plans.ts`.
3. **The liability cap** in terms §10 is still `[three (3) months]` — a
   commercial decision, not a detail to look up.
4. **Trademark filing** (classes 9/42/35) before the site is public.
5. **WhatsApp in-app browser test on a real Android device.** Verified here
   under 4G + 4× CPU throttle emulation, but the brief asks for a real device.
6. **Real product screenshots**, once the app's density pass ships. Every
   mockup is CSS today; swap them behind `components/mock/`.
