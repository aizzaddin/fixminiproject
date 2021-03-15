const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
// load controller
const profileController = require("../controller/profileController");

// set endpoint url
router.get("/profile", restrict, profileController.index)
router.get("/profile/edit", restrict, profileController.indexupdate)
router.put("/profile/update", restrict, profileController.update)
router.get("/profile/password", restrict, profileController.getpassword)
router.put("/profile/password", restrict, profileController.updatepassword)
router.get("/profile/berlangganan", restrict, profileController.berlangganan)


module.exports = router