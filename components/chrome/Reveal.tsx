"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll reveal, once per element.
 *
 * Every section below the hero fades up as it enters the viewport. Nothing is
 * hidden in the server HTML: elements are only marked "pending" after
 * hydration, and only if they are below the fold, so a no-script visitor, a
 * crawler and the first paint all see full content. Only opacity and transform
 * change, so layout never shifts. Reduced-motion visitors get no animation.
 *
 * Targets are found structurally rather than tagged one by one, so pages added
 * later animate consistently: for each top-level section, single-child wrappers
 * are unwrapped, then each child is one target, except lists and grids of three
 * or more, whose items animate individually with a short stagger.
 *
 * Opt out with data-no-reveal. Opt in a specific element with data-reveal.
 */

const STAGGER_MS = 70;
const MAX_STAGGER = 4;
const SETTLE_MS = 1000;

function isCollection(el: Element): boolean {
  const n = el.children.length;
  if (n < 2) return false;
  if (el.tagName === "UL" || el.tagName === "OL") return true;
  if (n < 3) return false;
  const display = getComputedStyle(el).display;
  return display === "grid" || display === "flex";
}

function targetsIn(section: Element): Element[] {
  let container: Element = section;
  for (let depth = 0; depth < 3 && container.children.length === 1; depth++) {
    container = container.children[0]!;
  }
  const out: Element[] = [];
  for (const child of Array.from(container.children)) {
    if (child.hasAttribute("data-no-reveal")) continue;
    if (child.getBoundingClientRect().height === 0) continue;
    if (isCollection(child)) out.push(...Array.from(child.children));
    else out.push(child);
  }
  return out;
}

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.getElementById("main");
    if (!main) return;

    const sections = main.querySelectorAll(
      ":scope > section:not(#top), :scope > div > section"
    );
    const targets = new Set<Element>(main.querySelectorAll("[data-reveal]"));
    sections.forEach((s) => {
      if (s.hasAttribute("data-no-reveal")) return;
      targetsIn(s).forEach((t) => targets.add(t));
    });

    const fold = window.innerHeight - 40;
    const pending: Element[] = [];
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) return; // already on screen
      el.setAttribute("data-reveal-state", "pending");
      pending.push(el);
    });
    if (pending.length === 0) return;

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target)
          .sort((a, b) =>
            a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
          );
        visible.forEach((el, i) => {
          io.unobserve(el);
          (el as HTMLElement).style.transitionDelay = `${
            Math.min(i, MAX_STAGGER) * STAGGER_MS
          }ms`;
          el.setAttribute("data-reveal-state", "in");
          // Hand the element back to its own styles (hover lifts and so on).
          timers.push(
            window.setTimeout(() => {
              el.removeAttribute("data-reveal-state");
              (el as HTMLElement).style.transitionDelay = "";
            }, SETTLE_MS)
          );
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    pending.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      // Never leave anything hidden if we are torn down mid-flight.
      pending.forEach((el) => {
        el.removeAttribute("data-reveal-state");
        (el as HTMLElement).style.transitionDelay = "";
      });
    };
  }, [pathname]);

  return null;
}
