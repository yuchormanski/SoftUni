const { Schema, model } = require('mongoose');


//TODO: add User properties and validation according to assignment requirements
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    firstName: {
        type: String,
        required: true,
        min: [1, 'The first and last names should be at least 1 character long!']
    },
    lastName: {
        type: String,
        required: true,
        min: [1, 'The first and last names should be at least 1 character long!']
    },
    hashedPassword: {
        type: String,
        required: true
    }
});

// userSchema.index({ username: 1 }, {
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
// })

const User = model('User', userSchema);

module.exports = User;