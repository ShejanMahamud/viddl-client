import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isVerified = req.cookies.get('verified')?.value === 'true';
  const isVerifyPage = req.nextUrl.pathname.startsWith('/verify');

  if (!isVerified && !isVerifyPage) {
    return NextResponse.redirect(new URL('/verify', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|verify).*)',
  ],
};
