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
      this.belongsTo(models.Categories, {
        foreignKey: "category_id"
      }),
      this.hasMany(models.Answers, {
        foreignKey: "question_id"
      })
    }
  };
  Questions.init({
    title: DataTypes.STRING,
    question: DataTypes.TEXT,
    category_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};