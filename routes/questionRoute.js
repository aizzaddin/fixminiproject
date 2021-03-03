const express = require('express')
const QuestionController = require('../controller/questionController')
const question = new QuestionController()
const app = express.Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await question.get({
        user_id: req.user.id,
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await question.add({
        user_id: req.user.id,
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await question.edit(params.id, body)
    res.send("ok")
})

app.delete('/', restrict, async (req, res) => {
    const { params } = req
    await question.remove(params.id)
    res.send("ok")
})

module.exports = app