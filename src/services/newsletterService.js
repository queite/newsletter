const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.HOST,
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
  maxConnections: 3, // outlook causing Concurrent connections limit exceeded
});

function sendEmail(users, newsHTML) {
  const date = new Date().toISOString();
  return new Promise((resolve, reject) => {
    users.forEach((user) => {
      const emailOptions = {
        from: process.env.EMAIL,
        to: 'queitesc@gmail.com',
        subject: 'Notícias do dia!',
        html: `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta http-equiv="x-ua-compatible" content="ie=edge">
              <title>Notícias do dia!</title>
            </head>
            <body>
                <h2>Bom dia ${user.user}! ${
          user.birthdate.substring(5, 7) === date.substring(5, 7) &&
          user.birthdate.substring(8, 10) === date.substring(8, 10)
            ? 'Feliz aniversário'
            : ''
        }</h2>
              <p>Segue as notícias de hoje.</p>
              <br>
              ${newsHTML}
            </body>
          </html>`,
      };

      transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
          return reject(new Error(error));
        }
        return resolve({ message: info });
      });
    });
  });
}
module.exports = sendEmail;
