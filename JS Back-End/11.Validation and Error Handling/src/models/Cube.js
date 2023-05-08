const mongoose = require('mongoose');

//same as above
// const {Schema, model} = require('mongoose');

const cubeSchema = new mongoose.Schema({
    // same as above; need to be assigned 'Schema' from mongoose lib
    // const cubeSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 150,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'URL is Invalid!'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
          //type: mongoose.Schema.ObjectId
            ref: 'Accessory',
        }
    ]


});

const Cube = mongoose.model('Cube', cubeSchema);
//same as above; need to be assigned 'model' from mongoose lib
// const Cube = model('Cube', {cubeSchema}); 

module.exports = Cube;
