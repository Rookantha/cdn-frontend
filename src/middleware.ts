import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to protected routes only
export const config = {
  matcher: ["/dashboard/:path*"],
};
