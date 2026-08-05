import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { SITE_ORIGIN } from "@/lib/site";

/**
 * Every route here exists and is indexable. The two legal pages are omitted
 * on purpose — they are unreviewed drafts and carry noindex until counsel
 * signs off (see content/legal.ts).
 */
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  // Industry pages derive from content, so adding one cannot leave the
  // sitemap behind.
  ...industries.map((i) => ({
    path: `/industries/${i.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/integrations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/accountants", priority: 0.6, changeFrequency: "monthly" },
  { path: "/customers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_ORIGIN}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
