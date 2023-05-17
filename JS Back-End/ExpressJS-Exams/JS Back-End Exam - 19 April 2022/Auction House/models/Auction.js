const { Schema, model, Types } = require('mongoose');

const IMAGE_PATTERN = /^https?:\/\/.+\.(jpg|jpeg|png)$/;

const auctionSchema = new Schema({

    auctionTitle: {
        type: String,
        required: true,
        minLength: 4
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        validate: {
            validator(value) {
                return IMAGE_PATTERN.test(value);
            },
            message: 'Image must be of type JPG, JPEG or PNG'
        }
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'The price cannot be negative!']
    },
    author: {
        type: Types.ObjectId,
        required: true,
        ref: 'User'
    },
    bidder: {
        type: [Types.ObjectId],
        ref: 'User'
    }
});

const Auction = model('Auction', auctionSchema);

module.exports = Auction;