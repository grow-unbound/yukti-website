import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Unreviewed legal drafts. They also carry a noindex meta tag; this is
      // belt and braces until counsel signs off.
      disallow: ["/legal/", "/region/", "/pricing/"],
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
