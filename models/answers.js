'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
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
      this.belongsTo(models.Questions, {
        foreignKey: "question_id"
      }),
      this.belongsTo(models.Categories, {
        foreignKey: "category_id"
      })
    }
  };
  Answers.init({
    answer: DataTypes.TEXT,
    category_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    question_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};