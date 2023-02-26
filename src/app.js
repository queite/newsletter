const express = require('express');
const userRouter = require('./routes/userRoute');
const newsRouter = require('./routes/newsRoute');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/news', newsRouter);

module.exports = app;
