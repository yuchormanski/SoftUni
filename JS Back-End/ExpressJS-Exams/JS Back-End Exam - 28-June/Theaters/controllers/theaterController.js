const { hasUser } = require('../middlewares/guards.js');
const { createTheater } = require('../services/theatersService.js');
const { parseError } = require('../util/parser.js');
const { IMG_VALIDATOR } = require('../util/parser.js');

const theaterController = require('express').Router();


//CREATE
theaterController.get('/create', hasUser(), (req, res) => {

    res.render('create', {
        user: req.user,
        pageTitle: 'Create PLay',

    });
});
theaterController.post('/create', hasUser(), async (req, res) => {
    const theater = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        owner: req.user._id,
    };
    const getDate = new Date();
    const playDate = `${getDate.getDate()}.${getDate.getMonth() + 1}.${getDate.getFullYear()}`

    try {
        if (Object.values(theater).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        if (theater.description.length > 50) {
            throw new Error('The description should be no more than 50 characters!')
        }
        if (!IMG_VALIDATOR.test(theater.imageUrl)) {
            throw new Error('Invalid image URL!')
        }
        if (req.body.isPublic === 'on') {
            theater.inPublic = true;
        } else {
            theater.inPublic = false;

        }

        theater.createdOn = playDate;
        await createTheater(theater);

        res.redirect('/');

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            theater,
        })
    }
});


module.exports = theaterController;