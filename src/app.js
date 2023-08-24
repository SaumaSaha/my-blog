const express = require("express");
const { requestLogger } = require("./middlewares/logger");
const { handleHomePage } = require("./handlers/page-handlers");

const createApp = () => {
  const app = express();

  app.use(requestLogger);
  app.get("/", handleHomePage);

  return app;
};

module.exports = createApp;
