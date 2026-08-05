"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavGroup } from "@/content/nav";
import s from "./NavMenu.module.css";

/**
 * A desktop nav popover.
 *
 * Deliberately a real button + panel rather than a CSS hover menu: hover-only
 * menus are unreachable by keyboard and unusable on touch, and this site's
 * primary viewport is a phone. Opens on click, closes on Escape, on outside
 * click, and on navigating — with focus returned to the trigger on Escape.
 *
 * The panel stays in the DOM and is toggled with `hidden`, so its links are
 * still crawlable and present without JS.
 */
export function NavMenu({
  group,
  active = false,
}: {
  group: NavGroup;
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    // Close when focus leaves the menu entirely, so tabbing past it tidies up.
    const onFocus = (e: FocusEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("focusin", onFocus);
    };
  }, [open]);

  return (
    <div className={s.wrap} ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`${s.trigger} ${active ? s.active : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label}
        <span className={s.chevron} aria-hidden="true" />
      </button>

      <div id={panelId} className={s.panel} hidden={!open}>
        <ul className={s.list}>
          {group.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={s.item}
                onClick={() => setOpen(false)}
              >
                <span className={s.itemLabel}>{item.label}</span>
                {item.note ? (
                  <span className={s.itemNote}>{item.note}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
