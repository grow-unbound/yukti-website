"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, mobileExtraNav } from "@/content/nav";
import s from "./MobileMenu.module.css";

/**
 * The only stateful part of the header, and one of two client components on
 * the site. It owns a single boolean.
 *
 * Server renders closed, client hydrates closed — no mismatch. The panel is
 * always in the DOM and toggled with `hidden`, so navigation exists before JS
 * runs and layout is never decided in JS.
 *
 * The export's version had none of the following: aria-expanded, aria-controls,
 * Escape to close, or focus returning to the trigger on close.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={s.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={s.bar} />
        <span className={s.bar} />
        <span className={s.bar} />
      </button>

      <nav id={panelId} className={s.panel} hidden={!open} aria-label="Main">
        {[...mainNav, ...mobileExtraNav].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={s.link}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
