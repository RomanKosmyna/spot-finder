import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get('accessToken')?.value;
  console.log(cookie);
  console.log(request.cookies.has("accessToken"));
}

// export const config = {
//   matcher: ["/", "/venue/:id", "/profile"],
// };