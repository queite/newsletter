const express = require("express");
const Sequelize = require("sequelize");
const userRouter = require("./routes/userRoute");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

module.exports = app;
