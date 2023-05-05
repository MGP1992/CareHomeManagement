const mongoose = require('mongoose');

const ResidentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dOB: {
        type: Date,
        required: true
    },
    residentID: {
        type: String,
        // required: true
    },
    homeLivingAt: {
        type: String,
        required: true
    }
});

module.exports = Resident = mongoose.model('resident', ResidentSchema);