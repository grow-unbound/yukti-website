"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, navGroups } from "@/content/nav";
import { LOGIN_URL } from "@/lib/site";
import s from "./MobileMenu.module.css";

/**
 * The mobile drawer. Owns a single boolean.
 *
 * Server renders closed, client hydrates closed — no mismatch. The panel is
 * always in the DOM and toggled with `hidden`, so navigation exists before JS
 * runs and layout is never decided in JS.
 *
 * Groups are flattened into labelled sections rather than nested accordions:
 * on a phone, a second level of tapping to reach an industry page is friction
 * for no gain, and the whole list still fits one scroll.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    // Tapping the page behind the drawer closes it. The trigger is excluded
    // because it owns its own toggle — closing here as well would run both and
    // leave a tap on the hamburger doing nothing while the menu is open.
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

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

      <nav
        ref={panelRef}
        id={panelId}
        className={s.panel}
        hidden={!open}
        aria-label="Main"
      >
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={s.link}
            onClick={close}
          >
            {item.label}
          </Link>
        ))}

        {navGroups.map((group) => (
          <div key={group.label} className={s.group}>
            <p className={s.groupLabel}>{group.label}</p>
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={s.link}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        <div className={s.group}>
          <a
            href={LOGIN_URL}
            className={s.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}
