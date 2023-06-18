const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true , 
        minLength: [10, 'Email should be at least 10 characters long']
    },
    hashedPassword: { 
        type: String, 
        required: true 
    }
});

userSchema.index({username:1}, {
    collation: {
        locale:'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;