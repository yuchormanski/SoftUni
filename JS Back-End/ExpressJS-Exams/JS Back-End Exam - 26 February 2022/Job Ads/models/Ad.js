const { Schema, model, Types } = require('mongoose');

const adSchema = new Schema({
    headline: {
        type: String,
        required: true,
        minLength: [4, 'The Headline should be a minimum of 4 characters long!']
    },
    location: {
        type: String,
        required: true,
        minLength: [8, 'The location should be a minimum of 8 characters long!']

    },
    companyName: {
        type: String,
        required: true,
        minLength: [3, 'The name should be a minimum of 3 characters long!']

    },
    companyDescription: {
        type: String,
        required: true,
        maxLength: [40, 'The description should be a maximum of 40 characters long!']

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