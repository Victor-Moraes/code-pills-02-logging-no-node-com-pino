const pino = require("pino")({
  level: "debug",
  prettyPrint: {
    levelFirst: true,
    colorize: true,
  },
});

module.exports = pino;
