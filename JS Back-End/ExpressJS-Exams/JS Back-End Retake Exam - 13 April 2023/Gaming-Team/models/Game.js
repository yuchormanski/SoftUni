const { Schema, model, Types } = require('mongoose');


const gameSchema = new Schema({
    name: { type: String, required: [true, 'Game name is required!'] },
    imageUrl: { type: String, required: [true, 'Image is required!'] },
    price: { type: Number, required: [true, 'Price is required!'] },
    description: { type: String, required: [true, 'Description is required!'] },
    genre: { type: String, required: [true, 'Genre is required!'] },
    platform: { type: String, required: [true, 'Platform is required!'], enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'] },
    boughtBy: { type: [Types.ObjectId] },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
});

const Game = model('Game', gameSchema);

module.exports = Game;