const { Transactions, Services } = require("../models")
const moment = require('moment')

module.exports = {
  index: (req, res) => {
    Transactions.findAll()
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result
      })
      res.render('transaction', {
        id: result.id,
        time1: result.time1
      })
    })
  },
  show: (req, res) => {
    Services.findOne({
      where: { id: req.params.id }
    })
    .then(result => {
      if (result !== null) {
          res.render('pembayaran', {
            id: Date.now().toString(),
            service: result.dataValues.service,
            period: result.dataValues.period,
            price: result.dataValues.price,
            time1: moment(result.dataValues.createdAt).add(365, 'days').calendar(),
            time2: moment(result.dataValues.createdAt).add(90, 'days').calendar(),
            time3: moment(result.dataValues.createdAt).add(30, 'days').calendar()
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
