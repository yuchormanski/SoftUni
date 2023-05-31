const { hasUser } = require('../middlewares/guards.js');
const { enrollCourse, deleteCourse, getOne, updateCourse } = require('../services/courseService.js');
const parseError = require('../util/parser.js');

const actionController = require('express').Router();

//enroll
actionController.get('/enroll/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        await enrollCourse(id, userId);
        res.redirect(`/courses/details/${id}`);
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionController.get('/delete/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const course = await getOne(id).lean();
        if (course.owner != userId) {
            throw new Error('Unauthorized')
        }
        await deleteCourse(id)
        res.redirect('/');
    } catch (error) {
        res.redirect('/404')
    }
});

//edit
actionController.get('/edit/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const course = await getOne(id).lean();
        if (course.owner != userId) {
            throw new Error('Unauthorized')
        }
        res.render('edit', {
            user: req.user,
            pageTitle: 'Edit Page',
            course,
        });
    } catch (error) {
        res.redirect('/404')
    }
});

actionController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const data = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    }
    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error("All fields are required!");
        }
        req.body.isPublic == 'on' ? data.isPublic = true : data.isPublic = false;

        await updateCourse(id, data);
        res.redirect(`/courses/details/${id}`)

    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            user: req.user,
            data
        })
    }
});

module.exports = actionController;