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
                if (!result[0]) {
                    res.status(400).json({
                        success: false,
                        message: 'Data not found',
                        data: result
                    })
                } else {
                    res.status(200).json({
                        success: true,
                        message: 'Success',
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
                        [Op.iLike]: '%' + title + '%'
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
                if (!result) {
                    res.status(400).json({
                        success: false,
                        message: 'Data not found',
                        data: result
                    })
                } else {
                    res.render('search', {result: result})
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
                        [Op.iLike]: `%${category}%`
                    }
                },
                include: [{
                    where: {
                        departement: {
                            [Op.iLike]: `%${departements}%`,
                        }
                    },
                    attributes: ['departement', 'category_id', 'id'],
                    model: Departements,
                    include: [{
                        where: {
                            course: {
                                [Op.iLike]: `%${courses}%`,
                            }
                        },
                        attributes: ['course', 'id'],
                        model: Courses,
                        include: [{
                            model: Questions,
                            where: {
                                title: {
                                    [Op.iLike]: `%${title}`
                                }
                            },
                            // attributes: ['title'],
                        }],
                    }],
                }],
            })
            .then(result => {
                if (!result[0]) {
                    res.status(400).json({
                        success: false,
                        message: 'Data not found',
                        data: result
                    })
                } else {
                    res.status(200).json({
                        success: true,
                        message: 'Success',
                        data: result
                    })
                }

            })
    }
}