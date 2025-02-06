# LoyMailTransporter

LoyMailTransporter is a simple TypeScript project using Node.js 23 to send emails with nodemailer.

## Prerequisites
- Node.js 23 (no really?)
- NPM

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/loyfael/loymailtransporter
cd LoyMailTransporter
npm install
```

## Configuration

Create a `.env` file and add your configuration information:

```env
SMTP_HOST=example.gmail.com
SMTP_PORT=put-your-port-here
SMTP_SECURE=false
SMTP_USER=put-your-email-here
SMTP_PASS=put-your-password-here
SMTP_RECIPIENT=put-your-recipient-email-here
```

## Scripts

- `npm start`: Starts the application.
- `npm run build`: Compiles the TypeScript project.

## Usage

To send an email, put your mail HTML template inside **mail folder** (always named index.html, you can modify them as you want) and use the following command:

```bash
npm start
```

## Contributing

Contributions are welcome. Please submit a pull request.

## License

This project is licensed under the MIT License.