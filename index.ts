import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'), // Port par défaut 587 pour TLS
    secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour 587
    auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string
    }
});

// Chemin du fichier HTML à joindre
const htmlFilePath = path.join(__dirname, 'index.html');

// Vérification de l'existence du fichier HTML
if (!fs.existsSync(htmlFilePath)) {
    console.error("Fichier HTML non trouvé:", htmlFilePath);
    process.exit(1);
}

// Lecture du fichier HTML
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

// Définition des options de l'email
const mailOptions = {
    from: `"Expéditeur" <${process.env.SMTP_USER}>`, // Expéditeur
    to: process.env.SMTP_RECIPIENT as string, // Destinataire
    subject: 'Test' as string, // Sujet du mail
    html: htmlContent, // Contenu HTML
    attachments: [
        {
            filename: 'email-template.html',
            content: htmlContent, // Attachement du fichier HTML
            contentType: 'text/html'
        }
    ]
};

// Envoi du mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Erreur lors de l\'envoi du mail:', error);
    } else {
        console.log('Email envoyé avec succès:', info.response);
    }
});
