import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

/**
 * Every button on this site is a link — there are no forms and no in-page
 * actions. Internal destinations render as next/link; external ones (signup,
 * WhatsApp) render as a plain anchor, because prefetching a cross-origin URL
 * does nothing useful.
 *
 * Rebuilt rather than ported from the design system bundle, which had three
 * problems worth not inheriting: it hardcoded a font that is never loaded
 * (so every CTA rendered in the browser's default sans), it drove hover and
 * press from mouse-only React state, and it wrapped its <button> in an <a>,
 * nesting two interactive elements.
 */

export type ButtonVariant = "accent" | "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  /** PostHog event name, fired on click. */
  event?: string;
  className?: string;
};

const isExternal = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  block = false,
  event,
  className,
}: Props) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    block ? styles.block : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // data-yk-event is picked up by a single delegated listener in
  // lib/analytics.ts, so no button needs to be a client component.
  const analytics = event ? { "data-yk-event": event } : {};

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={cls}
        {...analytics}
        {...(href.startsWith("https://wa.me/")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...analytics}>
      {children}
    </Link>
  );
}
