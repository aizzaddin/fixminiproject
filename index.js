require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const fs = require('fs')

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname +'/'));
app.use(cookieParser())
app.set('view engine', 'ejs');

const landingPageRoute = require('./routes/landingPageRoute')
const authRoute = require('./routes/authRoute')
const dashboardRoute = require('./routes/dashboardRoute')
const answerRoute = require('./routes/answerRoute')
const subscriptionRoute = require('./routes/subscriptionRoute')
const serviceRoute = require('./routes/serviceRoute')
const transactionRoute = require('./routes/transactionRoute')
const questionRoute = require('./routes/questionRoute')
const cariRoute = require('./routes/cariRoute')
const profileRoute = require('./routes/profileRoute')
const uploadRoute = require('./routes/uploadRoute')

app.use(function(error, req, res, next) {
    res.send(error)
})

app.use(landingPageRoute)
app.use(authRoute)
app.use(dashboardRoute)
app.use(answerRoute)
app.use(subscriptionRoute)
app.use(serviceRoute)
app.use(transactionRoute)
app.use(cariRoute)
app.use('/post', questionRoute)
app.use(profileRoute)
app.use(uploadRoute)

const filesDir = path.join(path.dirname(require.main.filename), "uploads");
if (!fs.existsSync(filesDir)){
  fs.mkdirSync(filesDir);
}

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`yeee web server nya udah jalan di http://localhost:${port}`);
})