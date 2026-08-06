#!/usr/bin/env node
/**
 * Guards the token layer.
 *
 * The design export hardcoded every colour as a literal — #64594E appeared 104
 * times, #EAE3D9 82 times — while a design system defining those exact values
 * as custom properties sat unused next to it. This check is what stops that
 * happening again as pages multiply: no raw colour outside styles/tokens.css.
 *
 * Exceptions are narrow and each has a reason.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;

const SCAN = ["app", "components", "styles", "lib", "content"];

const ALLOWED = new Set([
  // The mark's own palette, not the site theme.
  "components/ui/YuktiMark.tsx",
  // The single source of truth for colour.
  "styles/tokens.css",
  // Rendered by satori at build time, which cannot resolve CSS custom
  // properties — these have to inline their values.
  "app/opengraph-image.tsx",
  "app/apple-icon.tsx",
  // viewport.themeColor is consumed by the browser chrome, not the page, so
  // it cannot be a var(). Must stay equal to --yk-card.
  "app/layout.tsx",
]);

const COLOR = /#[0-9a-fA-F]{3,8}\b|\brgba?\(/g;

let failures = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(css|tsx|ts)$/.test(entry)) continue;

    const rel = relative(ROOT, full);
    if (ALLOWED.has(rel)) continue;

    // Comments routinely name the literal a token replaced, and that
    // documentation is the point — blank them out before scanning, keeping
    // line numbers intact so reported positions stay accurate.
    const src = readFileSync(full, "utf8").replace(/\/\*[\s\S]*?\*\//g, (m) =>
      m.replace(/[^\n]/g, " ")
    );

    src.split("\n").forEach((line, i) => {
      const stripped = line.replace(/\/\/.*$/, "");
      const hits = stripped.match(COLOR);
      if (hits) {
        failures++;
        console.error(`${rel}:${i + 1}  raw colour ${hits.join(", ")}`);
        console.error(`    ${line.trim()}`);
      }
    });
  }
}

for (const dir of SCAN) walk(join(ROOT, dir));

if (failures) {
  console.error(
    `\n${failures} raw colour value(s) outside the token layer.\n` +
      `Add a token in styles/tokens.css and reference it, or justify an entry in ALLOWED.`
  );
  process.exit(1);
}

console.log("Token check passed: no raw colours outside the token layer.");
