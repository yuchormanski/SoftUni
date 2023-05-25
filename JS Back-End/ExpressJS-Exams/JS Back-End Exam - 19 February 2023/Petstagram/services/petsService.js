const Pet = require("../models/Pet.js");

async function addPhoto(photo){
    return await Pet.create(photo);
}


module.exports = {
    addPhoto,
}