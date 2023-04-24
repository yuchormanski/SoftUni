const mongoose = require('mongoose');

//same as above
// const {Schema, model} = require('mongoose');

const cubeSchema = new mongoose.Schema({
// same as above; need to be assigned 'Schema' from mongoose lib
// const cubeSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 50 },
    imageUrl: { type: String, required: true },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 }

});

const Cube = mongoose.model('Cube', { cubeSchema });
//same as above; need to be assigned 'model' from mongoose lib
// const Cube = model('Cube', {cubeSchema}); 

module.exports = Cube;
