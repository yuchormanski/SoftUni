const Pet = require("../models/Pet.js");

async function addPhoto(photo) {
    return await Pet.create(photo);
}

async function getAll() {
    return await Pet.find().populate('owner').lean();
}

async function getOne(id) {
    return await Pet.findById(id).populate('owner').populate('comments').lean();
}

async function makeComment(petId, comment) {
    const petData = await Pet.findById(petId);
    petData.comments.push(comment);
    petData.save();
    return;
}

async function deletePet(id) {
    return await Pet.findByIdAndDelete(id);
}

async function editPet(id, data) {
    return await Pet.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            age: data.age,
            description: data.description,
            location: data.location,
            imageUrl: data.imageUrl
        }
    })
}

module.exports = {
    addPhoto,
    getAll,
    getOne,
    makeComment,
    deletePet,
    editPet
}