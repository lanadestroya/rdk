'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'roleName', {
      type: Sequelize.STRING,
      allowNull: true, // Или false, если нужно обязательное поле
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'roleName');
  }
};
