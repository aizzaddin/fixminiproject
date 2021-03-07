'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Questions, {
        foreignKey: "category_id"
      }),
      this.hasMany(models.Answers, {
        foreignKey: "category_id"
      })
    }
  };
  Categories.init({
    kategori: DataTypes.STRING,
    program_studi: DataTypes.STRING,
    mata_kuliah: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};