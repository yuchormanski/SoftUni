const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const bookSchema = new Schema({
    
    reviewTitle: {
        type: String,
        required: true,
        minLength: [2, 'The Title should be at least 2 characters']
    },
    author: {
        type: String,
        required: true,
        minLength: [5, 'The Author should be at least 5 characters']

    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid image URL'
        }

    },
    review: {
        type: String,
        required: true,
        minLength: [10, 'The Review should be a minimum of 10 characters long.']
    },
    genre: {
        type: String,
        required: true,
        minLength: [3, 'The Genre should be at least 3 characters!']

    },
    stars: {
        type: Number,
        required: true,
        min: [1, 'The Stars should be a positive number between 1 and 5'],
        max: [5, 'The Stars should be a positive number between 1 and 5'],
    },
    wishing: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Book = model('Book', bookSchema);

module.exports = Book;