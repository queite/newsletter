const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { user, email, birthdate } = req.body;

    const newUser = await userService.create({
      user,
      email,
      birthdate,
    });

    res.status(201).json(newUser);
  },
};

module.exports = userController;
