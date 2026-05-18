import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
  if (!GOOGLE_SCRIPT_URL) {
    console.error('GOOGLE_SCRIPT_URL env var is not set');
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message, _hp } = body as Record<string, string>;

  // Honeypot — silently succeed so bots don't know they were blocked
  if (_hp) {
    return NextResponse.json({ success: true });
  }

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (
    firstName.length > 50 ||
    lastName.length > 50 ||
    email.length > 100 ||
    (phone && phone.length > 20) ||
    message.length > 2000
  ) {
    return NextResponse.json({ error: 'Input exceeds allowed length' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  try {
    const params = new URLSearchParams();
    params.append('firstName', firstName.trim());
    params.append('lastName', lastName.trim());
    params.append('email', email.trim());
    params.append('phone', (phone || '').trim());
    params.append('message', message.trim());

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to forward to Google Apps Script:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 502 });
  }
}
