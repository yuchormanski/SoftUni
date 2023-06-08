const { createCourse } = require('../services/courseService.js');
const { parseError } = require('../util/parser.js');

const courseController = require('express').Router();

//create
courseController.get('/create', (req, res) => {
    res.render('create', {
        user: req.user,
    })
});

courseController.post('/create', async (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.user._id,
    }
    try {
        if (Object.values(course).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        if (course.title.length < 4) {
            throw new Error('The title should be at least 4 characters')
        }
        if (course.description.length < 20) {
            throw new Error('The description should be at least 20 characters long')
        }
        if (!/^(http(s?)):\/\//i.test(course.imageUrl)) {
            throw new Error('The imageUrl should starts with http or https')
        }
        await createCourse(course);
        res.redirect('/');

    } catch (error) {
        res.render('create', {
            course,
            errors: parseError(error),
        })
    }
});

module.exports = courseController;