const { Schema, model, Types } = require('mongoose');


const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [6, 'The title should be at least 6 characters long'],
    },
    keyword: {
        type: String,
        required: true,
        minLength: [6, 'The keyword should be at least 6 characters long'],
    },
    location: {
        type: String,
        required: true,
        maxLength: [15, 'The location should be maximum 15 characters long'],
    },
    date: {
        type: String,
        required: true,
        validate: [/^[0-9]{2}(\.|\/)([0-9]{2})\1[0-9]{4}$/i, 'The Date should be exactly 10 characters - "02.02.2021"']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^(http(s?)):\/\//i, 'The Wildlife Image should start with http:// or https://'],
    },
    description: {
        type: String,
        required: true,
        minLength: [8, 'The description should be at least 8 characters long']
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    votes: {
        type: [Types.ObjectId],
        ref: 'User',
    },
    rating: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true,
    });



const Post = model('Post', postSchema);

module.exports = Post;



