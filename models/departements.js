'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Questions, {
        foreignKey: "departement_id"
      }),
      this.hasMany(models.Courses, {
        foreignKey: "departement_id"
      }),
      this.belongsTo(models.Categories, {
        foreignKey: "category_id"
      })
    }
  };
  Departements.init({
    departement: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departements',
  });
  return Departements;
};