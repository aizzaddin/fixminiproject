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
            media_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                  model: 'Media',
                  key: 'id'
                }
            },
            reference: {
                type: Sequelize.STRING
            },
            user_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            question_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
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