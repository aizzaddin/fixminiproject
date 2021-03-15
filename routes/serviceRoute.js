const router = require("express").Router()

// load controller
const serviceController = require("../controller/serviceController");

// set endpoint url
router.get("/berlangganan", serviceController.index)
router.get("/berlangganan/:id", serviceController.show)
router.post("/berlangganan", serviceController.create)
router.put("/berlangganan/:id", serviceController.update)
router.delete("/berlangganan/:id", serviceController.delete)

module.exports = router
