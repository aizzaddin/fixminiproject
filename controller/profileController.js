const {
    Users,
    Questions,
    Categories,
    Departements,
    Courses,
} = require("../models")
const bcrypt = require('bcrypt')

module.exports = {
    index: async (req, res) => {
        const questions = await Questions.findOne({
            where: {user_id : req.user.id },
            include: [{
                model: Users
            }]
        })
        const categories = await Categories.findAll({
            attribute: ['category']
        })
        const departements = await Departements.findAll({
            attribute: ['departement']
        })
        const courses = await Courses.findAll({
            attribute: ['course']
        })
    },
    show: (req, res) => {
        Users.findOne({
                where: {
                    id: req.user.id
                }
            })
            .then(result => {
                if (result !== null) {
                    res.render('profile', {
                        name: result.name,
                        username: result.username,
                        email: result.email,
                        bio: result.bio,
                        site: result.site,
                        phoneNumber: result.phoneNumber,
                        gender: result.gender
                    })
                } else {
                    res.status(200).json({
                        status: "success",
                        message: "Data not found!",
                        data: result
                    })
                }
            })
    },
    update: (req, res) => {
        const {
            name,
            username,
            email,
            password,
            password2,
            bio,
            site,
            phoneNumber,
            gender
        } = req.body
        Users.update({
                name: name,
                username: username,
                email: email,
                password: password,
                password2: password2,
                bio: bio,
                site: site,
                phoneNumber: phoneNumber,
                gender: gender
            }, {
                where: {
                    id: req.user.id
                }
            })
            .then(() => {
                res.status(201)
                res.redirect('/profile')
            })
    },
    updatepassword: async (req, res) => {
        const {
            oldpassword,
            password,
            password2
        } = req.body
        const cekpassword = await Users.findOne({
            where: {
                id: req.user.id
            }
        })
        if (await bcrypt.compare(oldpassword, cekpassword.password)) {
            Users.update({
                    password: await bcrypt.hash(password, 10),
                    password2: await bcrypt.hash(password2, 10)
                }, {
                    where: {
                        id: req.user.id
                    }
                })
                .then(() => {
                    res.status(201).json({
                        status: "success",
                        message: "Update Profile success!"
                    })
                })
        } else {
            res.status(201).json({
                status: "failed",
                message: "Update Password Failed!"
            })
        }
    },
    getpassword: (req, res) => {
        res.render('setelan-editPassword')
    },
    berlangganan: (req, res) => {
        res.render('setelan-berlangganan')
    }
}