import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest, response: NextResponse) {

  return NextResponse.next()
}

export const config = {
  matcher: "/"
}