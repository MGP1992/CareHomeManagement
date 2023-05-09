const Resident = require("../models/residents");
// const TokenGenerator = require("../models/token_generator");

const ResidentsController = {
  Index: (req, res) => {
    Resident.find()
      .then((residents) => {
        residents.map((resident) => {
          resident.password = undefined; // Removes password from array of residents
        });
        res.json(residents);
      })
      .catch((err) =>
        res
          .status(404)
          .json({ noresident: "No Residents found in the database." })
      );
  },
  FindByID: (req, res) => {
    Resident.findOne({ residentID: req.params.id })
      .then((resident) => res.json(resident))
      .catch((err) =>
        res
          .status(404)
          .json({ nocarer: "No Resident found in the database with that ID." })
      );
  },
  Create: (req, res) => {
    Resident.create(req.body)
      .then((resident) =>
        res.json({ message: "Resident successfully created!" })
      )
      .catch((err) =>
        res.status(400).json({ error: "Error creating the resident." })
      );
  },
  Delete: async (req, res) => {
    Resident.findByIdAndRemove(req.params.id, req.body)
      .then((resident) =>
        res.json({ message: "Resident successfully deleted!" })
      )
      .catch((err) => res.status(404).json({ error: "No such resident" }));
  },
  AddNote: async (req, res) => {
    const category = req.body.category;
    const notes = req.body.notes;
    const resident = await Resident.findOne({
      residentID: req.body.residentID,
    });
    resident.notes[category].push(notes);
    resident
      .save()
      .then((resident) => res.status(201).json({ message: "Yes!" }))
      .catch((err) => res.status(404).json({ error: "Error adding notes" }));
  },
};

module.exports = ResidentsController;
