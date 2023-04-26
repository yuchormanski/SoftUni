const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        // validation
        //v.1   v.2 is in Cube.js
        match: [/^https?:\/\//, 'Invalid URL!'],

    },
    description: {
        type: String,
        required: true,
        maxLength: 150,
    },

});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;