const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
// load controller
const profileController = require("../controller/profileController");

// set endpoint url
router.get("/profile", restrict, profileController.index)
router.get("/profile/update", restrict, profileController.show)
router.put("/profile/update", restrict, profileController.update)
router.get("/profile/editpassword", restrict, profileController.getpassword)
router.put("/profile/editpassword", restrict, profileController.updatepassword)
router.get("/profile/berlangganan", restrict, profileController.berlangganan)


module.exports = router