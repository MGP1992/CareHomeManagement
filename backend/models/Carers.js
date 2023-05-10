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
});

module.exports = Carer = mongoose.model('carer', CarerSchema);