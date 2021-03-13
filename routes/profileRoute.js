const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
// load controller
const profileController = require("../controller/profileController");

// set endpoint url
//router.get("/editprofile", restrict, profileController.index)
router.get("/profile", profileController.show)
router.put("/profile/update", profileController.update)
router.put("/profile/edit-password", profileController.updatepassword)

module.exports = router