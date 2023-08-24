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
    it("should add the blog and give the id back", (_, done) => {
      const blogs = new Blogs();
      const app = createApp(blogs);

      request(app)
        .post("/blogs")
        .send({ content: "First Blog" })
        .expect(201)
        .expect("content-type", /application\/json/)
        .expect({ blogId: 0 })
        .end(done);
    });
  });

  describe("GET /blogs", () => {
    it("should give the blogs", (_, done) => {
      const blogs = new Blogs([
        { blogId: 0, content: "First BLog" },
        { blogId: 1, content: "Second BLog" },
      ]);
      const app = createApp(blogs);

      request(app)
        .get("/blogs")
        .expect(200)
        .expect("content-type", /application\/json/)
        .expect([
          { blogId: 0, content: "First BLog" },
          { blogId: 1, content: "Second BLog" },
        ])
        .end(done);
    });
  });
});
