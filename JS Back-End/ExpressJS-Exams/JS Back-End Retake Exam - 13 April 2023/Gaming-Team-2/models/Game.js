const { Schema, model, Types } = require('mongoose');


const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [4, 'The name should be at least four characters.']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/(http(s?)):\/\//i, 'The game image should start with "http://" or "https://"']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'The price should be a positive number.']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'The description should be at least ten characters long.']
    },
    genre: {
        type: String,
        required: true,
        minLength: [2, 'The genre should be at least two characters long.']
    },
    platform: {
        type: String,
        required: true,
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    },
    boughtBy: {
        type: [Types.ObjectId],
        ref: 'User'
    },
    _owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Game = model('Game', gameSchema);

module.exports = Game;

