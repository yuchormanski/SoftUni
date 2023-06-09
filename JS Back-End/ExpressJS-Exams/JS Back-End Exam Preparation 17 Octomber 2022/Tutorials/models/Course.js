const { Schema, model, Types } = require('mongoose');

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [4, 'The title should be at least 4 characters']
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'The description should be at least 20 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^(http(s?)):\/\//i
    },
    duration: {
        type: String,
        required: true,
    },
    enrolled: {
        type: [Types.ObjectId],
        ref: 'User'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    });

const Course = model('Course', courseSchema);

module.exports = Course;