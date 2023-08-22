"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          title: "Jeans",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "T-shirts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Shirts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Winter",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Boxers",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Caps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Shorts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
