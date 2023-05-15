const Carer = require("../models/carers");
const Resident = require("../models/residents");
const TokenGenerator = require("../models/token_generator");
const bcrypt = require("bcryptjs");

const SessionsController = {
  Create: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (req.body.typeOfUser === "Carer") {
      const user = await Carer.findOne({ email: email });
      if (!email) {
        res.status(422).json({ message: "Please enter an email." });
      } else if (!password) {
        res.status(422).json({ message: "Please enter a password." });
      } else if (!user) {
        res.status(401).json({ message: "Account not found." });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              const token = TokenGenerator.jsonwebtoken(user.id);
              const { staffID, email, firstName, lastName, profilePic } = user;
              res.status(201).json({
                token: token,
                message: "Sign in successful!",
                user: { staffID, email, firstName, lastName, profilePic },
              });
            } else {
              res
                .status(401)
                .json({ message: "Email or password is invalid." });
            }
          })
          .catch((err) => {
            throw err;
          });
      }
    // } else if (req.body.typeOfUser === "Business") {
    //   const user = await Business.findOne({ email: email });
    //   if (!email) {
    //     res.status(422).json({ message: "Please enter an email." });
    //   } else if (!password) {
    //     res.status(422).json({ message: "Please enter a password." });
    //   } else if (!user) {
    //     res.status(401).json({ message: "Account not found." });
    //   } else {
    //     bcrypt
    //       .compare(password, user.password)
    //       .then((match) => {
    //         if (match) {
    //           const token = TokenGenerator.jsonwebtoken(user.id);
    //           const { businessID, email, firstName, lastName, profilePic } = user;
    //           res.status(201).json({
    //             token: token,
    //             message: "Sign in successful!",
    //             user: { businessID, email, firstName, lastName, profilePic },
    //           });
    //         } else {
    //           res
    //             .status(401)
    //             .json({ message: "Email or password is invalid." });
    //         }
    //       })
    //       .catch((err) => {
    //         throw err;
    //       });
    //   }
    } else if (req.body.typeOfUser === "Family Member") {
      const user = await Resident.findOne({ residentID: req.body.email });
      if (!req.body.email) {
        res.status(422).json({ message: "Please enter a resident ID." });
      } else if (!req.body.password) {
        res.status(422).json({ message: "Please enter a password." });
      } else if (!user) {
        res.status(401).json({ message: "Account not found." });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((match) => {
            if (match) {
              const token = TokenGenerator.jsonwebtoken(user.id);
              const { residentID, email, firstName, lastName, profilePic } = user;
              res.status(201).json({
                token: token,
                message: "Sign in successful!",
                user: { residentID, email, firstName, lastName, profilePic },
              });
            } else {
              res
                .status(401)
                .json({ message: "Email or password is invalid." });
            }
          })
          .catch((err) => {
            throw err;
          });
      }
    }
  },
};

module.exports = SessionsController;
