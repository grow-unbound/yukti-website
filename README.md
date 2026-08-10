# Yukti marketing site

The public site at **useyukti.in**. A standalone Next.js project, deployed as
its own Vercel project. It is not coupled to the product app in any way —
`app.useyukti.in` is deployed separately, and this repo has no Supabase, no
auth, and no shared code with it.

Rebuilt from a Claude Design export, kept locally in `reference/design-export/`
(gitignored), which remains the source of truth for visual design and copy. See `docs/BUILD-NOTES.md` for
what changed in the rebuild and why.

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (all routes prerender static)
npm run check        # typecheck + lint + token discipline
npm run verify       # end-to-end checks against a running build (see below)
```

`npm run verify` needs a production build being served:

```bash
npm run build && npx next start -p 3100 &
npm run verify
```

It checks what a passing build does not: that every route renders fully with
JavaScript disabled, that the three JSON-LD graphs are in the initial HTML,
that no two copper CTAs share a viewport, that every text pair clears WCAG AA
computed from rendered pixels, that no link 404s, and that the page makes zero
third-party requests.

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
```

`reference/` holds the original Claude Design export and the source briefs. It
is gitignored — this repo is public and the briefs are not. Keep a local copy:
`scripts/baseline.mjs` and parts of `docs/BUILD-NOTES.md` refer to it.

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

**Two h1 tiers, and no page invents a third.** `h1` is the home hero, `h1sm`
is every interior page title. Where a title needs more room, widen the *column*
(`PageHero`'s `width` prop) rather than shrinking the type — sizing a font to
fit one particular string is how this briefly ended up with four near-identical
variants. Headlines are written to the scale, not the scale to the headline,
and a hero wrapping to two or three lines is normal rather than a defect.

**Voice.** Short, active, concrete. Bold about the owner's growth, exact about
money and data. Never lead with "AI", "smart", "automate", "leverage". No
exclamation marks. The ceiling on finance claims is "your books stay clean" —
never "replace Tally", never "books keep themselves", never "error-free".

**Pilot figures are approved and live**, in `content/home.ts` as `pilot` with
the claim rules alongside them. Three hold: the customer is never named or
located, nothing is restated beyond what the figures say (no run rates, no
projecting them onto a prospect), and there is deliberately no security/CCTV
industry page because one would make them identifiable. The hours figure is
calculated rather than counted, so its assumption is printed on the card.

**Industry pages** are one template, five instances, driven from
`content/industries.ts` — adding one updates the nav, the home strip, the
footer and the sitemap automatically. Only Cosmetics has been validated against
a real customer conversation; the other four carry `validated: false`. If a
real conversation contradicts any of their pain copy, change that page before
it earns more traffic.

## Before launch

These are outstanding and are not code changes:

1. **Legal pages are still `noindex`** and `/legal/` is disallowed in
   robots.txt. The on-page pre-review banner has been removed, but that did not
   change indexing. To make them findable: drop `noIndex` from the two page
   metadata blocks, remove `/legal/` from `app/robots.ts`, and add both routes
   to `app/sitemap.ts`.
2. **Terms §10 still reads `[three (3) months]`.** The liability cap is a
   commercial decision. With the banner gone there is nothing on the page
   explaining the brackets, so this now reads as a defect to a visitor — settle
   the number and unbracket it in `content/legal.ts`.
3. **GST treatment on the Lite price.** Currently renders ₹5,000/month and
   ₹50,000/year with no GST line, because none was specified. One line in
   `content/plans.ts`.
4. **Trademark filing** (classes 9/42/35) before the site is public.
5. **WhatsApp in-app browser test on a real Android device.** Verified here
   under 4G + 4× CPU throttle emulation, but the brief asks for a real device.
6. **Real product screenshots**, once the app's density pass ships. Every
   mockup is CSS today; swap them behind `components/mock/`.
