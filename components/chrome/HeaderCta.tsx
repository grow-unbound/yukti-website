"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SIGNUP_URL } from "@/lib/site";
import s from "./HeaderCta.module.css";

/**
 * The header's copper "Use Yukti now".
 *
 * The design system allows at most one copper CTA per viewport. This one would
 * otherwise sit alongside the hero's. The design export solved that by hiding
 * this button until the hero scrolled away, driven by a scroll listener and a
 * hard-coded 0.65 × viewport threshold.
 *
 * This watches the actual copper CTAs instead of a proxy for where one of them
 * happens to be. Every accent Button carries data-copper-cta; this observes all
 * of them and shows itself only while none is on screen. That is the rule
 * stated directly, so it holds on pages the export never had — the pricing
 * page's elevated Growth card, and the closing CTA at the foot of every page,
 * both of which a sentinel placed by hand got wrong.
 *
 * Rendered hidden on the server and revealed by the client, so no hydration
 * mismatch. The wrapper collapses entirely when hidden, keeping the button out
 * of the tab order rather than leaving an invisible focus stop in the header.
 */
export function HeaderCta() {
  const [show, setShow] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const others = [
      ...document.querySelectorAll<HTMLElement>("[data-copper-cta]"),
    ].filter((el) => !wrapRef.current?.contains(el));

    if (others.length === 0) {
      setShow(true);
      return;
    }

    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setShow(visible.size === 0);
    });

    others.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <span ref={wrapRef} className={`${s.wrap} ${show ? s.show : ""}`}>
      <Button
        href={SIGNUP_URL}
        variant="accent"
        size="sm"
        event="site_signup_click"
      >
        Use Yukti now
      </Button>
    </span>
  );
}
