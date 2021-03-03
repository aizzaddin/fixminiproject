const express = require('express')
const CategoryController = require('../controller/categoryController')
const category = new CategoryController()
const app = express.Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await category.get({
        user_id: req.user.id,
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await category.add({
        user_id: req.user.id,
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await category.edit(params.id, body)
    res.send("ok")
})

app.delete('/', restrict, async (req, res) => {
    const { params } = req
    await category.remove(params.id)
    res.send("ok")
})

module.exports = app