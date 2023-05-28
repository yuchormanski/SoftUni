const { Schema, model, Types } = require('mongoose');
const { IMG_VALIDATOR } = require('../util/parser.js');

const theaterSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: [50, 'The description should be with max length of 50 symbols!']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return IMG_VALIDATOR.test(value);
            },
            message: 'Invalid image URL!'
        }
    }, inPublic: {
        type: Boolean,
        required: true,
    },
    createdOn: {
        type: String,
        required: true,
    },
    likes: {
        type: [Types.ObjectId],
        ref: 'User'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

theaterSchema.index({ playTitle: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Theater = model('Theater', theaterSchema);

module.exports = Theater;