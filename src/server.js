const express = require("express");
const logger = require("./logger");
const pinoHttp = require("pino-http")({ logger });

const app = express();

app.use(pinoHttp);

app.get("/", (req, res) => res.json({ msg: "Sucesso" }));

module.exports = app;
