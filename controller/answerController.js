const {
    Questions,
    Users,
    Categories,
    Departements,
    Courses,
    Answers
} = require("../models")
const moment = require("moment")
const {
    nanoid
} = require('nanoid')

module.exports = {
    index: async (req, res) => {
        const questions = await Questions.findOne({
            where: {
                id: req.params.id
            }
        })
        const users = await Users.findAll({
            attribute: ['username']
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
        const answers = await Answers.findAll({
            attribute: ['answer']
        })
        const nama = await Users.findOne({
            where: {
                id: req.user.id
            }
        })
        // console.log(users);
        res.render('addanswers', {
            questions,
            moment,
            users,
            categories,
            departements,
            courses,
            answers,
            nama
        })
    },
    show: (req, res) => {
        Answers.findOne({
                where: {
                    id: Number(req.params.id)
                }
            })
            .then(result => {
                if (result !== null) {
                    res.status(200).json({
                        status: "success",
                        data: result,
                        time: moment(result.dataValues.createdAt).fromNow()
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
    create: (req, res) => {
        const {
            answer,
            reference,
        } = req.body
        const question_id = req.params.id
        const user_id = req.user.id
        Answers.create({
                id: nanoid(),
                answer: answer,
                reference: reference,
                user_id: user_id,
                question_id: question_id
            })
            .then(() => {
                res.redirect('/questions/' + question_id)
            })
            .catch(() => {
                res.redirect('/answer/'+ question_id +'?message=' + encodeURIComponent('input_salah'))
            })
    },
    update: (req, res) => {
        const {
            id,
            answer,
            reference,
            user_id,
            question_id
        } = req.body
        Answers.update({
                id: id,
                answer: answer,
                reference: reference,
                user_id: user_id,
                question_id: question_id
            }, {
                where: {
                    id: Number(req.params.id)
                }
            })
            .then(() => {
                res.status(201).json({
                    status: "success",
                    message: "Update Answers success!"
                })
            })
    },
    delete: (req, res) => {
        Answers.destroy({
                where: {
                    id: Number(req.params.id)
                }
            })
            .then(() => {
                res.status(200).json({
                    status: "success",
                    message: "Delete Answers success!"
                })
            })
    }
}