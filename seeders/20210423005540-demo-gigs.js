'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('gigs', [{
      title: 'first title',
      technologies: 'sequelize',
      budget: '200000000',
      description: 'my first sequelize',
      contact_email: 'joo6077@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
     }]);
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
