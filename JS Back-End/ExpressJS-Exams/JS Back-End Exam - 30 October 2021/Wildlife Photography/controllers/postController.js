const postController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const { createPost } = require('../services/postService.js');
const { parseError } = require('../util/parser.js');


//catalog
postController.get('/catalog', async (req, res) => {
    res.render('catalog', {
        user: req.user,
        pageTitle: 'All Posts'
    })
});


//CREATE
postController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        user: req.user,
        pageTitle: 'Create Post',
    })
});

postController.post('/create', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        author: req.user._id
    }
    const DATE_VALIDATOR = /^[0-9]{2}(\.|\/)[0-9]{2}\1[0-9]{4}$/i;
    const VALID_IMG = /^https?:\/\/.+$/i;

    try {
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

        await createPost(post);

        res.redirect('/posts/catalog')

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            pageTitle: 'Create Post',
            post
        })
    }
});


module.exports = postController;