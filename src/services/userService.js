const db = require('../database/models');

const userService = {
  create: async ({ user, email, birthdate }) => {
    const newUser = await db.user.create({ user, email, birthdate });
    return newUser;
  },

  list: async () => {
    const users = await db.user.findAll({});
    return users;
  },
};

module.exports = userService;
