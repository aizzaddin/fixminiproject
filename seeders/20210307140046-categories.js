'use strict';
const { nanoid } = require('nanoid')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [                                                                                               
            {id: nanoid(), category: 'Ekonomi dan Bisnis'},                                                                                                                                                                                                                                                                                            
            {id: nanoid(), category: 'Teknik'},                                                                                                                                                                                                                                                                                                        
            {id: nanoid(), category: 'Matematika dan IPA'},                
            {id: nanoid(), category: 'Filsafat'},                         
            {id: nanoid(), category: 'Hukum'},                      
            {id: nanoid(), category: 'Ilmu Sosial dan Politik'},                                               
            {id: nanoid(), category: 'Kedokteran dan Ilmu Kesehatan'},                
            {id: nanoid(), category: 'Kegunaan dan Ilmu Pendidikan'},               
            {id: nanoid(), category: 'Kehutanan'},                                                                                                                                                       
            {id: nanoid(), category: 'Pertanian'},                
            {id: nanoid(), category: 'Peternakan'},                
            {id: nanoid(), category: 'Psikologi'},                                                                                                                                                                               
            {id: nanoid(), category: 'Sastra dan Ilmu Budaya'},                                                                                                                                                                                                                                                                                                     
            {id: nanoid(), category: 'Umum'}               
        ], {});
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};