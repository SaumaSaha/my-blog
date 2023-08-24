class Blogs {
  #blogs;
  #id;
  constructor(blogs = []) {
    this.#blogs = blogs;
    this.#id = 0;
  }

  addBlog(content) {
    const blog = { blogId: this.#id, content };
    this.#blogs.push(blog);
    return this.#id++;
  }
}

module.exports = Blogs;
