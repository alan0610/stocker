'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Brands',
      [
        {
          name: 'Levi`s',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wrangler',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Superflag',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Raiders',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
