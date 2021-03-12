'use strict';
const { nanoid } = require('nanoid')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [                                                                                               
            {id: nanoid(), category: 'Ekonomi dan Bisnis', createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                            
            {id: nanoid(), category: 'Teknik', createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                                        
            {id: nanoid(), category: 'Matematika dan IPA', createdAt: new Date(), updatedAt: new Date() },                
            {id: nanoid(), category: 'Filsafat', createdAt: new Date(), updatedAt: new Date() },                         
            {id: nanoid(), category: 'Hukum', createdAt: new Date(), updatedAt: new Date() },                      
            {id: nanoid(), category: 'Ilmu Sosial dan Politik', createdAt: new Date(), updatedAt: new Date() },                                               
            {id: nanoid(), category: 'Kedokteran dan Ilmu Kesehatan', createdAt: new Date(), updatedAt: new Date() },                
            {id: nanoid(), category: 'Kegunaan dan Ilmu Pendidikan', createdAt: new Date(), updatedAt: new Date() },               
            {id: nanoid(), category: 'Kehutanan', createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                       
            {id: nanoid(), category: 'Pertanian', createdAt: new Date(), updatedAt: new Date() },                
            {id: nanoid(), category: 'Peternakan', createdAt: new Date(), updatedAt: new Date() },                
            {id: nanoid(), category: 'Psikologi', createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                               
            {id: nanoid(), category: 'Sastra dan Ilmu Budaya', createdAt: new Date(), updatedAt: new Date() },                                                                                                                                                                                                                                                                                                     
            {id: nanoid(), category: 'Umum', createdAt: new Date(), updatedAt: new Date() }               
        ], {});
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};