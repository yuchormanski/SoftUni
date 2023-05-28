const Theater = require("../models/Theater.js");

async function getAllTheaters() {
    return Theater.find().lean();
}

async function createTheater(data) {
    await Theater.create(data);
}

module.exports = {
    getAllTheaters,
    createTheater,
}