"use client";

import { useEffect, useRef } from "react";

/**
 * A figure that counts up the first time it scrolls into view.
 *
 * The server renders the real value, so no-script visitors, crawlers and the
 * print view all read the true number. After hydration, only a figure that is
 * still off-screen is rewound to zero, so nothing visibly flashes. The final
 * text is always the exact original string.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const m = /^(\D*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
    if (!el || !m) return;
    const [, prefix, digits, suffix] = m as unknown as [string, string, string, string];
    const target = Number(digits);
    if (!target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already seen

    const decimals = digits.includes(".") ? digits.split(".")[1]!.length : 0;
    const show = (n: number) => {
      el.textContent = `${prefix}${n.toFixed(decimals)}${suffix}`;
    };
    show(0);

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const DURATION = 900;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          if (t < 1) {
            show(target * eased);
            raf = requestAnimationFrame(tick);
          } else {
            el.textContent = value;
          }
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value]);

  return <span ref={ref}>{value}</span>;
}
