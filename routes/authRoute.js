const express = require('express')
const UserController = require('../controller/userController')
const user = new UserController()
const app = express.Router()
const jwt = require('jsonwebtoken')

app.get('/register', (req, res) => { 
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, email, password, password2, role } = req.body
    const result = await user.register(username, email, password, password2 ,role)
    res.redirect('/login?message=' + encodeURIComponent('pendaftaran_berhasil'))
})

app.get('/login', (req, res) => { 
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const result = await user.login(username, password)
    const token = jwt.sign({ id : result }, process.env.JWT_SECRET)
    console.log(token);
    res.cookie('jwt', token)
    res.redirect('/dashboard')
})

app.get('/logout', (req, res) => {
    res.clearCookie('jwt')
    res.redirect('/login')
})

module.exports = app