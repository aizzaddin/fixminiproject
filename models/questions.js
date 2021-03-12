'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: "user_id"
      }),
      this.belongsTo(models.Media, {
        foreignKey: "media_id"
      }),
      this.belongsTo(models.Categories, {
        foreignKey: "category_id"
      }),
      this.belongsTo(models.Answers, {
        foreignKey: "question_id"
      }),
      this.belongsTo(models.Departements, {
        foreignKey: "departement_id"
      }),
      this.belongsTo(models.Courses, {
        foreignKey: "course_id"
      })
    }
  };
  Questions.init({
    title: DataTypes.STRING,
    question: DataTypes.TEXT,
    media_id: DataTypes.STRING,
    category_id: DataTypes.STRING,
    departement_id: DataTypes.STRING,
    course_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};