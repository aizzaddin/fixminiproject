const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
// load controller
const answerController = require("../controller/answerController");

// set endpoint url
// router.get("/answer", restrict, answerController.index)
router.get("/answer/:id", restrict, answerController.index)
router.post("/answer/:id", restrict, answerController.create)
router.put("/answer/:id", restrict, answerController.update)
router.delete("/answer/:id", restrict, answerController.delete)

module.exports = router