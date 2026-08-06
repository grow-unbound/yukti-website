#!/usr/bin/env node
/**
 * End-to-end verification against a running production build.
 *
 * These are the checks this site is actually held to, and several of them have
 * caught real defects that a build passing cleanly would not have surfaced:
 * a drawer rendering above the viewport, two copper CTAs sharing a screen, an
 * OG image missing from every page but the homepage.
 *
 * Usage:
 *   npm run build && npx next start -p 3100 &
 *   npm run verify
 */
import { chromium } from "playwright-core";

const BASE = process.env.VERIFY_ORIGIN ?? "http://localhost:3100";
const ROUTES = [
  "/",
  "/pricing",
  "/how-it-works",
  "/integrations",
  "/accountants",
  "/buyers",
  "/sellers",
  "/about",
  "/industries/electricals",
  "/industries/mobiles-electronics",
  "/industries/automotive-spares",
  "/industries/hardware",
  "/industries/cosmetics",
  "/legal/privacy",
  "/legal/terms",
];

const failures = [];
const fail = (m) => {
  failures.push(m);
  console.log("    FAIL " + m);
};
const ok = (cond, label) =>
  console.log(`  ${cond ? "ok  " : "FAIL"} ${label}`);

const browser = await chromium.launch();

// ── 1. Server-rendered content: everything must work with JS disabled ───────
console.log("\n== JS disabled ==");
{
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: "load" });
    const m = await page.evaluate(() => {
      const levels = [
        ...document.querySelectorAll("main h1,main h2,main h3,main h4"),
      ].map((h) => Number(h.tagName[1]));
      let skip = null;
      for (let i = 1; i < levels.length; i++) {
        if (levels[i] - levels[i - 1] > 1) skip = `${levels[i - 1]}->${levels[i]}`;
      }
      return {
        chars: document.body.innerText.trim().length,
        h1: document.querySelectorAll("h1").length,
        skip,
        ld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(
          (s) => JSON.parse(s.textContent)["@type"]
        ),
        title: document.title,
        canonical: !!document.querySelector('link[rel="canonical"]'),
        ogImage: !!document.querySelector('meta[property="og:image"]'),
      };
    });
    const good =
      m.chars > 800 && m.h1 === 1 && !m.skip && m.title && m.canonical && m.ogImage;
    console.log(
      `  ${good ? "ok  " : "FAIL"} ${route.padEnd(32)} ${m.chars}c h1=${m.h1} ld=[${m.ld}]`
    );
    if (m.h1 !== 1) fail(`${route}: ${m.h1} <h1> elements`);
    if (m.skip) fail(`${route}: heading level skip ${m.skip}`);
    if (m.chars <= 800) fail(`${route}: only ${m.chars} chars without JS`);
    if (!m.canonical) fail(`${route}: no canonical`);
    if (!m.ogImage) fail(`${route}: no og:image`);
    await page.close();
  }
  await ctx.close();
}

// ── 2. Structured data on the home page ────────────────────────────────────
console.log("\n== Structured data ==");
{
  const page = await browser.newPage();
  await page.goto(BASE + "/", { waitUntil: "load" });
  const ld = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) =>
      JSON.parse(s.textContent)
    )
  );
  const types = ld.map((d) => d["@type"]);
  for (const want of ["Organization", "SoftwareApplication", "FAQPage"]) {
    ok(types.includes(want), `${want} present`);
    if (!types.includes(want)) fail(`${want} JSON-LD missing`);
  }
  const faq = ld.find((d) => d["@type"] === "FAQPage");
  ok(faq?.mainEntity?.length === 7, `FAQPage has 7 questions`);
  await page.close();
}

// ── 3. One copper CTA per viewport, sampled down each page ─────────────────
console.log("\n== One copper CTA per viewport ==");
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  for (const route of ["/", "/pricing", "/how-it-works", "/about", "/industries/hardware"]) {
    await page.goto(BASE + route, { waitUntil: "load" });
    await page.waitForTimeout(300);
    const height = await page.evaluate(() => document.body.scrollHeight);
    let worst = 0;
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((v) => window.scrollTo(0, v), y);
      await page.waitForTimeout(150);
      const n = await page.evaluate(() => {
        const copper = ["rgb(161, 87, 42)", "rgb(142, 76, 36)"];
        let c = 0;
        for (const el of document.querySelectorAll("a,button")) {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight || !r.width) continue;
          if (copper.includes(getComputedStyle(el).backgroundColor)) c++;
        }
        return c;
      });
      worst = Math.max(worst, n);
    }
    console.log(`  ${worst <= 1 ? "ok  " : "FAIL"} ${route.padEnd(32)} max ${worst}`);
    if (worst > 1) fail(`${route}: ${worst} copper CTAs share a viewport`);
  }
  await page.close();
}

