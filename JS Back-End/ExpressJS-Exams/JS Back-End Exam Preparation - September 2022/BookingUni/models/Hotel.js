const { Schema, model, Types } = require('mongoose');


const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'The name should be at least 4 characters'],
    },
    city: {
        type: String,
        required: true,
        minLength: [3, 'The city should be at least 3 characters'],

    },
    imageUrl: {
        type: String,
        required: true,
        match: [/(http(s?)):\/\//i, 'The imageUrl should starts with http or https'],
    },
    rooms: {
        type: Number,
        required: true,
        min: [1, 'Rooms count can\'t be less than 1'],
        max: [100, 'Max rooms count could be 100'],
    },
    booked: {
        type: [Types.ObjectId],
        ref: 'User',
    },
    _owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

hotelSchema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;