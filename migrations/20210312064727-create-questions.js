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
            media_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                  model: 'Media',
                  key: 'id'
                }
            },
            category_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                  model: 'Categories',
                  key: 'id'
                }
            },
            departement_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                  model: 'Departements',
                  key: 'id'
                }
            },
            course_id: {
                allowNull: false,
                type: Sequelize.STRING(22),
                references: {
                  model: 'Courses',
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