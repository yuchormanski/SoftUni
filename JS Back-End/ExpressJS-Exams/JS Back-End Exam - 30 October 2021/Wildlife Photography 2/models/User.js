const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        validate: [/^([A-Za-z]{3,})$/i, 'The first name should be at least 3 characters long and contains only English letters']
    },
    lastName: {
        type: String,
        required: true,
        validate: [/^([A-Za-z]{5,})$/i, 'The last name should be at least 5 characters long and contains only English letters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Email should be at least 5 characters long'],
        validate: [/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/i, 'Only Latin letters are allowed for any of the parts of the email']
    },
    hashedPassword: {
        type: String,
        required: true
    }
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    })

const User = model('User', userSchema);

module.exports = User;