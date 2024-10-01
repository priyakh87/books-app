'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert books into the Books table
    await queryInterface.bulkInsert('Books', [
      { title: 'Book 1', author: 'Author 1', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Book 2', author: 'Author 2', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Book 3', author: 'Author 3', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Book 4', author: 'Author 4', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Book 5', author: 'Author 5', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all books from the Books table
    await queryInterface.bulkDelete('Books', null, {});
  }
};