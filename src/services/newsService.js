const db = require('../database/models');

const newsService = {
  create: async ({ title, description, link }) => {
    const news = await db.news.create({ title, description, link });
    return news;
  },

  listNotSent: async () => {
    const news = await db.news.findAll({
      where: {
        sent: 0,
      },
    });
    return news;
  },

  update: async (idsArray) => {
    await db.news.update(
      { sent: true },
      {
        where: idsArray,
      }
    );
  },
};

module.exports = newsService;
