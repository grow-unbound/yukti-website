"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DEMO_URL } from "@/lib/whatsapp";
import { SIGNUP_URL } from "@/lib/site";
import s from "./StickyCta.module.css";

/**
 * Mobile bottom CTA bar, per the brief's mobile-first rules.
 *
 * The export drove this from a scroll listener recomputing
 * `scrollY > innerHeight * 0.65` on every frame. This watches a zero-height
 * sentinel instead: one IntersectionObserver callback that fires twice in the
 * life of the page, which matters on the mid-range Android this is designed
 * for. Visibility is also gated by a media query, so the bar cannot appear on
 * desktop even if the observer fires.
 *
 * Server renders hidden; the client only ever adds the visible class.
 */
export function StickyCta() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        // "Not intersecting" is true both above and below the viewport, and
        // the sentinel starts below the fold — checking that alone showed the
        // bar immediately on load. It must appear only once the hero has
        // scrolled off the TOP.
        setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { rootMargin: "0px" }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${s.bar} ${past ? s.visible : ""}`} aria-hidden={!past}>
      <Button
        href={SIGNUP_URL}
        variant="accent"
        size="md"
        block
        event="site_signup_click"
      >
        Use Yukti now
      </Button>
      <Button
        href={DEMO_URL}
        variant="secondary"
        size="md"
        block
        event="site_demo_click"
      >
        Book a demo
      </Button>
    </div>
  );
}
