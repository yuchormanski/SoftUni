const postController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const { createPost, loadPosts, getOne, voteUp, loadUsers, voteDown, getUser } = require('../services/postService.js');
const { parseError } = require('../util/parser.js');


//catalog
postController.get('/catalog', async (req, res) => {
    const posts = await loadPosts().lean();
    try {
        res.render('catalog', {
            user: req.user,
            pageTitle: 'All Posts',
            posts
        })
    } catch (error) {
        res.render('catalog', {
            errors: parseError(error),
            user: req.user,
            pageTitle: 'All Posts'
        })
    }

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

//details
postController.get('/details/:id', async (req, res) => {
    const data = await getOne(req.params.id).lean();
    const userData = await getUser(data.author._id);
    const votedUsers = await loadUsers(req.params.id).lean();

    try {
        // data.fullName = `${data.author.firstName} ${data.author.lastName}`;
        data.fullName = userData.fullName;
        data.votedUsersList = votedUsers.votes.map(x => x.email).join(', ');

        if (data.author._id == req.user._id) data.isOwner = true;

        const votes = JSON.parse(JSON.stringify(data.votes))
        if (votes.includes(req.user._id)) data.isVoted = true;

        res.render('details', {
            user: req.user,
            data,
            pageTitle: 'Details Page'
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            data,
            pageTitle: 'Error Page',
        });
        res.status(404)
    }
});

//votes
postController.get('/vote-up/:id', hasUser(), async (req, res) => {
    const data = await getOne(req.params.id);
    await voteUp(req.params.id, req.user._id);

    try {
        if (data.author._id == req.user._id) throw new Error('Can\'t vote on your own post');
        const votes = JSON.parse(JSON.stringify(data.votes))
        if (votes.includes(req.user._id)) throw new Error('You can\'t vote twice!');


        res.redirect(`/posts/details/${req.params.id}`)

    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
        })
    }
});

postController.get('/vote-down/:id', hasUser(), async (req, res) => {
    const data = await getOne(req.params.id);

    try {

        await voteDown(req.params.id, req.user._id);
        if (data.author._id == req.user._id) throw new Error('Can\'t vote on your own post');

        const votes = JSON.parse(JSON.stringify(data.votes))
        if (votes.includes(req.user._id)) throw new Error('You can\'t vote twice!');

        res.redirect(`/posts/details/${req.params.id}`)

    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
        })
    }
});


module.exports = postController;