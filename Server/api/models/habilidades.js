'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class habilidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }

  };
  habilidades.init({
    habilidades: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'habilidades',
  });
  return habilidades;
};