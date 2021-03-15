const router = require("express").Router()

// load controller
const subscriptionController = require("../controller/subscriptionController");

// set endpoint url
// router.get("/subscription", subscriptionController.index)
// router.get("/subscription/:id", subscriptionController.show)
router.post("/subscription", subscriptionController.create)

module.exports = router
