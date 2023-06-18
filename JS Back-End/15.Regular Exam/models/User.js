const { Schema, model } = require('mongoose');


//TODO: add User properties and validation according to assignment requirements
const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true , 
        minLength: [3, 'Username should be at least 3 characters long']
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