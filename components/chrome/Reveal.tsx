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

// Trigger line, as a fraction of the viewport height measured from the top.
// An element reveals once its top has travelled above this line. Set low on
// the screen (85%) so nothing sits blank in view: the usual range in scroll
// libraries is 80 to 90% (AOS, ScrollTrigger), and going lower reads as content
// failing to load.
const TRIGGER = 0.85;
const STAGGER_MS = 110;
const MAX_STAGGER = 4;
const SETTLE_MS = 1500;

function isCollection(el: Element): boolean {
  const n = el.children.length;
  if (n < 2) return false;
  if (el.tagName === "UL" || el.tagName === "OL") return true;
  // A run of disclosure rows (the FAQ) is a list even though it is a plain div.
  if (n >= 3 && Array.from(el.children).every((c) => c.tagName === "DETAILS")) {
    return true;
  }
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

    const fold = window.innerHeight * TRIGGER;
    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const pending: Element[] = [];
    targets.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < fold) return; // already inside the viewport
      // Near the foot of a short page the trigger line can never be reached by
      // scrolling. Leave those visible rather than hiding them for good.
      if (top - maxScroll >= fold) return;
      el.setAttribute("data-reveal-state", "pending");
      pending.push(el);
    });
    if (pending.length === 0) return;

    const timers: number[] = [];
    const remaining = new Set<Element>(pending);

    const show = (el: Element, delay: number) => {
      if (!remaining.delete(el)) return;
      io.unobserve(el);
      (el as HTMLElement).style.transitionDelay = `${delay}ms`;
      el.setAttribute("data-reveal-state", "in");
      // Hand the element back to its own styles (hover lifts and so on).
      timers.push(
        window.setTimeout(() => {
          el.removeAttribute("data-reveal-state");
          (el as HTMLElement).style.transitionDelay = "";
        }, SETTLE_MS)
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target)
          .sort((a, b) =>
            a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
          )
          .forEach((el, i) => show(el, Math.min(i, MAX_STAGGER) * STAGGER_MS));
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.05 }
    );

    // A jump (an anchor link, a fling, the End key) can carry the reader past
    // elements without the observer ever seeing them on screen. Anything left
    // wholly above the viewport is shown at once, so scrolling back up never
    // finds blank sections.
    let raf = 0;
    const sweep = () => {
      raf = 0;
      remaining.forEach((el) => {
        if (el.getBoundingClientRect().bottom < 0) show(el, 0);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    pending.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
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
