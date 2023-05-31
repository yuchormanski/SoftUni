const { hasUser } = require('../middlewares/guards.js');
const { getOne, deletePost, editPost } = require('../services/postService.js');
const { parseError } = require('../util/parser.js');

const actionController = require('express').Router();


//delete
actionController.get('/delete/:id', hasUser(), async (req, res) => {
    const post = await getOne(req.params.id).lean();
    try {
        if (post.author != req.user._id) {
            res.redirect('/*')

        }
        await deletePost(req.params.id);
        res.redirect('/posts/catalog')
    } catch (error) {
        res.render('404', {
            user: req.user,
            errors: parseError(error)
        });
        res.status(401);
    }
});

//edit
actionController.get('/edit/:id', hasUser(), async (req, res) => {
    const loaded = await getOne(req.params.id).lean();

    try {
        if (loaded.author != req.user._id) {
            res.redirect('/*')
        }
        res.render('edit', {
            user: req.user,
            loaded,
            pageTitle: 'Edit Page'
        })
    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            user: req.user,
            loaded,
            pageTitle: 'Edit Page'
        })
    }
});

actionController.post('/edit/:id', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const id = req.params.id;

    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
    }
    const DATE_VALIDATOR = /^[0-9]{2}(\.|\/)[0-9]{2}\1[0-9]{4}$/i;
    const VALID_IMG = /^https?:\/\/.+$/i;

    try {
        const loaded = await getOne(id);

        if (loaded.author != userId) {
            res.redirect('/*')
        }
        if (Object.values(post).some(x => x == '')) {
            throw new Error('All fields are required');
        }
        if (post.title.length < 6) {
            throw new Error('The Title should be at least 6 characters.');
        }
        if (post.keyword.length < 6) {
            throw new Error('The Keyword should be at least 6 characters.');
        }
        if (post.location.length > 15) {
            throw new Error('The Location should be a maximum of 15 characters long.')
        }
        if (!VALID_IMG.test(post.imageUrl)) {
            throw new Error('Invalid image URL')
        }
        if (!DATE_VALIDATOR.test(post.date)) {
            throw new Error(`Wrong date format!\nUse 01.01.2000 or01/01/2000`)
        }
        if (post.description.length < 8) {
            throw new Error('The Description should be a minimum of 8 characters long')
        }
        console.log(post);
        await editPost(id, post);

        res.redirect(`/posts/details/${id}`)

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            pageTitle: 'Edit Page',
            post
        })
    }
});

module.exports = actionController;