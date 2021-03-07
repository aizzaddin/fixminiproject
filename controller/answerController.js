const { Answers } = require("../models")

module.exports = {
  index: (req, res) => {
    Answers.findAll()
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result
      })
    })
  },
  show: (req, res) => {
    Answers.findOne({
      where: { id: Number(req.params.id) }
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
  create: (req, res) => {
    const { id, answer, category, user, question} = req.body
    Answers.create({
      id: id,
      answer: answer,
      category_id: category,
      user_id: user,
      question_id: question
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create actor success!"
      })
    })
  },
  update: (req, res) => {
    const { id, answer, category, user, question} = req.body
    Answers.update({
        id: id,
        answer: answer,
        category_id: category,
        user_id: user,
        question_id: question
    }, {
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Update actor success!"
      })
    })
  },
  delete: (req, res) => {
    Answers.destroy({
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Delete actor success!"
      })
    })
  }
}