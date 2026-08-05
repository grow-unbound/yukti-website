# Rebuild notes

What changed moving from the Claude Design export to this project, and why.
Written so the decisions can be argued with later rather than rediscovered.

## What the audit actually found

The brief for this rebuild said the SEO layer was "entirely absent." It was
not. The export already had, on both its pages: a unique `<title>`, a meta
description, `rel="canonical"`, full Open Graph and `twitter:card` tags,
`<html lang="en-IN">`, exactly one `<h1>`, and valid `Organization` +
`FAQPage` JSON-LD with all seven questions. `Marketing-Site-Review_v1.md` is
stale on these points; `HANDOVER.md` reflects the newer state and is correct.

The real problems were different:

1. **Nothing server-rendered.** `support.js` fetches React 18 and Babel
   standalone from unpkg *at runtime*, hides the raw `<x-dc>` template and
   mounts client-side. With JS off — or unpkg slow, which is the 4G-inside-
   WhatsApp case the brief optimises for — the body was blank. Real meta tags,
   no crawlable content behind them.
2. **The OG images did not exist.** `/og/home-1200x630.png` and its pricing
   twin were referenced but never produced.
3. **CTA friction, worse than reported.** 18 CTAs pointed at an on-page `#cta`
   anchor. The five that did leave pointed at `https://useyukti.in` — the apex
   this site now occupies, so post-deploy they would have looped home.
4. **Three contrast failures**, measured rather than assumed.
5. **The design system bundle hardcoded a font it never loaded** (`Mukta`), so
   every CTA in the export rendered in the browser's default sans.

## Deliberate deviations from the export

The export is the source of truth for design and copy. These are the places
this build knowingly differs, and they should be visible rather than silent.

| Change | Why |
|---|---|
| CTA fill `#B5642F` → `#A1572A` | `#F8F6F2` on `#B5642F` measures **4.03:1** and fails AA. CTA labels run 13–15px/600, so the WCAG large-text exemption (18.66px bold / 24px) does not apply. `#A1572A` is **4.97:1** and is already the design system's accent-hover value, so this is not an invented colour. |
| Footer faint `#8b7f72` → `#9A8D7F` | **4.24:1** on charcoal at 10.5–12.5px, fails AA. Now 5.3:1. |
| Button labels render in Inter | The export renders them in the browser default sans because the bundle asks for Mukta and Mukta is never loaded. Reproducing that would be shipping a bug. |
| Header CTA is charcoal, not copper | The design system allows one copper CTA per viewport. The export avoided the clash by hiding the header button until the hero scrolled away — which meant gating a visible element on a scroll listener. Charcoal holds the rule with no JS and nothing popping in. |
| Manifesto `white-space: nowrap` dropped | It overflowed below ~400px, which is inside the primary viewport. |
| Pricing grid: 1, 2 or 4 columns | `auto-fit` gave three columns near 1024px and orphaned Scale onto its own row. The export avoided this with a nested grid of card pairs; explicit breakpoints get the same guarantee with less markup. |
| "₹ on request" set in Inter, not mono | The design system reserves mono for figures meant to be scanned. Set in mono it read as a number that had failed to load. |
| Industry cards are links or plain cards | The export styled all five as non-focusable `div`s with `cursor: pointer` and no handler, promising a click that did not exist. |

## Architecture decisions

**CSS Modules over a `--yk-*` token layer. Not Tailwind.** The design uses 15
discrete font sizes including 10.5/11.5/12.5/13.5px — chosen for mockup
density — and ~30 distinct `clamp()` expressions. None of that maps to a
constrained scale; Tailwind would have degraded into `text-[12.5px]`, an inline
style with a build step. The design system was already expressed as CSS custom
properties, so CSS Modules compose with it directly, cost zero runtime JS, and
give real `:focus-visible` — which the export had nowhere.

**The "~700 inline styles" was a false alarm.** 741 style attributes across the
two pages resolve to **13 unique hex colours** and ~40 repeated declaration
clusters. It was a deduplication job, not a transcription job. `styles/tokens.css`
holds the result and `npm run check:tokens` keeps it that way.

**No layout decision depends on JS.** The export gated its nav and sticky bar on
`window.matchMedia` held in React state, which would hydration-mismatch under
SSR and left the page navigation-less until JS ran. Both nav markups are now
server-rendered and swapped by one media query.

**FAQ rebuilt on `<details>`/`<summary>`.** The export hand-rolled a `div` with
`role="button"`, `tabIndex` and its own Enter/Space handler. Native disclosure
gets keyboard operation and expanded state right for free, works with JS off,
and removed a client component.

**Sticky CTA uses an IntersectionObserver sentinel, not a scroll listener.** One
callback that fires twice in the life of the page, which matters on the
mid-range Android this targets. Note the subtlety that bit once: "not
intersecting" is true both above *and* below the viewport, and the sentinel
starts below the fold — the check needs `boundingClientRect.top < 0` as well,
or the bar shows on load.

**Fonts self-hosted via `next/font`.** The export loaded Google Fonts twice (a
stylesheet link and a CSS `@import`), costing two extra DNS+TLS handshakes on
the critical path. Baloo 2 was kept rather than traced to an SVG path — that
plan existed to remove a third-party origin, and `next/font` already does that.

**OG image generated at build** via `next/og`, so it cannot go missing again.
Note that Next's file-based `opengraph-image` convention only reaches routes
that do not declare their own `openGraph` object, and every page here does (for
per-page `og:title`) — so `lib/metadata.ts` references the image explicitly.
Without that, only the homepage had a card.

## Verification performed

- All 15 routes prerender static; typecheck, lint and the token check pass.
- **JS disabled:** every route renders full content, one `<h1>`, correct
  heading hierarchy with no skipped levels.
- **Contrast:** computed from rendered pixels — every text node in
  `main`/`header`/`footer` on all 10 pages, with alpha and ancestor
  backgrounds composited, against the correct threshold for its size and
  weight. Zero failures.
- **Keyboard:** every visible interactive element on `/` and `/pricing` is
  reachable and has a visible focus ring; FAQ toggles with Enter; mobile menu
  opens, closes on Escape and returns focus to its trigger.
- **Links:** no 404s, no stale `#cta` anchors, no CTA pointing at this site's
  own origin, and the prefilled WhatsApp message survives encoding intact.
- **Network:** zero third-party requests. Nothing to `fonts.googleapis.com`,
  `fonts.gstatic.com` or `unpkg.com`.
- **Performance** (360px, 4G throttling, 4× CPU slowdown): LCP 928ms on home,
  616ms on pricing, 628ms on cosmetics. CLS 0 on all three. Well inside the
  2500ms / 0.1 targets.
- **Layout drift** against the frozen export baseline at 360/414/768/1024/
  1280/1440: home within 3%, pricing within 9%.
- The pilot customer is not named anywhere in the source or the build output.

The rendered export is frozen in `.baseline/` (gitignored; regenerate with
`scripts/baseline.mjs`). Worth keeping in mind that it can only be regenerated
while unpkg still serves the React and Babel builds `support.js` pins.
