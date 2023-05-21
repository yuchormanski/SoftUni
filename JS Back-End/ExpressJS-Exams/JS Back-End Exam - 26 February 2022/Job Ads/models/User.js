const { Schema, model } = require('mongoose');

const VALIDATE_EMAIL = /^[a-zA-Z]+@[a-zA-Z]\.[a-zA-Z]/;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Email should be at least 5 characters long'],
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
    description:{
        type: String,
        required: true,
        maxLength: [40,'The description of skills should be a maximum of 40 characters long']
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