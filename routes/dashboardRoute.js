const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
// load controller
const dashboardController = require("../controller/dashboardController");

// set endpoint url
router.get("/dashboard", restrict, dashboardController.index)
// router.get("/dashboard/:id", restrict, dashboardController.show)

module.exports = router