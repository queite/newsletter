"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          user: "queite",
          email: "queitesc@gmail.com",
          birthdate: "2000-12-05",
        },
        {
          user: "Joao",
          email: "testedev987@outlook.com",
          birthdate: "2023-02-27",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
