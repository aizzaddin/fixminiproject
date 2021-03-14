const router = require("express").Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
// load controller
const transactionController = require("../controller/transactionController");

// set endpoint url
router.get("/transaction", restrict, transactionController.index)
router.get("/transaction/:id", restrict, transactionController.show)
router.post("/transaction", restrict, transactionController.create)
router.put("/transaction/:id", restrict, transactionController.update)
router.delete("/transaction/:id", restrict, transactionController.delete)

module.exports = router
