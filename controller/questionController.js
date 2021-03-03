const { Questions } = require('../models')
const BaseController = require('./baseController')

class QuestionController extends BaseController {
    constructor() {
        super(Questions)
    }
}

module.exports = QuestionController