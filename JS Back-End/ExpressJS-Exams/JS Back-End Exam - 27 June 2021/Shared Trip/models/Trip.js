const { Schema, model, Types } = require('mongoose');

const IMG_VALIDATOR = /^https?:\/\//;

const tripSchema = new Schema({
    startPoint: {
        type: String,
        required: true,
        minLength: [4, 'The Starting Point should be at least 4 characters long.']
    },
    endPoint: {
        type: String,
        required: true,
        minLength: [4, 'The Starting Point should be at least 4 characters long.']

    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    carImage: {
        type: String,
        required: true,
        validator: {
            validate(value){
                return IMG_VALIDATOR.test(value);
            },
            message: 'Invalid image URL'
        }
    },
    carBrand: {
        type: String,
        required: true,
        minLength: [4, 'The Car Brand should be minimum 4 characters long.']

    },
    seats: {
        type: Number,
        required: true,
        min: [0, 'The seats should be positive number'],
        max: [4, 'The seats should be no  ore than 4']
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'The Price should be positive number (from 1 to 50 inclusive).'],
        max: [50, 'The Price should be positive number (from 1 to 50 inclusive).']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'The Description should be minimum 10 characters long.']

    },
    creator: {
        type: Types.ObjectId,
        ref: 'User'
    },
    buddies: {
        type: [Types.ObjectId],
        ref: 'User'
    }
})