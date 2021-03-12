const router = require("express").Router()

// load controller
const transactionController = require("../controller/transactionController");

// set endpoint url
router.get("/transaction", transactionController.index)
router.get("/transaction/:id", transactionController.show)
router.post("/transaction", transactionController.create)
router.put("/transaction/:id", transactionController.update)
router.delete("/transaction/:id", transactionController.delete)

module.exports = router
