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
  Create: async (req, res) => {
    let checkEmail = null;
    let checkID = null;
    console.log("PROFILE PIC IN BACKEND: ", req.body.profilePic)
    await Carer.findOne({ email: req.body.email }).then(
      (foundUser) => (checkEmail = foundUser)
    );

    await Carer.findOne({ staffID: req.body.staffID }).then(
      (foundUser) => (checkID = foundUser)
    );
  
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password
    ) {
      return res.status(401).json({ message: "Please fill all fields." });
    } else if (checkEmail) {
      res.status(401).json({ message: "Email is already in use." });
    } else if (checkID) {
      res.status(401).json({ message: "Error generating Staff ID, please try again." });
    } else {
      bcrypt.hash(req.body.password, 11).then((hashPassword) => {
        const newCarer = {
          email: req.body.email,
          password: hashPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          staffID: req.body.staffID,
          profilePic: req.body.profilePic
        };
        const carer = new Carer(newCarer);
        console.log(carer);
        carer
          .save()
          .then((carer) =>
            res.status(201).json({ message: "Carer successfully created!" })
          )
          .catch((err) =>
            res.status(400).json({ message: "Error creating carer." })
          );
      });
    }
  },
  Delete: async (req, res) => {
    Carer.findByIdAndRemove(req.params.id, req.body)
      .then((carer) => res.json({ message: "Carer successfully deleted!" }))
      .catch((err) => res.status(404).json({ error: "No such a book" }));
  },
};

module.exports = CarersController;
