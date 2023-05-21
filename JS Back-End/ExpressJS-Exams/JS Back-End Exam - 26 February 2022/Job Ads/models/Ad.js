const { Schema, model, Types } = require('mongoose');

const adSchema = new Schema({
    headline: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    companyDescription: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    usersApplied: {
        type: [Types.ObjectId],
        ref: "User",
    }
});

const Ad = model('Ad', adSchema);


module.exports = Ad;