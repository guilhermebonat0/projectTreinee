'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('logins', {
      id: {
        primaryKey:true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      usuario: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senhaHash: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('logins');
  }
};