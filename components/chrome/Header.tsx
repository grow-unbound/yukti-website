import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { mainNav, navGroups } from "@/content/nav";
import { DEALER_LOGIN_URL, SELLER_LOGIN_URL } from "@/lib/site";
import { HeaderCta } from "./HeaderCta";
import { MobileMenu } from "./MobileMenu";
import { NavMenu } from "./NavMenu";
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
          {navGroups.map((group) => (
            <NavMenu
              key={group.label}
              group={group}
              active={
                group.label === "Industries" && current === "/industries"
              }
            />
          ))}
        </nav>

        <div className={s.actions}>
          <Button
            href={SELLER_LOGIN_URL}
            variant="outline"
            size="sm"
            className={s.login}
            event="site_login_seller_click"
          >
            Login as Seller
          </Button>
          <Button
            href={DEALER_LOGIN_URL}
            variant="outline"
            size="sm"
            className={s.login}
            event="site_login_dealer_click"
          >
            Login as Dealer
          </Button>
          <HeaderCta />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
