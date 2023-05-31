const { hasUser } = require('../middlewares/guards.js');
const { createCourse, getOne } = require('../services/courseService.js');
const { parseError } = require('../util/parser.js');

const courseController = require('express').Router();

//create
courseController.get('/create', hasUser(), (req, res) => {
    res.render('create-course', {
        user: req.user,
        pageTitle: 'Create Page'
    })
});

courseController.post('/create', hasUser(), async (req, res) => {
    const data = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        owner: req.user._id
    }
    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error("All fields are required!");
        }
        req.body.isPublic == 'on' ? data.isPublic = true : null;
        const createDate = new Date();
        data.createdOn = `${createDate.getDate()}.${createDate.getMonth() + 1}.${createDate.getFullYear()}`;

        await createCourse(data);
        res.redirect('/')

    } catch (error) {
        res.render('create-course', {
            errors: parseError(error),
            user: req.user,
            data
        })

    }

});

//details
courseController.get('/details/:id', async (req, res) => {
    try {
        const course = await getOne(req.params.id).lean();
        if (req.user && req.user._id == course.owner) {
            course.isOwner = true;
        }
        if (JSON.parse(JSON.stringify(course.userEnrolls)).includes(req.user._id)) {
            course.alreadyEnrolled = true;
        };

        res.render('details', {
            user: req.user,
            pageTitle: 'Details Page',
            course
        })
    } catch (error) {
        res.redirect('/*');
    }
});



module.exports = courseController;