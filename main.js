const createApp = require("./src/app");
const Blogs = require("./src/models/blogs");

const main = () => {
  const blogs = new Blogs();
  const app = createApp(blogs);

  const port = 8080;
  app.listen(port, () => console.log("App listening on port:", port));
};

main();
