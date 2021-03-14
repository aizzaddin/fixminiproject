const {
    Users
} = require("../models")
const bcrypt = require('bcrypt')

module.exports = {
    show: (req, res) => {
        Users.findOne({
                where: {
                    id: req.user.id
                }
            })
            .then(result => {
                if (result !== null) {
                    res.status(200).json({
                        status: "success",
                        data: result
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
                res.status(201).json({
                    status: "success",
                    message: "Update Profile success!"
                })
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
        if (await bcrypt.compare(oldpassword, cekpassword.password)){
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
    }
}