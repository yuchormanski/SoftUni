const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [5, 'Username is too short. Minimum allowed length is 5 symbols'],
        unique: true,
        // validate: {
        //     validator : function(value){
        //         return /^[a-zA-Z0-9]+$/;
        //     },
        //     message: 'Username should consist only latin letters and digits!'
        // }
        //same as above
        validate: [/^[a-zA-Z0-9]+$/, 'Username should consist only latin letters and digits!']

    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password is too short!'],
        validate: /^[a-zA-Z0-9]+$/

    }
});

// userSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         })
// });


//same as above , but wit async await
userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.method('validatePassword', function (password) { // не е необходимо да е асинхр. функция, защото резултата ни е нужен само за предикат
    return bcrypt.compare(password, this.password);
})

const User = mongoose.model('User', userSchema);

module.exports = User;
