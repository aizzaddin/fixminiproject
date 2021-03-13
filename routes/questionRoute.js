const router = require('express').Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', {session: false, failureRedirect: '/login'})
const dashboardController = require("../controller/dashboardController");

router.get('/', (req,res) => {
    res.send('ini page add question')
})
router.post("/new", restrict, dashboardController.create)
router.put("/edit/:id", restrict, dashboardController.update)
router.delete("/delete/:id", restrict, dashboardController.delete)

module.exports = router