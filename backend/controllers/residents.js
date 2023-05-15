const Resident = require("../models/residents");
// const TokenGenerator = require("../models/token_generator");
const bcrypt = require("bcryptjs");

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
  Create: async (req, res) => {
    console.log(req.body)

    let checkID = null;

    if (req.body.admin !== true) {
      return res.status(401).json({ message: "You must be an administrator to add residents" });
    }
    

    await Resident.findOne({ residentID: req.body.residentID }).then(
      (foundUser) => (checkID = foundUser)
    );

    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.DOB ||
      !req.body.password
    ) {
      return res.status(401).json({ message: "Please fill all fields." });
    } else if (checkID) {
      res
        .status(401)
        .json({ message: "Error generating Resident ID, please try again." });
    } else {
      bcrypt.hash(req.body.password, 11).then((hashPassword) => {
        const newResident = {
          password: hashPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          DOB: req.body.DOB,
          residentID: req.body.residentID,
        };
        const resident = new Resident(newResident);
        resident
          .save()
          .then((resident) =>
            res.status(201).json({ message: "Resident successfully created!" })
          )
          .catch((err) =>
            res.status(400).json({ message: "Error creating resident." })
          );
      });
    }
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

  SearchFunction: async (req, res) => {
    // We look for a query parameter "search"
    const { search } = req.query;

    let residents; 
    if (search) {
      // If search exists, the user typed in the search bar
      residents = await Resident.aggregate([
        {
          $search: {
            index: "default",
            autocomplete: {
              query: search, // assign a dynamic value to "query"
              path: "firstName",
            },
          },
        },
        {
          $limit: 5,
        },
        {
          $project: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            notes: 1,
            residentID: 1,
          },
        },
      ]);
    } else {
      // The search is empty so give an error
      residents = await Resident.find()

      }
      return res.status(200).json({
        resident: residents,
      });

      // else { // The search is empty so the value of "search" is undefined
      //   posts = await Post.find();
    }

    // if (residents.length === 0) {
    //   return res.status(404).json({
    //     statusCode: 404,
    //     message: "There are no residents with this name",
    //   });
    // }
    
  }

module.exports = ResidentsController;
