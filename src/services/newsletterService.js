const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtp-mail.outlook.com',
  service: 'outlook',
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3',
  },
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve('./src/views/'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./src/views/'),
};

transporter.use('compile', hbs(handlebarOptions));

function triggerSending(users) {
  users.forEach((user) => {
    transporter.sendMail(
      {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Notícias do dia!',
        template: 'email',
        context: {
          name: user.user,
        },
      },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console(`Emails sent: ${info.response}`);
        }
      }
    );
  });
}

// function trigger_sending(info) {
//   //env passes our email and name to
//   //customize the message
//   var emailbody = template.generate(env.first).toString();
//   //generates a string to send
//   //the personalized HTML
//   transporter.sendMail(
//     {
//       from: 'Devin from At The Door <devin@atthedoor.app>',
//       to: env.email, //email address of our recipient
//       subject: 'Events and first impressions At The Door ',
//       text: '##Plaintext version of the message##',
//       html: emailbody,
//     },
//     (error, info) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//     }
//   );
// }

// const mailOptions = {
//   from: process.env.EMAIL,
//   to: 'queitesc@gmail.com',
//   subject: 'Notícias do dia!',
//   template: 'email',
//   context: {
//     name: 'Teste', // replace {{name}} with Adebola
//     company: 'My Company', // replace {{company}} with My Company
//   },
// };

// function set_message_delays() {
//   var message_job = schedule.scheduleJob('*/10 * * * * *', function () {
//     trigger_sending(sendlist[message_increment]);
//     if (message_increment < sendlist.length) {
//       message_increment++;
//       // if our increment is less than our list length,
//       // we'll keep sending
//     }
//     if (message_increment >= sendlist.length) {
//       message_job.cancel();
//       // stop our function when last message is sent
//     }
//   });
// }

// function trigger_sending(env) {
//   // cron.schedule("0 0 8 * * * ", () => {
//   transporter.sendMail(
//     mailOptions,
//     (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console('Emails sent: ' + info.response);
//       }
//     },
//     {
//       scheduled: true,
//       timezone: 'America/Sao_Paulo',
//     }
//   );
//   // });
// }

// selecionar todas as noticias não enviadas
// selecionar todos os usuários (nome, email, aniversario)
// com array de notícias montar e-mail
// com array de usuários mandar e-mail personalizado

module.exports = triggerSending;
