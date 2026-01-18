"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySmtp = exports.testEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Create transporter using SMTP config from env
const createTransporter = () => {
    return nodemailer_1.default.createTransporter({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
};
const testEmail = async (req, res) => {
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
    }
    catch (error) {
        console.error('Email test failed:', error);
        res.status(500).json({ error: 'Failed to send test email' });
    }
};
exports.testEmail = testEmail;
const verifySmtp = async (req, res) => {
    try {
        const transporter = createTransporter();
        await transporter.verify();
        res.json({ message: 'SMTP configuration is valid' });
    }
    catch (error) {
        console.error('SMTP verification failed:', error);
        res.status(500).json({ error: 'SMTP configuration is invalid' });
    }
};
exports.verifySmtp = verifySmtp;
