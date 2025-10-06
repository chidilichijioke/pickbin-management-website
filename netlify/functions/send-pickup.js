import nodemailer from 'nodemailer';

// Netlify Function (ES module)
// Expects JSON POST body: { name, email, address, message }
// Uses environment variables for SMTP credentials.

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['*'];

function isEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes('*') ? '*' : ALLOWED_ORIGINS[0],
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Allow': 'POST, OPTIONS' },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  let body = {};
  try {
    body = event.body ? JSON.parse(event.body) : {};
  } catch (err) {
    console.error('Invalid JSON', err);
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { name, email, address, message } = body;
  if (!name || !email || !address) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields: name, email, address' }) };
  }
  if (!isEmail(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email' }) };
  }

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const TO_EMAIL = process.env.TO_EMAIL;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    console.error('Missing SMTP configuration');
    return { statusCode: 500, body: JSON.stringify({ error: 'Email service not configured' }) };
  }

  const secure = SMTP_PORT === 465; // true for 465, false for 587

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    }
  });

  const subject = `Pickup request from ${name}`;
  const text = `Pickup request from ${name} <${email}>\nAddress: ${address}\n\nMessage:\n${message || '(no message provided)'}\n`;
  const html = `<p><strong>Pickup request</strong></p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Address:</strong> ${address}</li>
      <li><strong>Message:</strong> ${message ? message.replace(/\n/g, '<br>') : '(no message provided)'}</li>
    </ul>`;

  try {
    const info = await transporter.sendMail({
      from: `"Pick&Bin Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.log('Email sent', info.messageId);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes('*') ? '*' : ALLOWED_ORIGINS[0],
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ok: true, messageId: info.messageId })
    };
  } catch (err) {
    console.error('SendMail error', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes('*') ? '*' : ALLOWED_ORIGINS[0],
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Failed to send email', details: err?.message || String(err) })
    };
  }
};
