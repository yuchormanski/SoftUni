const { Schema, model, Types } = require('mongoose');


const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [2,'The name is required and should be at least 2 characters.']
    },
    imageUrl: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        minLength: [1,'The age is required and should be at least 1 and no longer than 100 characters.'],
        maxLength: [100,'The age is required and should be at least 1 and no longer than 100 characters.']

    },
    description: {
        type: String,
        required: true,
        minLength: [5,'The description is required and should be at least 5 and no longer than 50 characters.'],
        maxLength: [50,'The description is required and should be at least 5 and no longer than 50 characters.']
    },
    location: {
        type: String,
        required: true,
        minLength: [5,'The location is required and should be at least 5 and no longer than 50 characters.'],
        maxLength: [50,'The location is required and should be at least 5 and no longer than 50 characters.']
    },
    comments: {
        type: [Types.ObjectId],
        ref: 'User'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Pet = model('Pet', petSchema);

module.exports = Pet;