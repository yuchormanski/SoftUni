const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
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

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;