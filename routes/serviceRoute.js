const router = require("express").Router()

// load controller
const serviceController = require("../controller/serviceController");

// set endpoint url
router.get("/service", serviceController.index)
router.get("/service/:id", serviceController.show)
router.post("/service", serviceController.create)
router.put("/service/:id", serviceController.update)
router.delete("/service/:id", serviceController.delete)

module.exports = router
