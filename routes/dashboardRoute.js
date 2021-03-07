const router = require("express").Router()

// load controller
const dashboardController = require("../controller/dashboardController");

// set endpoint url
router.get("/dashboard", dashboardController.index)
router.get("/dashboard/:id", dashboardController.show)
router.post("/dashboard", dashboardController.create)
router.put("/dashboard/:id", dashboardController.update)
router.delete("/dashboard/:id", dashboardController.delete)

module.exports = router