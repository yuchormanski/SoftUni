const { Schema, model, Types } = require('mongoose');

const IMAGE_VALIDATOR = /^https?:\/\/.+$/;
const gameSchema = new Schema({
    name: { type: String, required: [true, 'Game name is required!'] },
    imageUrl: { type: String, required: [true, 'Image is required!'], validate:{
        validator(value){
            return IMAGE_VALIDATOR.test(value);
        },
        message:'Invalid image URL!'
    } },
    price: { type: Number, required: [true, 'Price is required!'], min:[1, 'The price must be positive number!'] },
    description: { type: String, required: [true, 'Description is required!'] },
    genre: { type: String, required: [true, 'Genre is required!'] },
    platform: { type: String, required: [true, 'Platform is required!'], enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'] },
    boughtBy: { type: [Types.ObjectId] },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
});

const Game = model('Game', gameSchema);

module.exports = Game;