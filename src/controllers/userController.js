const userService = require("../services/userService");

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

  // list: async (req, res) => {
  //   const users = await userService.list();
  //   res.status(200).json(users);
  // },

  // getById: async (req, res) => {
  //   const { id } = req.params;
  //   const user = await userService.getById(id);
  //   res.status(200).json(user);
  // },

  // delete: async (req, res) => {
  //   await userService.delete(req.user);
  //   res.status(204).end();
  // },
};

module.exports = userController;
