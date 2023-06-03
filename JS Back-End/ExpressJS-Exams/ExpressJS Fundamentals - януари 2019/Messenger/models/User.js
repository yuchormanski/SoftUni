const { Schema, model, Types } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    blockedUsers: {
        type: [Types.ObjectId],
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
});

userSchema.virtual('fullName').
    get(function () { return `${this.firstName} ${this.lastName}`; }).
    set(function (v) {
        const firstName = v.substring(0, v.indexOf(' '));
        const lastName = v.substring(v.indexOf(' ') + 1);
        this.set({ firstName, lastName });
    });

const User = model('User', userSchema);

module.exports = User;