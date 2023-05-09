const express = require('express');
const router = express.Router();

const ResidentController = require('../controllers/residents')

router.get("/", ResidentController.Index);
router.get("/:id", ResidentController.FindByID);
router.post("/add", ResidentController.Create);
router.post("/add-note", ResidentController.AddNote);
router.delete("/:id", ResidentController.Delete);

module.exports = router;
