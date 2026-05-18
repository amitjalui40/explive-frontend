import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiter — best-effort on serverless (warm instances share state)
const ipLog = new Map<string, number[]>();
const WINDOW_MS = 60_000;   // 1 minute
const MAX_PER_WINDOW = 3;   // max 3 submissions per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipLog.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  ipLog.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a minute and try again.' }, { status: 429 });
  }

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

  const { firstName, lastName, email, phone, message, _hp, _t } = body as Record<string, string>;

  // Honeypot — silently succeed so bots don't know they were blocked
  if (_hp) {
    return NextResponse.json({ success: true });
  }

  // Timing check — real users take at least 3 seconds to fill a form
  const loadedAt = parseInt(_t ?? '0', 10);
  if (!loadedAt || Date.now() - loadedAt < 3000) {
    return NextResponse.json({ success: true }); // silent, don't tip off bots
  }

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (
    firstName.length > 50 ||
    lastName.length > 50 ||
    email.length > 100 ||
    message.length > 2000
  ) {
    return NextResponse.json({ error: 'Input exceeds allowed length' }, { status: 400 });
  }

  if (phone && phone.length !== 10) {
    return NextResponse.json({ error: 'Phone number must be exactly 10 digits' }, { status: 400 });
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
