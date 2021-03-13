'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(22)
            },
            firstName: {
                type: Sequelize.STRING(50)
            },
            lastName: {
                type: Sequelize.STRING(50)
            },
            username: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(20)
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(25)
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password2: {
                allowNull: false,
                type: Sequelize.STRING
            },
            info: {
                type: Sequelize.TEXT
            },
            role: {
                allowNull: false,
                type: Sequelize.ENUM('user', 'admin')
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};