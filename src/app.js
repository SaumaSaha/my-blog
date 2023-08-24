const express = require("express");
const { requestLogger } = require("./middlewares/logger");
const { handleHomePage } = require("./handlers/page-handlers");
const { handlePostBlog } = require("./handlers/blog-handlers");

const createApp = (blogs) => {
  const app = express();
  app.blogs = blogs;

  app.use(requestLogger);
  app.use(express.json());
  app.get("/", handleHomePage);
  app.post("/blogs", handlePostBlog);

  return app;
};

module.exports = createApp;
