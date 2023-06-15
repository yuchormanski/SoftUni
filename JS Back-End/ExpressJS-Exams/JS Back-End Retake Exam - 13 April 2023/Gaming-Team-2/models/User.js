const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'The username should be at least 5 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, 'The email should be at least 10 characters long'],
        validate: [/^([\w]+@[a-z0-9]+\.[a-z0-9]+)$/i, 'Invalid email address'],
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
userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;