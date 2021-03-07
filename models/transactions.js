'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Users, { foreignKey: 'user_id'}),
      Transactions.belongsTo(models.Services, { foreignKey: 'services_id' })
    }
  };
  Transactions.init({
    user_id: DataTypes.STRING,
    services_id: DataTypes.STRING,
    next_payment: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};