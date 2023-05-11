const express = require("express");
const router = express.Router();
const CarersController = require("../controllers/carers");

router.get("/", CarersController.Index);
router.post("/add", CarersController.Create);
router.post("/update", CarersController.Update);
router.delete("/:id", CarersController.Delete);

module.exports = router;
