const { Questions } = require("../models")

module.exports = {
  index: (req, res) => {
    Questions.findAll()
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result
      })
    })
  },
  show: (req, res) => {
    Questions.findOne({
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
    const { title, question, category, id} = req.body
    Questions.create({
      title: title,
      question: question,
      category_id: category,
      id: id
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create actor success!"
      })
    })
  },
  update: (req, res) => {
    const { title, question, category, id } = req.body
    Questions.update({
        title: title,
        question: question,
        category_id: category,
        id: id
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
    Questions.destroy({
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