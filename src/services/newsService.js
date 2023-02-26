const db = require('../database/models');

const newsService = {
  create: async ({ title, description, link }) => {
    const news = await db.news.create({ title, description, link });
    return news;
  },
};

module.exports = newsService;
