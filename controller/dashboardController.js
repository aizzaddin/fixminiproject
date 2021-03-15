const {
  Questions,
  Users,
  Categories,
  Departements,
  Courses
} = require("../models")
const moment = require('moment')

module.exports = {
  index: async (req, res) => {
    const questions = await Questions.findAll({
      order: [
        ['createdAt', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
      ],
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
    const nama = await Users.findOne({
      where: {
        id: req.user.id
      }
    })
    // console.log(nama);
    res.render('dashboard', {
      questions,
      moment,
      categories,
      departements,
      courses,
      nama
    })
    // Questions.findAll({
    //   include: [{
    //     model: Users
    //   }]
    // })
    // // const category = Categories
    // .then(result => {
    //   res.status(200)
    //   res.render('beranda', { result: result })
    // })
  },
  show: (req, res) => {
    Questions.findOne({
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
}