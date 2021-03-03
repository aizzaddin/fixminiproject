const express = require('express')
const app = express()

app.get('/', (req,res,next) => {
    res.render('register')
})

module.exports = app