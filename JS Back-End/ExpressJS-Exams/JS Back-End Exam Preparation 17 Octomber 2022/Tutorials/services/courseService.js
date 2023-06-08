const Course = require("../models/Course.js");

function createCourse(course) {
    return Course.create(course)
}


module.exports = {
    createCourse,
}