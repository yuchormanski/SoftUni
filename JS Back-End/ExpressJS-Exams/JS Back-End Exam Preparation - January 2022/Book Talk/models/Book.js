const { Schema, model, Types } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [2, 'The Title should be at least 2 characters']
    },
    author: {
        type: String,
        required: true,
        minLength: [5,'The Author should be at least 5 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator(value){
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'The Image should start with http:// or https://'
        }
    },
    review: {
        type: String,
        required: true,
        minLength: [10,'The Review should be at least 10 characters']

    },
    genre: {
        type: String,
        required: true,
        minLength: [3,'The Genre should be at least 3 characters']

    },
    stars: {
        type: Number,
        required: true,
        min: [1, 'Min star is 1'],
        max: [5, 'Max star is 5'],
    },
    wishingList: {
        type: [Types.ObjectId],
        ref: 'User'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Book = model('Book', bookSchema);

module.exports = Book;