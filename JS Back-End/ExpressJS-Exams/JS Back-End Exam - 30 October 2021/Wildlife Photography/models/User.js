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
});

userSchema.virtual('fullName').
    get(function () { return `${this.firstName} ${this.lastName}`; }).
    set(function (user) {
        const firstName = user.firstName;
        const lastName = user.lastName;
        this.set({ firstName, lastName });
    });

const User = model('User', userSchema);

module.exports = User;