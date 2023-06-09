const { hasUser } = require('../middlewares/guards.js');
const { createCourse, getOne, enrollCourse, deleteCourse, editCourse } = require('../services/courseService.js');
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

//details
courseController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const course = await getOne(id).lean();
        if (req.user?._id === course.owner?.toString()) {
            course.isOwner = true;
        };
        if (JSON.parse(JSON.stringify(course.enrolled)).includes(req.user._id)) {
            course.isEnrolled = true;
        }
        res.render('details', {
            course
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            course
        })
    }
});

//enroll
courseController.get('/enroll/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    try {
        await enrollCourse(id, req.user._id);
        res.redirect(`/courses/details/${id}`)
    } catch (error) {
        res.render('404', {
            errors: parseError(error),

        })
    }
});

//delete
courseController.get('/delete/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const course = await getOne(id);
        if (course.owner.toString() !== userId) {
            throw new Error('Unauthorized!')
        };
        await deleteCourse(id);
        res.redirect('/');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        })
    }
});

//edit
courseController.get('/edit/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const course = await getOne(id).lean();
        if (course.owner.toString() !== userId) {
            throw new Error('Unauthorized!')
        };

        res.render('edit', {
            course,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        })
    }
});

courseController.post('/edit/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
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
        await editCourse(id,course);
        res.redirect(`/courses/details/${id}`);

    } catch (error) {
        res.render('edit', {
            course,
            errors: parseError(error),
        })
    }
});


module.exports = courseController;