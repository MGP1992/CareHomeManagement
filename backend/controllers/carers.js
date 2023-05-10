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
    let id = req.body.staffID;
    let checkEmail = null;
    let uniqueID = null;

    // const generateID = () => {
    //   const ID = `${req.body.firstName
    //     .slice(0, 2)
    //     .toUpperCase()}${req.body.lastName
    //     .slice(0, 2)
    //     .toUpperCase()}${Math.floor(Math.random() * 10)}${Math.floor(
    //     Math.random() * 10
    //   )}`;
    //   id = ID;
    // };

    // const idSearch = async () => {
    //   let user = await Carer.findOne({ staffID: id });
    //   if (user.staffID === id) {
    //     console.log("IT HAS FOUND THE USER");
    //     generateID();
    //     console.log("IT HAS REGERATED THE ID: ", id);
    //   } else {
    //     console.log("uniqueID has been marked");
    //     uniqueID = "generated";
    //   }
    // };

    // while (!uniqueID) {
    //   await idSearch();
    // }

    await Carer.findOne({ email: req.body.email }).then(
      (foundUser) => (checkEmail = foundUser)
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
    } else {
      bcrypt.hash(req.body.password, 11).then((hashPassword) => {
        const newCarer = {
          email: req.body.email,
          password: hashPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          staffID: id,
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
