const { Schema, model, Types } = require('mongoose');

const VALIDATE_IMAGE = /^https?:\/\/$/;
const age_message = 'The age should be at least 1 and no longer than 100 characters.';

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'The name should be at least 2 characters.']
    },
    age: {
        type: Number,
        required: true,
        min: [1, age_message],
        max: [100, age_message]
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return VALIDATE_IMAGE.test(value);
            },
            message: 'The photo image should start with http:// or https://'
        }

    },
    description: {
        type: String,
        required: true,
        minLength: [5, 'The description should be at least 5 characters.'],
        maxLength: [50, 'The description should be longer than 50 characters.'],

    },
    location: {
        type: String,
        required: true,
        minLength: [5, 'The location should be at least 5 characters.'],
        maxLength: [50, 'The location should be longer than 50 characters.'],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Pet = model('Pet', petSchema);

module.exports = Pet;