const { Subscriptions } = require("../models")

module.exports = {
  index: (req, res) => {
    Subscriptions.findAll()
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result
      })
    })
  },
  show: (req, res) => {
    Subscriptions.findOne({
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
    const { id, email} = req.body
    Subscriptions.create({
        id: id,
        email: email
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create Subscriptions success!"
      })
    })
  },
 
}
