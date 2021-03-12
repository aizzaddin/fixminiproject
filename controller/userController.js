const { Users } = require('../models')
const bcrypt = require('bcrypt')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class UserController extends BaseController {
    constructor() {
        super(Users)
    }

    async register(username, email, password, password2, role) {
        const payload = {
            id: nanoid(),
            username,
            email,
            role,
            password: await bcrypt.hash(password, 10),
            password2: await bcrypt.hash(password2, 10)
        }
        const result = await Users.create(payload)
        return {
            id: result.id,
            username: result.username,
        }
    }

    async login(username, password) {
        const user = await Users.findOne({
            where: { username }
        })
        if (await bcrypt.compare(password, user.password)) {
            return user.id
        } else {
            return "wrong password"
        }
    }
}

module.exports = UserController