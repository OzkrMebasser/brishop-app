import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isProtected =
    request.nextUrl.pathname.startsWith("/total-ventas") ||
    request.nextUrl.pathname.startsWith("/inventario");

  if (isProtected) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (token.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.redirect(new URL("/no-autorizado", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/total-ventas/:path*", "/inventario/:path*"],
};