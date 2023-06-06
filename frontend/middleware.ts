import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('accessToken')?.value;
  if (cookie === undefined) {
    return NextResponse.redirect("http://localhost:5000/login");
  }
}

export const config = {
  matcher: ["/"],
};