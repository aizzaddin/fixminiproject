'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Questions', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(22)
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            question: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            category_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                    model: 'Categories',
                    key: 'id'
                }
            },
            user_id: {
                allowNull: false,
                type: Sequelize.STRING,
                references: {
                    model: 'Users',
                    key: 'id'
                }
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
        await queryInterface.dropTable('Questions');
    }
};