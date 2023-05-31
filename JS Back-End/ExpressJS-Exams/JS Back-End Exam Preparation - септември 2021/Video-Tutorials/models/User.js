const { Schema, model } = require('mongoose');


const VALID = /^[a-zA-Z0-9]{5,}$/;

const userSchema = new Schema({
    username: {
        type: String, required: true, unique: true, validate: {
            validator(value) {
                return VALID.test(value);
            },
            message: 'The Username should be at least 5 characters long and should consist only english letters and digits'
        }
    },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;