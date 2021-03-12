const router = require('express').Router()

const dashboardController = require("../controller/dashboardController");

router.get('/', (req,res) => {
    res.send('ini page add question')
})
router.post("/new", dashboardController.create)
router.put("/edit/:id", dashboardController.update)
router.delete("/delete/:id", dashboardController.delete)

module.exports = router