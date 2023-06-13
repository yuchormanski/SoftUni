const { Schema, model, Types } = require('mongoose');


const auctionSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [4, 'The title should be a minimum of 4 characters long']
    },
    description: {
        type: String,
        maxLength: [200, 'The description should be a maximum of 200 characters long']
    },
    category: {
        type: String,
        required: true,
        enum: ['vehicles', 'estate', 'electronics', 'furniture', 'other']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/(http(s?)):\/\//i, 'The photo image should start with http:// or https://']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'The price cannot be negative']
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bidder: {
        type: Types.ObjectId,
        ref: 'User',
    },
    bidderPrice : {
        type: Number,
    }
});

const Auction = model('Auction', auctionSchema);

module.exports = Auction;