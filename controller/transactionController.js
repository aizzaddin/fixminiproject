const { Transactions } = require("../models")

module.exports = {
  index: (req, res) => {
    Transactions.findAll()
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result
      })
    })
  },
  show: (req, res) => {
    Transactions.findOne({
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
    const { id, next_payment, user_id, services_id} = req.body
    Transactions.create({
        id: id,
        next_payment: next_payment,
        user_id: user_id,
        services_id: services_id
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create Transactions success!"
      })
    })
  },
  update: (req, res) => {
    const { id, next_payment, user_id, services_id} = req.body
    Transactions.update({
        id: id,
        next_payment: next_payment,
        user_id: user_id,
        services_id: services_id
    }, {
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Update Transactions success!"
      })
    })
  },
  delete: (req, res) => {
    Transactions.destroy({
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Delete Transactions success!"
      })
    })
  }
}
