const express = require('express')
const app = express.Router()

app.get('/', (req, res) => { 
    res.send('ini landing page')
})

module.exports = app