const Pet = require("../models/Pet.js");

async function addPhoto(photo) {
    return await Pet.create(photo);
}

async function getAll(){
    return await Pet.find().populate('owner').lean();
}


module.exports = {
    addPhoto,
    getAll,
}