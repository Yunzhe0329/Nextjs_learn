import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname;
  // // Handle root path 沒有輸入會導向 en 英文版網站
  // if (pathname === "/") {
  //   return NextResponse.redirect(new URL("/en", request.url));
  // }
  // Check if the user is authenticated
  // If not authenticated, redirect to the verify page
  //   const cookieStore = await cookies();
  //   const accessToken = cookieStore.get("token")?.value;
  //   if (!accessToken) {
  //     return NextResponse.redirect(new URL(`/en/verify`, request.url));
  //   }
  //   return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
