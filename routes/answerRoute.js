const router = require("express").Router()

// load controller
const answerController = require("../controller/answerController");

// set endpoint url
router.get("/answer", answerController.index)
router.get("/answer/:id", answerController.show)
router.post("/answer", answerController.create)
router.put("/answer/:id", answerController.update)
router.delete("/answer/:id", answerController.delete)

module.exports = router