const { Schema, model, Types} = require('mongoose');


const cryptoSchema = new Schema({
    name:{
        type: String,
        required: true,
        minLength: [2, 'The Name should be at least two characters']
    },
    imageUrl:{
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'The Crypto Image should start with http:// or https://.'
        }
    },
    price:{
        type: Number,
        required: true,
        min: [0, 'The Price should be a positive number']
    },
    description:{
        type: String,
        required: true,
        minLength: [10,'The Description should be a minimum of 10 characters long']
    },
    payment:{
        type: String,
        required: true,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal']
    },
    buy:{
        type: [Types.ObjectId],
        ref: 'User',
    },
    owner:{
        type: Types.ObjectId,
        ref: 'User',
    },

});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;