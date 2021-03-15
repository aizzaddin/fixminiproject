const {
    Questions,
    Users,
    Categories,
    Departements,
    Courses,
    Answers
} = require("../models")
const {
    nanoid
} = require('nanoid')
const moment = require('moment')

module.exports = {
    index: async (req, res) => {
        const user = await Users.findOne({
            where: {
                id: req.user.id
            }
        })
        const categories = await Categories.findAll()
        const departements = await Departements.findAll()
        const courses = await Courses.findAll()
        res.render('addquestion', {
            user,
            categories,
            departements,
            courses
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
                // console.log(category_id, departement_id, course_id),
                    res.redirect('/dashboard')
            })
            .catch(() => {
                // console.log(category_id, departement_id, course_id);
                res.redirect('/questions?message=' + encodeURIComponent('input_salah'))
            })
    },
    details: async (req, res) => {
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
        res.render('questions', {questions, moment, users, categories, departements, courses, answers, nama})
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