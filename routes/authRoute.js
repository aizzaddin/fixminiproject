const express = require('express')
const UserController = require('../controller/userController')
const user = new UserController()
const app = express.Router()

app.get('/register', (req, res) => { 
    res.render('register')
})

app.post('/register', async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const result = await user.register(username, email, password, role)
    res.redirect('/login')
})

app.get('/login', (req, res) => { 
    res.render('login')
})

app.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const result = await user.login(username, password)
    res.send(result)
})

module.exports = app