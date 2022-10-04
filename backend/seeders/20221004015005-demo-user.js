'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          fullname: 'John Doe',
          email: 'johndue@gmail.com',
          dateOfBirth: new Date('1989-05-06'),
          address: 'Calle Buenavista 1234',
          appartment: '2B',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
