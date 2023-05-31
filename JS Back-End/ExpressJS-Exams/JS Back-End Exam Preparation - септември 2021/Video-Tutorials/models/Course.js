const { Schema, model, Types } = require('mongoose');

const VALID_IMAGE = /^https?:\/\/.+$/;
const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [4, 'The title should be at least 4 characters']
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'The description should be at least 20 characters long']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return VALID_IMAGE.test(value);
            },
            message: "Invalid image url!"
        }
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: String,
        required: true,
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
    userEnrolls: {
        type: [Types.ObjectId],
        ref: 'User',
    },
},
    {
        timestamps: true
    });

const Course = model('Course', courseSchema);

module.exports = Course;