const Publication = require("../models/Publication.js");
const User = require("../models/User.js");

function createPublication(art) {
    return Publication.create(art);
}

function getAll() {
    return Publication.find();
}

function getOne(id) {
    return Publication.findById(id);
}

function shareArt(id, userId) {
    return Publication.findByIdAndUpdate(id, { $push: { shared: userId } })
}

function deleteArt(id) {
    return Publication.findByIdAndDelete(id);
}

function editArt(id, edited) {
    return Publication.findByIdAndUpdate(id, edited);
}

function getUserInfo(id){
    return User.findById(id);
}

function findShared(id){
    return Publication.find({shared: id})
}

function findCreated(id){
    return Publication.find({author: id})
}

module.exports = {
    createPublication,
    getAll,
    getOne,
    shareArt,
    deleteArt,
    editArt,
    getUserInfo,
    findShared,
    findCreated,
}