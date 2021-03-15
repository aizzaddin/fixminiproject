const {
    Users,
    Courses,
    Departements,
    Questions,
    Answers,
    Categories
} = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment')


module.exports = {
    //searching dengan judul tanpa login
    index: async (req, res) => {
        const {
            title
        } = req.query
        const questions = await Questions.findAll({
            where: {
                title: {
                    [Op.iLike]: '%' + title + '%'
                },
            },
            order: [
                ['createdAt', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
            ],
            include: [{
                model: Users
            }]
        })
        const categories = await Categories.findAll({
            attribute: ['category']
        })
        const departements = await Departements.findAll({
            attribute: ['departement']
        })
        const courses = await Courses.findAll({
            attribute: ['course']
        })
        const totalpertanyaan = await Questions.findAndCountAll({
            where: {
                title: {
                    [Op.iLike]: '%' + title + '%'
                },
            }
        })
        if (totalpertanyaan.count == 0) {
            res.render('noresult')
        } else {
            res.render('search', {
                questions,
                moment,
                categories,
                departements,
                courses,
                totalpertanyaan,
                title
            })
        }
    },
    //searching dengan judul
    show: async (req, res) => {
        const {
            title
        } = req.query
        const questions = await Questions.findAll({
            where: {
                title: {
                    [Op.iLike]: '%' + title + '%'
                },
            },
            order: [
                ['createdAt', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
            ],
            include: [{
                model: Users
            }]
        })
        const categories = await Categories.findAll({
            attribute: ['category']
        })
        const departements = await Departements.findAll({
            attribute: ['departement']
        })
        const courses = await Courses.findAll({
            attribute: ['course']
        })
        const nama = await Users.findOne({
            where: {
                id: req.user.id
            }
        })
        res.render('searchwlogin', {
            questions,
            moment,
            categories,
            departements,
            courses,
            nama
        })
    },
    //filtering by categories_matakuliah
    filter: async (req, res) => {
        const {
            departementss
        } = req.query

        const categories = await Categories.findAll({

        })
        const departements = await Departements.findAll({
            where: {
                departement: {
                    [Op.iLike]: '%' + departementss + '%'
                },
            },
            attribute: ['departement']
        })
        const courses = await Courses.findAll({
            attribute: ['course']
        })
        const questions = await Questions.findAll({
            include: [{
                model: Users
            }]
        })
        res.render('search', {
            questions,
            moment,
            categories,
            departements,
            courses
        })
    },

}