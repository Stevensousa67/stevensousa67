import { NextRequest, NextResponse } from 'next/server';

export async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.CLOUDFLARE_SECRET_KEY,
      response: token,
      ...(ip && { remoteip: ip }),
    }),
  });

  const data = await res.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'Token is required.' }, { status: 400 });
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For');
    const success = await verifyTurnstile(token, ip);

    if (!success) {
      return NextResponse.json({ error: 'Security check failed.' }, { status: 403 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
