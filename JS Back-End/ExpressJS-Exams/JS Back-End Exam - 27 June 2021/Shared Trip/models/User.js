const { Schema, model } = require('mongoose');

const VALIDATE_EMAIL = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // minLength: [3, 'Email should be at least 3 characters long']
        validate: {
            validator(value) {
                return VALIDATE_EMAIL.test(value);
            },
            message: 'Invalid email address!'
        }
    },
    hashedPassword: { 
        type: String, 
        required: true 
    },
    gender: {
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