const { Questions } = require("../models")
const moment = require("moment")
const {nanoid} = require('nanoid')

module.exports = {
    index: (req, res) => {
        Questions.findAll({
                attributes: ['title', 'user_id', 'question', 'category_id', 'course_id'],
            })
            .then(result => {
                const newArray = result.map(data => ({
                    id: data.id, 
                    title: data.title,
                    question: data.question,
                    category_id: data.category_id,
                    departement_id: data.departement_id,
                    course_id: data.course_id,
                    user_id: data.user_id,
                    createdAt: moment(data.createdAt).fromNow(),
                    updatedAt: moment(data.updateAt).fromNow()
                    }))
                res.status(200).json({
                    status: "success",
                    data: newArray
                })
            })
    },
    show: (req, res) => {
        Questions.findOne({
                where: { id: Number(req.params.id) }
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
        const { title, question, category_id, departement_id, course_id, user_id } = req.body
        Questions.create({
                id: nanoid(),
                title: title,
                question: question,
                category_id: category_id,
                departement_id: departement_id,
                course_id: course_id,
                user_id: user_id
            })
            .then(() => {
                res.status(201).json({
                    status: "success",
                    message: "Create Question success!"
                })
            })
    },
    update: (req, res) => {
        const { id, title, question, category_id, departement_id, course_id, user_id } = req.body
        Questions.update({
                id: id,
                title: title,
                question: question,
                category_id: category_id,
                departement_id: departement_id,
                course_id: course_id,
                user_id: user_id
            }, {
                where: { id: Number(req.params.id) }
            })
            .then(() => {
                res.status(201).json({
                    status: "success",
                    message: "Update Question success!"
                })
            })
    },
    delete: (req, res) => {
        Questions.destroy({
                where: { id: Number(req.params.id) }
            })
            .then(() => {
                res.status(200).json({
                    status: "success",
                    message: "Delete Question success!"
                })
            })
    }
}