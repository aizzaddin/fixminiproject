'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Questions, {
                foreignKey: "user_id"
            }),
            this.hasMany(models.Answers, {
                foreignKey: "user_id"
            }),
            this.hasMany(models.Bookmarks, {
                foreignKey: "user_id"
            }),
            this.hasMany(models.Transactions, {
                foreignKey: "user_id"
            }),
            this.hasMany(models.Media, {
                foreignKey: "user_id"
            })
        }
    };
    Users.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        password2: DataTypes.STRING,
        info: DataTypes.TEXT,
        role: DataTypes.ENUM('user', 'admin')
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};