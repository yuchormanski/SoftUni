const Theater = require("../models/Theater.js");

async function getAllTheaters() {
    return Theater.find().lean();
}

async function getAllTheatersSorted() {
    return Theater.find().sort({createdOn: -1}).lean();
}

async function getAllTheatersSortedByLikes() {
    return Theater.find().sort({likes: -1}).lean();
}

async function createTheater(data) {
    await Theater.create(data);
}

module.exports = {
    getAllTheaters,
    createTheater,
    getAllTheatersSorted,
    getAllTheatersSortedByLikes,
}