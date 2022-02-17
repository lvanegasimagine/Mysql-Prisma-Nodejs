const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getBlog = async (req, res) => {
  try {
    const result = await prisma.post.findMany();
    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    });
    res.status(200).json({
      status: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

const addBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
      const {id} = req.params;
      const {title, content} = req.body;
      const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {title, content}
      })
      res.status(200).json({
          status: true,
          data: post
      })
  } catch (error) {
      res.status(500).json({
          status: false,
          error: error
      })
  }
};

const deleteBlog = async (req, res) => {
  try {
      const { id } = req.params;

      const data = await prisma.post.delete({
          where: {id: Number(id)}
      });
      res.status(200).json({
          status: true,
          data
      })
  } catch (error) {
      res.status(500).json({
          status: false,
          error: error
      })
  }
};

module.exports = {
  getBlog,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
};
