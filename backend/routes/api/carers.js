const express = require("express");
const router = express.Router();

const Carer = require("../../models/Carers");

// Get all carers
router.get("/", (req, res) => {
  Carer.find()
    .then((carers) => res.json(carers))
    .catch((err) =>
      res.status(404).json({ nocarers: "No Carers found in the database." })
    );
});


// Carer sign up
router.post("/add", (req, res) => {
  Carer.create(req.body)
    .then((carer) => res.json({ message: "Carer successfully created!" }))
    .catch((err) =>
      res.status(400).json({ error: "Error creating the carer." })
    );
});
// Carer login
router.post('/auth', async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await Carer.findOne({ email: userEmail });
    if (!user || req.body.password !== user.password) {
      res.status(400).json({ message: "auth error" });
    } else {
      const {email, firstName, lastName, staffID } = user;
      res.status(201).json({
        user: {email, firstName, lastName, staffID }
      });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "server error" });
  }
});

// Delete carer by ID
router.delete("/:id", (req, res) => {
  Carer.findByIdAndRemove(req.params.id, req.body)
    .then((carer) => res.json({ message: "Carer successfully deleted!" }))
    .catch((err) => res.status(404).json({ error: "No such a book" }));
});

module.exports = router;
