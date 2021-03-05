'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Bookmarks', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(22)
            },
            bookmark: {
                type: Sequelize.STRING
            },
            url: {
                type: Sequelize.STRING
            },
            user_id: {
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
        await queryInterface.dropTable('Bookmarks');
    }
};