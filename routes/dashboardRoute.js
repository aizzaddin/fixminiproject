const router = require("express").Router()

// load controller
const dashboardController = require("../controller/dashboardController");

// set endpoint url
router.get("/dashboard", dashboardController.index)
router.get("/dashboard/:id", dashboardController.show)

module.exports = router