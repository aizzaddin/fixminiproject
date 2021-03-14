'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      user_id: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      services_id: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Services',
          key: 'id'
        }
      },
      next_payment: {
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};