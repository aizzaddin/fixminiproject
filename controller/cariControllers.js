const { User, Questions, Answers, Categories } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    index: (req, res) => {
        Questions.findAll({
                attributes: ['title', 'user_id', 'question'],
                include: [{
                    attributes: ['kategori', 'mata_kuliah'],
                    model: Categories,
                    include: [{
                        attributes: ['answer', 'user_id'],
                        model: Answers,
                    }]
                }]
            })
            .then(result => {
                res.status(200).json({
                    status: "success",
                    data: result
                })
            })
    },
    show: (req, res) => {
        const { title, question, category_id } = req.query
        Questions.findOne({
                // where: {
                //     title: req.query.title,
                //     category_id: req.query.category_id,
                //     question: req.query.question
                // },
                attributes: ['title', 'user_id', 'question'],
                limit: 4,
                where: {
                    // title: {
                    //     [Op.like]: req.query.title
                    // }
                    [Op.or]: {
                        // title: {
                        //     [Op.like]: title
                        // },
                        title
                        // {
                        //     [Op.like]: question
                        // }
                    }

                },
                include: [{
                    attributes: ['kategori', 'mata_kuliah'],
                    model: Categories,
                    include: [{
                        model: Answers,
                    }]
                }]
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
    showjawaban: (req, res) => {
        Questions.findOne({
                where: {
                    id: req.body.id
                },
                attributes: ['title', 'user_id', 'question'],
                include: [{
                    model: Categories,
                    attributes: ['kategori', 'mata_kuliah'],
                    include: [{
                        model: Answers,
                    }]
                }]
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
    // indexLogin: (req, res) => {
    //     Questions.findAll({
    //             attributes: ['title', 'user_id', 'question'],
    //             include: [{
    //                 attributes: ['kategori', 'mata_kuliah'],
    //                 model: Categories,
    //                 include: [{
    //                     attributes: ['answer', 'user_id'],
    //                     model: Answers,
    //                 }]
    //             }]
    //         })
    //         .then(result => {
    //             res.status(200).json({
    //                 status: "success",
    //                 data: result
    //             })
    //         })
    // },
}