const Publication = require("../models/Publication.js");

function createPublication(art) {
    return Publication.create(art);
}

module.exports = {
    createPublication,
}