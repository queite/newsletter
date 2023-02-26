const newsService = require("../services/newsService");

const newsController = {
  create: async (req, res) => {
    const { title, description, link } = req.body;

    const news = await newsService.create({
      title,
      description,
      link,
    });

    res.status(201).json(news);
  },
};

module.exports = newsController;
