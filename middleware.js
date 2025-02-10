import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
  const session = await auth();
  const baseUrl = "http://localhost:3000/";
  const { nextUrl } = request;
  // const isAuthenticated = !!session?.user;
  const isAuthenticated = true;

  console.log("from middlewareeee");
  console.log("🚀 ~ nextUrl ~ nextUrl:", isAuthenticated);

  // if (request.url === baseUrl) return NextResponse.redirect(new URL("/login", nextUrl.origin));
  // if (!isAuthenticated) return NextResponse.redirect(new URL(nextUrl.origin));
  if (!isAuthenticated) return NextResponse.redirect(new URL("/login", baseUrl));

  if (isAuthenticated && request.url === baseUrl) {
    return NextResponse.redirect(new URL("/dashboard", baseUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
