exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
  if (!GOOGLE_SCRIPT_URL) {
    console.error('GOOGLE_SCRIPT_URL env var is not set');
    return { statusCode: 500, body: JSON.stringify({ error: 'Server misconfigured' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { firstName, lastName, email, phone, message, _hp } = body;

  // Honeypot — bots fill hidden fields, humans don't. Silently succeed to avoid tipping off bots.
  if (_hp) {
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ success: true }) };
  }

  // Required fields
  if (!firstName || !lastName || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  // Length limits (mirrors the maxLength attrs on the form)
  if (
    firstName.length > 50 ||
    lastName.length > 50 ||
    email.length > 100 ||
    (phone && phone.length > 20) ||
    message.length > 2000
  ) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Input exceeds allowed length' }) };
  }

  // Basic email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email format' }) };
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

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Failed to forward to Google Apps Script:', err);
    return { statusCode: 502, body: JSON.stringify({ error: 'Failed to send message. Please try again.' }) };
  }
};
