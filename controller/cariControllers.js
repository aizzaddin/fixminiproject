const { Courses, Departements, Questions, Answers, Categories } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    //nampilin semua judul pertanyaan
    index: (req, res) => {
        Questions.findAll({
                attributes: ['title', 'user_id'],
                include: [{
                    attributes: ['id', 'category'],
                    model: Categories,
                }],
            })
            .then(result => {
                if (result !== null) {
                    res.status(200).json({
                        status: "success",
                        data: result
                    })
                } else {
                    res.status(200).json({
                        status: "success",
                        message: "Data not found!",
                        data: result
                    })
                }
            })
    },
    //searching by title(judul)
    show: (req, res) => {
        const { title, question, category_id } = req.query
        Questions.findAll({
                limit: 10,
                where: {
                    title: {
                        [Op.like]: '%' + title + '%'
                    },
                },
                attributes: ['title', 'user_id', 'question', 'category_id', 'course_id'],
                include: [{
                    attributes: ['category'],
                    model: Categories,
                }],
                // attributes: ['user_id', 'answer'],
                // include: [{
                //     attributes: ['user_id', 'answer'],
                //     model: Answers,
                // }]
            })
            .then(result => {
                if (result !== null) {
                    res.status(200).json({
                        status: "success",
                        data: result
                    })
                } else {
                    res.status(200).json({
                        status: "success",
                        message: "Data not found!",
                        data: result
                    })
                }
            })
    },
    //filtering by categories_matakuliah
    filter: (req, res) => {
        const { category, departements, courses, title } = req.body
        Categories.findAll({
                attributes: ['category', 'id'],
                where: {
                    category: {
                        [Op.like]: `%${category}%`
                    }
                },
                include: [{
                    where: {
                        departement: {
                            [Op.like]: `%${departements}%`,
                        }
                    },
                    attributes: ['departement', 'category_id', 'id'],
                    model: Departements,
                    include: [{
                        where: {
                            course: {
                                [Op.like]: `%${courses}%`,
                            }
                        },
                        attributes: ['course', 'id'],
                        model: Courses,
                        include: [{
                            attributes: ['title'],
                            model: Questions,
                        }],
                    }],
                }],
            })
            .then(result => {
                if (result !== null) {
                    res.status(200).json({
                        status: "success",
                        data: result
                    })
                } else {
                    res.status(200).json({
                        status: "success",
                        message: "Data not found!",
                        data: result
                    })
                }
            })
    }
}