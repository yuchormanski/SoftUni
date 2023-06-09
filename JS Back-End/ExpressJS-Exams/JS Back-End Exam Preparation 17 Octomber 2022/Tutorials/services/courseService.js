const Course = require("../models/Course.js");

function getGuestHomeTuts() {
    return Course.find().sort({ enrolled: -1 }).limit(3)
}

function getHomeTuts() {
    return Course.find().sort({ createdAt: 1 })
}

function createCourse(course) {
    return Course.create(course)
}

function getOne(id) {
    return Course.findById(id);
}

function enrollCourse(id, userId) {
    return Course.findByIdAndUpdate(id, { $push: { enrolled: userId } });
}

function deleteCourse(id) {
    return Course.findByIdAndDelete(id);
}

function editCourse(id, course) {
    return Course.findByIdAndUpdate(id, course);
}

function getSearched(string) {
    // case-insensitive
    return Course.find({ title: { $regex: string, $options: 'i' } })
}


module.exports = {
    createCourse,
    getGuestHomeTuts,
    getHomeTuts,
    getOne,
    enrollCourse,
    deleteCourse,
    editCourse,
    getSearched,
}