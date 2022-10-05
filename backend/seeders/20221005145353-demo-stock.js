'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Stocks',
      [
        {
          productId: 1,
          stock: 15,
          lastPurchase: new Date('08-08-2021'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stocks', null, {});
  }
};
