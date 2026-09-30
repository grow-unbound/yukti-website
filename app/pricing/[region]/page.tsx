import { notFound } from "next/navigation";
import { REGIONS, isRegion } from "@/lib/region";
import { PricingView, pricingMetadata } from "../_view";

/**
 * Three static variants of the price list. proxy.ts rewrites /pricing to the
 * right one; the canonical URL stays /pricing so they do not compete in search.
 */
export function generateStaticParams() {
  return REGIONS.map((region) => ({ region }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  return isRegion(region) ? pricingMetadata(region) : {};
}

export default async function PricingRegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  if (!isRegion(region)) notFound();
  return <PricingView region={region} />;
}
