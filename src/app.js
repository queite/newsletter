const express = require('express');
const cron = require('node-cron');
const userRouter = require('./routes/userRoute');
const newsRouter = require('./routes/newsRoute');
const sendEmail = require('./services/newsletterService');
const userService = require('./services/userService');
const newsService = require('./services/newsService');
const createHTMLNews = require('./helpers/newsToHtml');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/news', newsRouter);

cron.schedule('* * * * *', async () => {
  const sendList = await userService.list();
  const notSentNews = await newsService.listNotSent();
  const newsHtml = createHTMLNews(notSentNews);
  sendEmail(sendList, newsHtml)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  console.log('Tasked scheduled with 1 minute interval');
});

module.exports = app;
