import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export function middleware(request) {
  try {
    const host = request.headers.get("host") || "";
    const preferred = new URL(siteConfig.url).host;

    if (host && host !== preferred) {
      const url = request.nextUrl.clone();
      url.hostname = preferred;
      url.protocol = "https";
      return NextResponse.redirect(url, 301);
    }
  } catch (e) {
    // fallback: do nothing
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
