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
    const { id, title, question, media_id, category_id, departement_id, course_id, user_id} = req.body
    Questions.create({
      id: id,
      title: title,
      question: question,
      media_id: media_id,
      category_id: category_id,
      departement_id: departement_id,
      course_id: course_id,
      user_id: user_id
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create Question success!"
      })
    })
  },
  update: (req, res) => {
    const { id, title, question, media_id, category_id, departement_id, course_id, user_id} = req.body
    Questions.update({
      id: id,
      title: title,
      question: question,
      media_id: media_id,
      category_id: category_id,
      departement_id: departement_id,
      course_id: course_id,
      user_id: user_id
    }, {
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Update Question success!"
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
        message: "Delete Question success!"
      })
    })
  }
}