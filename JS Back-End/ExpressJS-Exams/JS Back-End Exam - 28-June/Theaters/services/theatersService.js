const Theater = require("../models/Theater.js");

async function getAllTheaters() {
    return Theater.find().lean();
}
async function getThreeTheaters() {
    return Theater.find().sort({ likes: [-1] }).limit(3).lean();
}

async function getAllTheatersSorted() {
    return Theater.find().sort({ createdOn: -1 }).lean();
}

async function getAllTheatersSortedByLikes() {
    return Theater.find().sort({ likes: [-1] }).lean();
}

async function createTheater(data) {
    await Theater.create(data);
}

async function getTheater(id) {
    return Theater.findById(id).lean();
}

async function hasLiked(id, userId) {
    return Theater.find({ _id: id, likes: { $in: [userId] } })
}

async function deleteTheater(id, userId) {
    const owner = await Theater.findById(id);
    if (owner.owner != userId) {
        return;
    }
    return Theater.findByIdAndDelete(id);
}

async function editTheater(id, data) {
    return Theater.findByIdAndUpdate(id, { $set: data });
}

module.exports = {
    getAllTheaters,
    getThreeTheaters,
    createTheater,
    getAllTheatersSorted,
    getAllTheatersSortedByLikes,
    getTheater,
    hasLiked,
    deleteTheater,
    editTheater,
}