require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

const indexHome = require('./routes/home')
const indexRegister = require('./routes/register')
const indexLogin = require('./routes/login')
const indexQuestions = require('./routes/questions')

app.use('/', indexHome)
app.use('/register', indexRegister)
app.use('/login', indexLogin)
app.use('/questions', indexQuestions)
app.use('/api', require('./routes/authRoute'))
app.use('/category', require('./routes/categoryRoute'))
app.use('/question', require('./routes/questionRoute'))


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
})