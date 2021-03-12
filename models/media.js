'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Answers, {
        foreignKey: "answer_id"
      }),
      this.hasMany(models.Questions, {
        foreignKey: "question_id"
      }),
      this.belongsTo(models.Users, {
        foreignKey: "user_id"
      })
    }
  };
  Media.init({
    url: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};