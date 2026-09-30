/**
 * Regions the price list is quoted in.
 *
 * Three, not a country list: India, the EU, and everywhere else. Detection
 * uses the country header Vercel adds at the edge; the visitor can override
 * it, and the override wins (a buyer travelling, or a VPN, should not be
 * stuck with the wrong currency).
 */

export type Region = "in" | "eu" | "row";

export const REGIONS: Region[] = ["in", "eu", "row"];

export const REGION_COOKIE = "yk_region";

export const REGION_LABEL: Record<Region, string> = {
  in: "India",
  eu: "Europe",
  row: "Rest of world",
};

export const isRegion = (value: unknown): value is Region =>
  typeof value === "string" && (REGIONS as string[]).includes(value);

/** EU member states, plus the EEA, UK and Switzerland, which quote in euros. */
const EURO_QUOTED = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "CH", "GB",
]);

export function regionFromCountry(country: string | null | undefined): Region {
  const cc = country?.toUpperCase();
  if (cc === "IN") return "in";
  if (cc && EURO_QUOTED.has(cc)) return "eu";
  return "row";
}
