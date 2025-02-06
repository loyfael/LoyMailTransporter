# LoyMailTransporter

LoyMailTransporter is a TypeScript project using Node.js 23 to send emails.

## Prerequisites

- Node.js 23
- NPM

## Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd LoyMailTransporter
npm install
```

## Usage

To send an email, use the following command:

```bash
npm start
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

## Contributing

Contributions are welcome. Please submit a pull request.

## License

This project is licensed under the MIT License.