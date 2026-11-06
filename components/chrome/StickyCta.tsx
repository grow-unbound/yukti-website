"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TALK_EVENT, talkUrl } from "@/lib/site";
import s from "./StickyCta.module.css";

/**
 * Mobile bottom CTA bar. One action: Talk to us.
 *
 * Watches a zero-height sentinel with one IntersectionObserver. "Not
 * intersecting" is true both above and below the viewport and the sentinel
 * starts below the fold, so the bar appears only once the hero has scrolled
 * off the TOP. Server renders hidden; the client only adds the visible class.
 */
export function StickyCta() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
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
        href={talkUrl("sticky-bar")}
        variant="accent"
        size="md"
        block
        event={TALK_EVENT}
      >
        Talk to us
      </Button>
    </div>
  );
}
