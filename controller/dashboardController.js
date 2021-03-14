const { Questions, Users } = require("../models")

module.exports = {
  index: (req, res) => {
    Questions.findAll({
      include: [{
        model: Users
      }]
    })
    .then(result => {
      res.status(200)
      res.render('beranda', { result: result })
    })
  },
  show: (req, res) => {
    Questions.findOne({
      where: { id: req.user.id }
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