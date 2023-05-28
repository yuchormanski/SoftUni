const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    firstName: { type: String, required: true, minLength: [3, 'First name should be at least 3 characters long'] },
    lastName: { type: String, required: true, minLength: [5, 'Last name should be at least 5 characters long'] },
    email: { type: String, required: true, minLength: [5, 'Last name should be at least 5 characters long'], unique: true },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;