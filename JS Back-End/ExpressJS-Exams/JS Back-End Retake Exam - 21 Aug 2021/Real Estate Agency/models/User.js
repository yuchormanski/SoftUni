const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        match: [/^[A-Z][a-z]+\s[A-Z][a-z]+$/, 'Invalid name'],
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Username should be at least 5 characters long']
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
})

const User = model('User', userSchema);

module.exports = User;