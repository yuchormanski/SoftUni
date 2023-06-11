const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/i,
    },
    username: {
        type: String,
        required: true,
        unique: true,
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
userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;