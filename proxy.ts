import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REGION_COOKIE, isRegion, regionFromCountry } from "@/lib/region";

/**
 * Serves the right pricing variant at /pricing.
 *
 * The three variants are static pages; this only picks which one. That keeps
 * every response CDN-cacheable and JS-free, where reading headers inside the
 * page would have made the route dynamic and cost TTFB.
 *
 * Precedence: the visitor's saved choice, then (outside production only) a
 * ?region= override for testing, then the edge geo header, then rest of world.
 */
export function proxy(request: NextRequest) {
  const saved = request.cookies.get(REGION_COOKIE)?.value;
  const dev =
    process.env.VERCEL_ENV !== "production"
      ? request.nextUrl.searchParams.get("region")
      : null;

  const region = isRegion(dev)
    ? dev
    : isRegion(saved)
      ? saved
      : regionFromCountry(request.headers.get("x-vercel-ip-country"));

  const url = request.nextUrl.clone();
  url.pathname = `/pricing/${region}`;
  url.search = "";
  const response = NextResponse.rewrite(url);
  response.headers.set("Vary", "Cookie, x-vercel-ip-country");
  return response;
}

export const config = {
  matcher: "/pricing",
};
