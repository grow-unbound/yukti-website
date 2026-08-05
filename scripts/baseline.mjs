#!/usr/bin/env node
/**
 * Freeze the design export's rendered output as a visual-diff reference.
 *
 * Time-sensitive, and worth understanding before relying on it: the export in
 * reference/design-export is not static HTML. Its runtime fetches React 18 and
 * Babel standalone from unpkg at page load and compiles the template in the
 * browser. This baseline can therefore only be regenerated while unpkg still
 * serves those exact builds. Treat .baseline/ as expensive to lose.
 *
 * Usage:
 *   npm i -D playwright-core && npx playwright install chromium   # once
 *   python3 -m http.server 8899 &                                 # from repo root
 *   npm run baseline
 */
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../.baseline", import.meta.url).pathname;
const BASE = process.env.BASELINE_ORIGIN ?? "http://localhost:8899";
const ROOT = "reference/design-export";

const PAGES = [
  ["home", `${ROOT}/Home.dc.html`],
  ["pricing", `${ROOT}/Pricing.dc.html`],
];
const WIDTHS = [360, 414, 768, 1024, 1280, 1440];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

for (const [name, file] of PAGES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${BASE}/${file}`, { waitUntil: "networkidle" });
    // The runtime mounts asynchronously, after Babel compiles the template.
    await page.waitForFunction(
      () => document.querySelector("#dc-root")?.children.length > 0,
      null,
      { timeout: 30000 }
    );
    await page.waitForTimeout(600);
    const height = await page.evaluate(() => document.body.scrollHeight);
    await page.screenshot({
      path: join(OUT, `${name}-${width}.png`),
      fullPage: true,
    });
    console.log(`${name}-${width}  height=${height}`);
    await page.close();
  }
}

await browser.close();
