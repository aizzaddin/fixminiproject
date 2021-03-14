const router = require('express').Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
const questionController = require("../controller/questionController");

router.get('/', questionController.index)
router.post("/new", questionController.create)
router.put("/edit/:id", restrict, questionController.update)
router.delete("/delete/:id", restrict, questionController.delete)

module.exports = router