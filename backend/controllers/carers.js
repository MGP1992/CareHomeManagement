const Carer = require("../models/carers");
const TokenGenerator = require("../models/token_generator");
const bcrypt = require("bcryptjs");

const CarersController = {
  Index: (req, res) => {
    Carer.find()
      .then((carers) => res.json(carers))
      .catch((err) =>
        res.status(404).json({ nocarers: "No Carers found in the database." })
      );
  },
  Create: (req, res) => {
    bcrypt.hash(req.body.password, 11).then((hashPassword) => {
      const newCarer = {
        email: req.body.email,
        password: hashPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        staffID: req.body.staffID,
      };
      const carer = new Carer(newCarer);
      console.log(carer);
      carer
        .save()
        .then((carer) => res.json({ message: "Carer successfully created!" }))
        .catch((err) =>
          res.status(400).json({ message: "Error creating carer." })
        );
    });
  },
  Delete: async (req, res) => {
    Carer.findByIdAndRemove(req.params.id, req.body)
      .then((carer) => res.json({ message: "Carer successfully deleted!" }))
      .catch((err) => res.status(404).json({ error: "No such a book" }));
  },
};

module.exports = CarersController;
