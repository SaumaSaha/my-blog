const handlePostBlog = (req, res) => {
  const { blogs } = req.app;
  const { content } = req.body;

  const blogId = blogs.addBlog(content);

  res.status(201).json({ blogId });
};

module.exports = { handlePostBlog };
