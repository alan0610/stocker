'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          brandId: 1,
          clothingId: 1,
          typeId: 1,
          code: '505 c16',
          title: 'Jean corte clasico',
          description: "Jean de calce comodo de la marca internacional Levi's",
          color: 'PW (azul oscuro)',
          size: '36',
          cost: 7000,
          price: 18000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
