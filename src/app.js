const express = require('express');
const cron = require('node-cron');
const userRouter = require('./routes/userRoute');
const newsRouter = require('./routes/newsRoute');
const triggerSending = require('./services/newsletterService');
const userService = require('./services/userService');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/news', newsRouter);

cron.schedule('* * * * *', async () => {
  const sendList = await userService.list();
  console.log(sendList);
  triggerSending(sendList);
  console.log('Tasked scheduled with 1 minute interval');
});

module.exports = app;