// ── 4. Contrast, computed from what actually rendered ──────────────────────
console.log("\n== Contrast (rendered pixels, AA) ==");
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "load" });
    const bad = await page.evaluate(() => {
      const lin = (c) => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      const parse = (s) => (s.match(/[\d.]+/g) || []).map(Number);
      const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
      const over = (fg, a, bg) => fg.map((c, i) => c * a + bg[i] * (1 - a));
      const bgOf = (el) => {
        let node = el;
        let acc = null;
        while (node && node !== document.documentElement) {
          const c = parse(getComputedStyle(node).backgroundColor);
          const a = c.length === 4 ? c[3] : 1;
          if (a > 0) {
            const rgb = c.slice(0, 3);
            acc = acc ?? { rgb, a };
            if (a >= 0.999) return acc.a >= 0.999 ? acc.rgb : over(acc.rgb, acc.a, rgb);
          }
          node = node.parentElement;
        }
        return acc ? (acc.a >= 0.999 ? acc.rgb : over(acc.rgb, acc.a, [255, 255, 255])) : [255, 255, 255];
      };
      const out = new Map();
      for (const el of document.querySelectorAll("main *, header *, footer *")) {
        if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
        const cs = getComputedStyle(el);
        if (cs.visibility === "hidden" || cs.display === "none" || +cs.opacity === 0) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        const raw = parse(cs.color);
        const alpha = (raw.length === 4 ? raw[3] : 1) * (+cs.opacity || 1);
        const bg = bgOf(el);
        const fg = alpha >= 0.999 ? raw.slice(0, 3) : over(raw.slice(0, 3), alpha, bg);
        const L1 = lum(fg);
        const L2 = lum(bg);
        const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        const px = parseFloat(cs.fontSize);
        const weight = +cs.fontWeight || 400;
        // WCAG "large text": >=24px, or >=18.66px at 700+.
        const need = px >= 24 || (px >= 18.66 && weight >= 700) ? 3 : 4.5;
        if (ratio < need)
          out.set(`${cs.color}|${bg}|${px}|${weight}`, {
            ratio: Math.round(ratio * 100) / 100,
            need,
            px,
            weight,
            fg: cs.color,
          });
      }
      return [...out.values()];
    });
    console.log(`  ${bad.length ? "FAIL" : "ok  "} ${route.padEnd(32)} ${bad.length} failing pair(s)`);
    for (const b of bad)
      fail(`${route}: ${b.ratio} < ${b.need} — ${b.fg} at ${b.px}px/${b.weight}`);
    await page.close;
  }
  await page.close();
}

// ── 5. Links resolve; no stale on-page CTA anchors ─────────────────────────
console.log("\n== Links ==");
{
  const page = await browser.newPage();
  const internal = new Set();
  const all = new Set();
  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "load" });
    for (const h of await page.evaluate(() =>
      [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href"))
    )) {
      all.add(h);
      if (h?.startsWith("/")) internal.add(h.split("#")[0] || "/");
    }
  }
  for (const href of [...internal].sort()) {
    const res = await page.goto(BASE + href, { waitUntil: "load" });
    if (res.status() !== 200) fail(`internal link ${href} -> ${res.status()}`);
  }
  ok(true, `${internal.size} internal destinations all 200`);

  const stale = [...all].filter((h) => h === "#cta" || h === "#top");
  ok(stale.length === 0, "no stale on-page CTA anchors");
  if (stale.length) fail(`stale anchors: ${stale.join(", ")}`);

  const selfSignup = [...all].filter((h) => /^https:\/\/useyukti\.in\/?$/.test(h));
  ok(selfSignup.length === 0, "no CTA points at this site's own origin");
  if (selfSignup.length) fail("a CTA points at the marketing apex");

  ok([...all].some((h) => h === "/#faq"), "FAQ is linked from the nav");
  await page.close();
}

// ── 6. No third-party requests ─────────────────────────────────────────────
console.log("\n== Network ==");
{
  const page = await browser.newPage();
  const external = new Set();
  page.on("request", (r) => {
    const host = new URL(r.url()).hostname;
    if (!host.includes("localhost")) external.add(host);
  });
  await page.goto(BASE + "/", { waitUntil: "load" });
  await page.waitForTimeout(1500);
  ok(external.size === 0, `third-party requests: ${[...external].join(", ") || "none"}`);
  if (external.size) fail(`third-party requests: ${[...external].join(", ")}`);
  await page.close();
}

await browser.close();

console.log("\n" + "=".repeat(60));
if (failures.length) {
  console.log(`${failures.length} FAILURE(S)`);
  failures.forEach((f) => console.log("  - " + f));
  process.exit(1);
}
console.log("All verification checks passed.");
