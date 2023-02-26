const express = require("express");
const Sequelize = require("sequelize");

const app = express();

app.use(express.json());

module.exports = app;
