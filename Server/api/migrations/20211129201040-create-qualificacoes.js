'use strict';


module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('qualificacoes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nivel: {
          type: Sequelize.STRING
        },
        logins_id:{
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'logins', key: "id"}
        },
        habilidades_id:{
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'habilidades', key: "id"}
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
    await queryInterface.dropTable('qualificacoes');
  }
};
