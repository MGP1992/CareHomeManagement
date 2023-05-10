const mongoose = require('mongoose');

const CarerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    staffID: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://imgur.com/na6zgUo.png"
    }
});

module.exports = Carer = mongoose.model('carer', CarerSchema);