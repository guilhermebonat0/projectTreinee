'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      logins.hasMany(models.habilidades, {
        foreingKey: 'logins_id'
      });
    
    }
  };
  logins.init({
    usuario: DataTypes.STRING,
    email: DataTypes.STRING,
    senhaHash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'logins',
  });
  return logins;
};