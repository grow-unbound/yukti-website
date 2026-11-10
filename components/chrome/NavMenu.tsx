"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavGroup } from "@/content/nav";
import s from "./NavMenu.module.css";

/**
 * A desktop nav popover.
 *
 * A real button + panel, so it stays reachable by keyboard and touch, with
 * hover added on top for mouse users: a mouse pointer entering the menu opens
 * it, and leaving closes it after a short grace period so the pointer can
 * cross the gap to the panel. Click still toggles (touch, keyboard), Escape
 * and outside click close, and focus returns to the trigger on Escape.
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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const hoverOpen = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    setOpen(true);
  };
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };
  useEffect(() => cancelClose, []);

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
    <div
      className={s.wrap}
      ref={wrapRef}
      onPointerEnter={hoverOpen}
      onPointerLeave={hoverClose}
    >
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

      <div
        id={panelId}
        className={`${s.panel} ${group.sections.length > 1 ? s.panelWide : ""}`}
        hidden={!open}
      >
        <div className={s.cols}>
          {group.sections.map((sec, i) => (
            <div key={sec.heading ?? i} className={s.col}>
              {sec.heading ? <p className={s.heading}>{sec.heading}</p> : null}
              <ul className={s.list}>
                {sec.items.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
