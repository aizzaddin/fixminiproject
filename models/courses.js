'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Questions, {
        foreignKey: "course_id"
      }),
      this.belongsTo(models.Categories, {
        foreignKey: "departement_id"
      })
    }
  };
  Courses.init({
    course: DataTypes.STRING,
    departement_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};