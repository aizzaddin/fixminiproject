'use strict';
const { nanoid } = require('nanoid')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Services', [                                                                                               
            {id: nanoid(), service: 'Sangat Eksklusif', period: 'Tahunan', price: 30000, createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                            
            {id: nanoid(), service: 'Lumayan Eksklusif', period: '6 bulan', price: 50000, createdAt: new Date(), updatedAt: new Date() }, 
            {id: nanoid(), service: 'Agak Eksklusif', period: 'Bulanan', price: 100000, createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                                                      
        ], {});
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Services', null, {});
    }
};


