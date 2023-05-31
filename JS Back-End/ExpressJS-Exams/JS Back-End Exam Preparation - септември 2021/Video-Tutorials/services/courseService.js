const Course = require("../models/Course.js");

async function createCourse(data) {
    return Course.create(data);
}

function getAll() {
    return Course.find();
}

function getOne(id) {
    return Course.findById(id);
}


function enrollCourse(id, userId) {
    return Course.findByIdAndUpdate(id, { $push: { userEnrolls: userId } })
}

function deleteCourse(id){
    return Course.findByIdAndDelete(id);
}

function updateCourse(id, update){
    return Course.findByIdAndUpdate(id, update);
}

module.exports = {
    createCourse,
    getAll,
    getOne,
    enrollCourse,
    deleteCourse,
    updateCourse
}