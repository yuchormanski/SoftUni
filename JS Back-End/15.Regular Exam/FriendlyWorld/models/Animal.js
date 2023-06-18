const { Schema, model, Types } = require('mongoose');


const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'The name is required and should be at least 2 characters.']
    },
    years: {
        type: Number,
        required: true,
        min: [1, 'The years are required and should be a number between 1 and  100.'],
        max: [100, 'The years are required and should be a number between 1 and  100.']
    },
    kind: {
        type: String,
        required: true,
        minLength: [3, 'The kind is required and should be at least 3 characters.']

    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/(http(s?)):\/\//i, 'The photo image should start with http:// or https://']
    },
    need: {
        type: String,
        required: true,
        minLength: [3, 'The need is required and should be at least 3 and no longer than 20 characters.'],
        maxLength: [20, 'The need is required and should be at least 3 and no longer than 20 characters.']
    },
    location: {
        type: String,
        required: true,
        minLength: [5, 'The location is required and should be at least 5 and no longer than 15 characters.'],
        maxLength: [15, 'The location is required and should be at least 5 and no longer than 15 characters.']
    },
    description: {
        type: String,
        required: true,
        minLength: [5, 'The description should be at least 5 characters.'],
        maxLength: [50, 'The description should be no longer than 50 characters.']
    },
    donations: {
        type: [Types.ObjectId],
        ref: 'User',
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;

