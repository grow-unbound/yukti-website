import { notFound } from "next/navigation";
import { REGIONS, isRegion } from "@/lib/region";
import { HomeView, homeMetadata } from "../_view";

/**
 * Three static variants of the home page. They differ only where the copy
 * quotes a price (the FAQ). proxy.ts rewrites / to the right one; the
 * canonical URL stays / so they do not compete in search.
 */
export function generateStaticParams() {
  return REGIONS.map((region) => ({ region }));
}

export const dynamicParams = false;

export const metadata = homeMetadata;

export default async function HomeRegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  if (!isRegion(region)) notFound();
  return <HomeView region={region} />;
}
