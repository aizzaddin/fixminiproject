const router = require("express").Router()

// load controller
const cariController = require("../controller/cariControllers");

// set endpoint url
router.get("/search", cariController.index)
router.get("/cari?", cariController.show)
router.get("/filter?", cariController.filter)



module.exports = router