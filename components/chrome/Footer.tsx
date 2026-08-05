import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { footerNav } from "@/content/nav";
import { WHATSAPP_DISPLAY } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import s from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>
          <Wordmark tone="onDark" size={22} />
          <p className={s.tagline}>
            Made in India. Built for businesses that sell to businesses.
          </p>
          <a
            href={WHATSAPP_URL}
            className={s.whatsapp}
            data-yk-event="site_whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.whatsappLabel}>WhatsApp</span>
            <span className={s.whatsappNumber}>{WHATSAPP_DISPLAY}</span>
          </a>
        </div>

        <div className={s.columns}>
          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className={s.heading}>{col.heading}</h2>
              <ul className={s.list}>
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={s.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className={s.meta}>
        <span>© {year} Yukti</span>
        <span>Yukti is not accounting software. Your books stay where they are.</span>
      </div>
    </footer>
  );
}
