const router = require("express").Router()

// load controller
const cariController = require("../controller/cariControllers");

// set endpoint url
router.get("/search", cariController.index)
router.get("/cari?", cariController.show)
    //router.get("/search/open/jawaban?:id", cariController.showjawaban)


module.exports = router