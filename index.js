require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));
app.use(cookieParser())
app.set('view engine', 'ejs');

const landingPageRoute = require('./Routes/landingPageRoute')
const authRoute = require('./Routes/authRoute')
const dashboardRoute = require('./routes/dashboardRoute')
const answerRoute = require('./routes/answerRoute')
const subscriptionRoute = require ('./routes/subscriptionRoute')
const serviceRoute = require ('./routes/serviceRoute')
const transactionRoute = require ('./routes/transactionRoute')
const questionRoute = require('./routes/questionRoute')

app.use(landingPageRoute, authRoute)

app.use(function (error, req, res, next) {
    res.send(error)
})

app.use(dashboardRoute)
app.use(answerRoute)
app.use(subscriptionRoute)
app.use(serviceRoute)
app.use(transactionRoute)
app.use(questionRoute)

const port = process.env.PORT || 3000 
app.listen(port, () => {
    console.log(`yeee web server nya udah jalan di http://localhost:${port}`);
})