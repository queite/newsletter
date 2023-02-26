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
          birthdate: "26/03/1986",
        },
        {
          user: "Joao",
          email: "testedev987@outlook.com",
          birthdate: "26/02/2023",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
