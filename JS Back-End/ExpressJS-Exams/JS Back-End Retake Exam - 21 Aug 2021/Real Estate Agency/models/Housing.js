const { Schema, model, Types } = require('mongoose');


const housingSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [6, 'The Name should be at least 6 characters']
    },
    type: {
        type: String,
        required: true,
        enum: ['Apartment', 'Villa', 'House']
    },
    year: {
        type: Number,
        required: true,
        min: [1850, 'The Year should be between 1850 and 2021'],
        max: [2021, 'The Year should be between 1850 and 2021'],
    },
    city: {
        type: String,
        required: true,
        minLength: [4, 'The City should be at least 4 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/(http(s?)):\/\//i, 'The Home Image should starts with http:// or https://.'],
        // validate: {
        //     validator: function (value) {
        //         return value.startsWith('http://') || value.startsWith('https://');
        //     },
        //     message: 'URL is Invalid!'
        // }
    },
    description: {
        type: String,
        required: true,
        maxLength: [60, 'The Property Description should be a maximum of 60 characters long.']
    },
    available: {
        type: Number,
        required: true,
        min: [0, 'The Available Pieces should be positive number'],
        max: [10, 'The Available Pieces should be positive number to 10']
    },
    rented: {
        type: [Types.ObjectId],
        ref: 'User',
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }

});

const Housing = model('Housing', housingSchema);

module.exports = Housing;