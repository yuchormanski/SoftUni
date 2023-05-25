const Pet = require("../models/Pet.js");

async function addPhoto(photo) {
    return await Pet.create(photo);
}

async function getAll(){
    return await Pet.find().populate('owner').lean();
}

async function getOne(id){
    return await Pet.findById(id).lean();
}


module.exports = {
    addPhoto,
    getAll,
    getOne,
}