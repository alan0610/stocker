'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Types',
      [
        {
          name: 'Jeans',
          clothingId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cargo',
          clothingId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jogger',
          clothingId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Joggin',
          clothingId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gabardine',
          clothingId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Long sleeve t-shirts',
          clothingId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'T-shirts',
          clothingId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Long Sleeves shirts',
          clothingId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shirts',
          clothingId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jeans',
          clothingId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gabardine',
          clothingId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hoodies',
          clothingId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Crews',
          clothingId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jackets',
          clothingId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
