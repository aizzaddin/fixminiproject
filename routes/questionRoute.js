const router = require('express').Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
const questionController = require("../controller/questionController");

router.get('/', restrict, questionController.index)
router.post("/new", restrict, questionController.create)
router.get("/:id", restrict, questionController.details)
// router.put("/edit/:id", restrict, questionController.update)
// router.delete("/delete/:id", restrict, questionController.delete)

module.exports = router