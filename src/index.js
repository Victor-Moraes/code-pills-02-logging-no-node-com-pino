const logger = require("./logger");
const server = require("./server");

logger.info("Oi, eu sou um log");
logger.info({ msg: "Oi", a: { b: "oi eu sou o b" } });

logger.debug("Eu não vou aparecer");

for (let i = 0; i <= 49; i++) logger.info(`O usuário ${i} executou a ação`);

server.listen(3333);
