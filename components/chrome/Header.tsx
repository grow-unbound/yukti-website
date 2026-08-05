import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { mainNav } from "@/content/nav";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import s from "./Header.module.css";

export function Header({ current }: { current?: string }) {
  return (
    <header className={s.header}>
      <div className={s.bar}>
        <Wordmark size={24} />

        <nav className={s.desktopNav} aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${s.navLink} ${current === item.href ? s.navLinkActive : ""}`}
              aria-current={current === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={s.actions}>
          <a href={LOGIN_URL} className={s.login}>
            Login
          </a>
          {/* Charcoal, not copper. The design system allows at most one copper
              CTA per viewport, and the hero's is already copper — the export
              avoided the clash by hiding this button until the hero scrolled
              away, which meant gating a visible element on a scroll listener.
              Making it charcoal holds the rule with no JS and no popping in. */}
          <Button
            href={SIGNUP_URL}
            variant="primary"
            size="sm"
            event="site_signup_click"
            className={s.headerCta}
          >
            Use Yukti now
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
