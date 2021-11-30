const logins = require('./logins')
const habilidades = require('./habilidades')
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class qualificacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.habilidades.belongsToMany(models.logins, { through: models.qualificacoes });
      models.logins.belongsToMany(models.habilidades, { through: models.qualificacoes });
    }
  }
  qualificacoes.init({
    logins_id: {
      type: DataTypes.INTEGER,
      references: {
        model: logins,
        key: 'logins_id'
      }
    },
    habilidades_id: {
      type: DataTypes.INTEGER,
      references: {
        model: habilidades,
        key: 'habilidades_id',
      },
    },
    nivel: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'qualificacoes',
  });
  return qualificacoes;
};
