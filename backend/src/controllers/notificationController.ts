import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

// Create transporter using SMTP config from env
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const testEmail = async (req: Request, res: Response) => {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: process.env.SMTP_FROM || 'test@example.com',
      to: req.body.email || 'test@example.com',
      subject: 'Test Email from JobIntel',
      text: 'This is a test email to verify SMTP configuration.',
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Test email sent successfully' });
  } catch (error) {
    console.error('Email test failed:', error);
    res.status(500).json({ error: 'Failed to send test email' });
  }
};

export const verifySmtp = async (req: Request, res: Response) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    res.json({ message: 'SMTP configuration is valid' });
  } catch (error) {
    console.error('SMTP verification failed:', error);
    res.status(500).json({ error: 'SMTP configuration is invalid' });
  }
};