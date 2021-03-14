const { Answers } = require("../models")
const moment = require("moment")
const {nanoid} = require('nanoid')

module.exports = {
    index: (req, res) => {
        Answers.findAll()
            .then(result => {
                const newArray = result.map(data => ({
                id: data.id, 
                answer: data.answer,
                reference: data.reference,
                user_id: data.user_id,
                question_id: data.question_id,
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
        Answers.findOne({
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
        const { answer, reference, user_id, question_id } = req.body
        Answers.create({
                id: nanoid(),
                answer: answer,
                reference: reference,
                user_id: user_id,
                question_id: question_id
            })
            .then(() => {
                res.status(201).json({
                    status: "success",
                    message: "Create Answer success!"
                })
            })
    },
    update: (req, res) => {
        const { id, answer, reference, user_id, question_id } = req.body
        Answers.update({
                id: id,
                answer: answer,
                reference: reference,
                user_id: user_id,
                question_id: question_id
            }, {
                where: { id: Number(req.params.id) }
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
                where: { id: Number(req.params.id) }
            })
            .then(() => {
                res.status(200).json({
                    status: "success",
                    message: "Delete Answers success!"
                })
            })
    }
}