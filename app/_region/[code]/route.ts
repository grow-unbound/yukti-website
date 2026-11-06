import { NextResponse } from "next/server";
import { REGION_COOKIE, isRegion } from "@/lib/region";

/**
 * Saves the visitor's region choice and returns them to pricing. A route
 * handler rather than client JS: the switcher is plain links, so it works
 * without scripts and adds nothing to the main thread.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const response = NextResponse.redirect(new URL("/pricing", request.url));
  if (isRegion(code)) {
    response.cookies.set(REGION_COOKIE, code, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return response;
}
