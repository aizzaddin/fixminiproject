'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Answers', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(22)
            },
            answer: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            category_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'Categories',
                    key: 'id'
                }
            },
            user_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            question_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'Questions',
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
        await queryInterface.dropTable('Answers');
    }
};