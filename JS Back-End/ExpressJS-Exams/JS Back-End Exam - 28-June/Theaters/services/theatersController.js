const Theater = require("../models/Theater.js");

async function getAllTheaters(){
    return Theater.find().lean();
}

module.exports = {
    getAllTheaters,
}