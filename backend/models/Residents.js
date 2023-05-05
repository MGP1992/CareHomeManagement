const mongoose = require("mongoose");

const ResidentSchema = new mongoose.Schema({
  password: {
    type: String,
    default: "password1!",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  residentID: {
    type: String,
    required: true,
  },
  // residency: {
  //     type: String,
  //     required: true
  // refer to business account that creates the resident
  // },
  notes: {
    activities: [
      {
        type: String, 
      },
    ],
    medication: [
      {
        type: String,
      },
    ],
    wellbeing: [
      {
        type: String,
      },
    ],
    other: [
      {
        type: String,
      },
    ],
  },
});

module.exports = Resident = mongoose.model("resident", ResidentSchema);
