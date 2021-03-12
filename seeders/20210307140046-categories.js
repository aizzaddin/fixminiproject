'use strict';
const { nanoid } = require('nanoid')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [                                                                                               
            {kategori: 'Ekonomi dan Bisnis'},                                                                                                                                                                                                                                                                                            
            {kategori: 'Teknik'},                                                                                                                                                                                                                                                                                                        
            {kategori: 'Matematika dan IPA'},                
            {kategori: 'Filsafat'},                         
            {kategori: 'Hukum'},                      
            {kategori: 'Ilmu Sosial dan Politik'},                                               
            {kategori: 'Kedokteran dan Ilmu Kesehatan'},                
            {kategori: 'Kegunaan dan Ilmu Pendidikan'},               
            {kategori: 'Kehutanan'},                                                                                                                                                       
            {kategori: 'Pertanian'},                
            {kategori: 'Peternakan'},                
            {kategori: 'Psikologi'},                                                                                                                                                                               
            {kategori: 'Sastra dan Ilmu Budaya'},                                                                                                                                                                                                                                                                                                     
            {kategori: 'Umum'}               
        ], {});
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};