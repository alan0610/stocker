'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Clothings',
      [
        {
          name: 'Pants',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'T-shirts',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shirts',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shorts',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Winter',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Underwear',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sweaters',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vests',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Belts',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Clothings', null, {});
  }
};
