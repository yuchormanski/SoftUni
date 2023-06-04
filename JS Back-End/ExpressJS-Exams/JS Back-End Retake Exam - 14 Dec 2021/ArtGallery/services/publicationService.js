const Publication = require("../models/Publication.js");

function createPublication(art) {
    return Publication.create(art);
}

function getAll(){
    return Publication.find();
}

module.exports = {
    createPublication,
    getAll,
}