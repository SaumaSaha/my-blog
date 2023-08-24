const { describe, it } = require("node:test");
const request = require("supertest");
const createApp = require("../src/app");
const Blogs = require("../src/models/blogs");

describe("/", () => {
  describe("GET /", () => {
    it("should serve home page", (_, done) => {
      const app = createApp();

      request(app)
        .get("/")
        .expect(200)
        .expect("content-type", /text\/html/)
        .expect("Home Page")
        .end(done);
    });
  });
});

describe("/blogs", () => {
  describe("POST /blogs", () => {
    it("should give blogs", (_, done) => {
      const blogs = new Blogs();
      const app = createApp(blogs);

      request(app)
        .post("/blogs")
        .send({ content: "First Blog" })
        .expect(201)
        .expect("content-type", /application\/json/)
        .end(done);
    });
  });
});
