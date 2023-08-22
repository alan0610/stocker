"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Brands",
      [
        {
          title: "Levi's",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Superflag",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Raiders Jeans",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Wrangler",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
