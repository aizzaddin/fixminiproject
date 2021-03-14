const { Questions } = require("../models")
const moment = require("moment")
const {nanoid} = require('nanoid')

module.exports = {
  index: (req, res) => {
    Questions.findAll({
      attributes: ['title', 'user_id', 'question', 'category_id', 'course_id'],
  })
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result,
      })
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