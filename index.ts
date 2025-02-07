import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Transporter config
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'), // Default port for tls
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string
    }
});

// HTML path
const htmlFilePath = path.join(__dirname, './mail/index.html');

// HTML is here verification
if (!fs.existsSync(htmlFilePath)) {
    console.error("Fichier HTML non trouvé:", htmlFilePath);
    process.exit(1);
}

// HTML read
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

// Email definition
const mailOptions = {
    from: `"Expéditeur" <${process.env.SMTP_USER}>`, // Expeditor
    to: process.env.SMTP_RECIPIENT as string, // Recipier
    subject: 'Test' as string, // Subject
    html: htmlContent, // HTML content
    attachments: [
        {
            filename: 'email-template.html',
            content: htmlContent, // Attachment
            contentType: 'text/html'
        }
    ]
};

// Sending
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Erreur lors de l\'envoi du mail:', error);
    } else {
        console.log('Email envoyé avec succès:', info.response);
    }
});
