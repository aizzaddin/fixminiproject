'use strict';
const { nanoid } = require('nanoid')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Services', [                                                                                               
            {id: nanoid(), service: 'Sangat Eksklusif', period: '365', price: 100000, createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                            
            {id: nanoid(), service: 'Lumayan Eksklusif', period: '90', price: 140000, createdAt: new Date(), updatedAt: new Date() }, 
            {id: nanoid(), service: 'Agak Eksklusif', period: '30', price: 180000, createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                                                      
        ], {});
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Services', null, {});
    }
};


