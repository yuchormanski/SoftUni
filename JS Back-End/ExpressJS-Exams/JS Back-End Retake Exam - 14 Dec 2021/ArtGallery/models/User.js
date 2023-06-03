const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: { type: String, required: true, unique: true, minLength: [4, 'Username should be at least 4 characters long'] },
    address: { type: String, required: true, maxLength: [20, 'The address should be a maximum of 20 characters long'] },
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