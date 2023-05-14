const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cryptos: []

    // }, {
    //     virtuals: {
    //         repeatPassword: {
    //             set(value) {
    //                 if (this.password !== this.value) {
    //                     throw mongoose.Error(`Passwords don't match!`);
    //                 }
    //             }
    //         }
    //     }

});

// userSchema.virtual('repeatPassword').set(function (value) {
//     if (this.password !== this.value) {
//         throw mongoose.Error(`Passwords don't match!`);
//     }
// });

const User = mongoose.model('User', userSchema);


module.exports = User;