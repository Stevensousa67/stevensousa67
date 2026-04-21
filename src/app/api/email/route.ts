import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ContactEmail } from '@/components/sections/contact/Email';
import { verifyTurnstile } from '@/app/api/cloudflare/turnstile/route';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, turnstileToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Security check required.' }, { status: 400 });
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For');
    const valid = await verifyTurnstile(turnstileToken, ip);

    if (!valid) {
      return NextResponse.json({ error: 'Security check failed. Please try again.' }, { status: 403 });
    }

    const { data, error } = await resend.emails.send({
      from: 'ss@stevensousa.com',
      to: 'silver.steven@hotmail.com',
      subject: `Portfolio Message From ${name}`,
      react: ContactEmail({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
