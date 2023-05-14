const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    ownerId: {
        type: String,
        required: true
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);


module.exports = Crypto;