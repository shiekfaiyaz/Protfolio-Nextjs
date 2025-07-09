import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email error:', err);
    return new Response(JSON.stringify({ error: 'Email send failed' }), { status: 500 });
  }
}
