const db = require("../database/models");

const userService = {
  create: async ({ user, email, birthdate }) => {
    const newUser = await db.user.create({ user, email, birthdate });
    return newUser;
  },
};

module.exports = userService;
