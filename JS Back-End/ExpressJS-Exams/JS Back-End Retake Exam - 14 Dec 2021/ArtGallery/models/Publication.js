const { Schema, model, Types } = require('mongoose');

const valid_image = /^https?:\/\/.+$/i;

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [6, 'The Title should be a minimum of 6 characters long.']
    },
    technique: {
        type: String,
        required: true,
        maxLength: [15, 'The Painting technique should be a maximum of 15 characters long.']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return valid_image.test(value);
            },
            message: 'The Art picture should start with http:// or https://.'
        }
    },
    certificate: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
    author: {
        type: Types.ObjectId,
        ref: "User"
    },
    shared: {
        type: [Types.ObjectId],
        ref: "User"
    }
})

const Publication = model('Publication', publicationSchema);

module.exports = Publication;