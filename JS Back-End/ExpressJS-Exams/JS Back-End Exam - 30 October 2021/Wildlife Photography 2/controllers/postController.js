const { hasUser } = require('../middlewares/guards.js');
const { getAll, createPost, getOne } = require('../services/postService.js');
const { parseError } = require('../util/parser.js');

const postController = require('express').Router();

//catalog
postController.get('/catalog', async (req, res) => {
    try {
        const posts = await getAll().lean();
        res.render('all-posts', {
            pageTitle: 'Catalog Page',
            posts
        });
    } catch (error) {
        res.redirect('/404');
    }
});

//create
postController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        pageTitle: 'Create Page',
    });
});

postController.post('/create', hasUser(), async (req, res) => {
    const post = { ...req.body };

    try {
        if (Object.values(post).some(x => x == '')) {
            throw new Error('All fields are required')
        }
        post.author = req.user._id;
        await createPost(post);
        res.redirect('/wild-life/catalog');

    } catch (error) {
        res.render('create', {
            pageTitle: 'Create Page',
            errors: parseError(error),
            post
        });
    }

});

//details
postController.get('/:id/details', async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;
    try {
        const post = await getOne(id)
            .populate('author')
            .populate('votes')
            .lean();

        if (userId === post.author._id.toString()) {
            post.isOwner = true;
        };

        if (post.votes.some(x => x._id.toString() === userId)) {
            post.isVoted = true;
        }

        
        res.render('details', {
            pageTitle: 'Details Page',
            post,
        })
    } catch (error) {
        res.redirect('/404');
    }

});
module.exports = postController;