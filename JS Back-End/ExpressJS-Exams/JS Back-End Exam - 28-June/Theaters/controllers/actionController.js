const actionController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const Theater = require("../models/Theater.js");
const { hasLiked, deleteTheater, getTheater, editTheater } = require('../services/theatersService.js');
const { parseError, IMG_VALIDATOR } = require('../util/parser.js');

//LIKES
actionController.get('/like/:id', async (req, res) => {
    const tId = req.params.id;
    const userId = req.user._id;
    const theater = await Theater.findById(tId);
    const alreadyLikedIt = await hasLiked(tId, userId)

    try {
        if(theater.owner == userId){
            return res.redirect('/');
        }
        if (alreadyLikedIt.length > 0) return;
        theater.likes.push(userId);
        await theater.save();
        res.redirect(`/theater/details/${tId}`)
    } catch (error) {
        res.redirect('/*')
    }
});

//DELETE
actionController.get('/delete/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id
    try {
        await deleteTheater(id, userId);
        res.redirect('/');
    } catch (error) {
        res.redirect('/*');
        res.status(401);
    }
});

//EDIT
actionController.get('/edit/:id', hasUser(), async (req, res) => {
    const theater = await getTheater(req.params.id);
    try {
        if (theater.owner != req.user._id) {
            throw new Error();
        }
        res.render('edit', {
            user: req.user,
            theater,
            pageTitle: 'Edit Page'
        })
    } catch (error) {
        res.redirect('/*');
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
            throw new Error('All fields are required!');
        }
        if (data.description.length > 50) {
            throw new Error('The description should be no more than 50 characters!')
        }
        if (!IMG_VALIDATOR.test(data.imageUrl)) {
            throw new Error('Invalid image URL!')
        }
        if (req.body.isPublic === 'on') {
            data.inPublic = true;
        } else {
            data.inPublic = false;

        }

        await editTheater(id, data);

        res.redirect(`/theater/details/${id}`);

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            data,
        })
    }
});
module.exports = actionController;
