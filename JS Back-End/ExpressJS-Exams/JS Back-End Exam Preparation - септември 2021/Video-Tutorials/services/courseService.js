const Course = require("../models/Course.js");
const User = require("../models/User.js");
const { Types } = require('mongoose')

async function createCourse(data) {
    return Course.create(data);
}

function getAll(data) {
    return Course.find(data);
}

function getAllEnrolled(userId) {
    return Course.find({ userEnrolls: userId}).select('title');
}

function getOne(id) {
    return Course.findById(id);
}
function getUser(id) {
    return User.findById(id);
}

function enrollCourse(id, userId) {
    return Course.findByIdAndUpdate(id, { $push: { userEnrolls: userId } })
}

function deleteCourse(id) {
    return Course.findByIdAndDelete(id);
}

function updateCourse(id, update) {
    return Course.findByIdAndUpdate(id, update);
}

module.exports = {
    createCourse,
    getAll,
    getOne,
    enrollCourse,
    deleteCourse,
    updateCourse,
    getUser,
    getAllEnrolled,
}