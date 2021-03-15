const { Services, Users } = require("../models")

module.exports = {
  index: async (req, res) => {
    const id = req.user.id
    const nama = await Users.findOne({
      where: { id : id}
    })
    const services = await Services.findAll()
    res.render('berlangganan', {id, nama, services})
  //   Services.findAll()
  //   .then(result => {
  //     res.render('berlangganan', { id: req.user.id }) 
  //   })
  },
  show: (req, res) => {
    Services.findOne({
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
    const { id, service, period, price} = req.body
    Services.create({
        id: id,
        service: service,
        period: period,
        price: price
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create Services success!"
      })
    })
  },
  update: (req, res) => {
    const { id, service, period, price} = req.body
    Services.update({
        id: id,
        service: service,
        period: period,
        price: price
    }, {
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Update Services success!"
      })
    })
  },
  delete: (req, res) => {
    Services.destroy({
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Delete Services success!"
      })
    })
  }
}
