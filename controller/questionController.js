const {
    Questions,
    Users
} = require("../models")
const {
    nanoid
} = require('nanoid')

module.exports = {
    index: (req, res) => {
        Users.findOne({
                where: {
                    id: req.user.id
                }
            })
            .then(result => {
                res.render('addquestion', {
                    username: result.username,
                    bio: result.bio
                })
            })
    },
    create: (req, res) => {
        const {
            title,
            question,
            category_id,
            departement_id,
            course_id
        } = req.body
        const user_id = req.user.id
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
                res.status(201)
                res.redirect('/dashboard')
            })
    },
    details: (req, res) => {
        Questions.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Users
            }]
        }).then(result => {
            res.render('questions', {
                title:  result.title,
                question: result.question,
                username: result.User.username
            })
        })
    },
    update: (req, res) => {
        const {
            id,
            title,
            question,
            category_id,
            departement_id,
            course_id,
            user_id
        } = req.body
        Questions.update({
                id: id,
                title: title,
                question: question,
                category_id: category_id,
                departement_id: departement_id,
                course_id: course_id,
                user_id: user_id
            }, {
                where: {
                    id: Number(req.params.id)
                }
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
                where: {
                    id: Number(req.params.id)
                }
            })
            .then(() => {
                res.status(200).json({
                    status: "success",
                    message: "Delete Question success!"
                })
            })
    }
}