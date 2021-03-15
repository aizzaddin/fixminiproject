const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false, failureRedirect: '/login' })
    // load controller
const cariController = require("../controller/cariControllers");

// set endpoint url
router.get("/search", cariController.index)
router.get("/cari?", restrict, cariController.show)
router.get("/filter?", cariController.filter)



module.exports = router