import { validateTurnstileToken } from 'next-turnstile';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const result = await validateTurnstileToken({
    token,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
  });

  if (result.success) {
    const response = NextResponse.json({ success: true });
    response.headers.set(
      'Set-Cookie',
      serialize('verified', 'true', {
        httpOnly: true,
        maxAge: 60 * 15, // 1 day
        path: '/',
        sameSite: 'lax',
      })
    );
    return response;
  }

  return NextResponse.json({ success: false }, { status: 403 });
}
