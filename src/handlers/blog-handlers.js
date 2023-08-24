const handlePostBlog = (req, res) => {
  const { blogs } = req.app;
  const { content } = req.body;

  const blogId = blogs.addBlog(content);

  res.status(201).json({ blogId });
};

const handleGetBlogs = (req, res) => {
  const { blogs } = req.app;

  res.status(200).json(blogs.getBlogs());
};

module.exports = { handlePostBlog, handleGetBlogs };
