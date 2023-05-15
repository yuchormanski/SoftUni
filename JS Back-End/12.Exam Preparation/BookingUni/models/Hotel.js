const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;
const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'Hotel name should be at least 4 character long'],
    },
    city: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Hotel name should be at least 3 character long'],
    },
    imgUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    rooms: {
        type: Number,
        min: [1, 'Rooms number must be between 1 and 100'],
        max: [100, 'Rooms number must be between 1 and 100'],
        required: true,

    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

hotelSchema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;