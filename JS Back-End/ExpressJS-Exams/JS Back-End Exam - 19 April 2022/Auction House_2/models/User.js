const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique: true,
        validate: [/^([A-Za-z]+@[A-Za-z]+\.[A-Za-z]+)$/i, 'Only English letters are allowed for any of the parts of the email']
    },
    firstName: { 
        type: String, 
        required: true, 
        minLength: [1, 'First name should be at least 1 character long']
    },
    lastName: { 
        type: String, 
        required: true, 
        minLength: [1, 'Last name should be at least 1 character long']
    },
    hashedPassword: { 
        type: String, 
        required: true 
    }
});

userSchema.index({email:1}, {
    collation: {
        locale:'en',
        strength: 2
    }
});
userSchema.virtual('fullName')
  .get(function() { 
    return `${this.firstName} ${this.lastName}`; 
});

const User = model('User', userSchema);

module.exports = User;