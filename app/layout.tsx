import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/chrome/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationLd } from "@/lib/jsonld";
import { POSTHOG_HOST, POSTHOG_KEY, analyticsBootstrap } from "@/lib/analytics";
import { SITE_ORIGIN } from "@/lib/site";
import { baloo, inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Yukti — WhatsApp campaigns, rates & orders for distributors",
    template: "%s · Yukti",
  },
  description:
    "Yukti is the operating layer for Indian distributors: publish campaigns, reach every customer on WhatsApp, and take orders in an app they'll actually use.",
  applicationName: "Yukti",
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: "#FCFBF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${jetbrainsMono.variable} ${baloo.variable}`}
    >
      <body>
        <a href="#main" className="skipLink">
          Skip to content
        </a>
        {children}
        <Footer />
        <JsonLd data={organizationLd()} />

        {POSTHOG_KEY ? (
          <>
            <Script id="posthog" strategy="afterInteractive">
              {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture identify alias people set set_once register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset group".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init(${JSON.stringify(
                POSTHOG_KEY
              )},{api_host:${JSON.stringify(
                POSTHOG_HOST
              )},capture_pageview:true,persistence:'localStorage+cookie'});`}
            </Script>
            <Script id="yk-analytics" strategy="afterInteractive">
              {analyticsBootstrap}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
