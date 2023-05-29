const { Schema, model, Types } = require('mongoose');

const VALID_IMG = /^https?:\/\/.+$/;
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    keyword: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return VALID_IMG.test(value);
            },
            message: 'Invalid image url'
        }
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    },
    votes: {
        type: [Types.ObjectId],
        ref: 'User'
    },
    rating: {
        type: Number,
        default: 0
    }

});

module.exports = model('Post', postSchema);
