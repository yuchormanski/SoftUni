const { hasUser } = require('../middlewares/guards.js');
const { getOne, voteUp, voteDown, deletePost, updatePost } = require('../services/postService.js');
const { parseError } = require('../util/parser.js');

const actionController = require('express').Router();


//vote-Up
actionController.get('/:id/vote-up', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const post = await getOne(id);
        if (post.author.toString() === userId) {
            return res.redirect('/');
        }

        //avoid hardcoding URL
        if (post.votes.toString().includes(userId)) {
            return res.redirect('/');
        };
        await voteUp(id, userId)

        res.redirect(`/wild-life/${id}/details`);
    } catch (error) {
        res.redirect('/404');
    }
});

//vote-Down
actionController.get('/:id/vote-down', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        //avoid hardcoding URL
        const post = await getOne(id);
        if (post.author.toString() === userId) {
            return res.redirect('/');
        };
        if (post.votes.toString().includes(userId)) {
            return res.redirect('/');
        };
        await voteDown(id, userId)

        res.redirect(`/wild-life/${id}/details`);
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionController.get('/:id/delete', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const post = await getOne(id);

        if (post.author.toString() !== userId) {
            return res.redirect('/');
        }

        await deletePost(id);

        res.redirect(`/wild-life/catalog`);
    } catch (error) {
        res.redirect('/404');
    }
});

//edit
actionController.get('/:id/edit', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const post = await getOne(id).lean();

        if (post.author._id.toString() !== userId) {
            return res.redirect('/');
        }

        res.render(`edit`, {
            pageTitle: 'Edit Page',
            post,
        });
    } catch (error) {
        res.redirect('/404');
    }
});

actionController.post('/:id/edit', hasUser(), async (req, res) => {
    const id = req.params.id;
    const post = { ...req.body };
    try {

        if (Object.values(post).some(x => x == '')) {
            throw new Error('All fields are required');
        };
        if (post.title.length < 6) {
            throw new Error('The title should be at least 6 characters long')
        }
        if (post.keyword.length < 6) {
            throw new Error('The keyword should be at least 6 characters long')
        };
        if (post.location.length > 15) {
            throw new Error('The location should be maximum 15 characters long')
        };
        if (!/^[0-9]{2}(\.|\/)([0-9]{2})\1[0-9]{4}$/i.test(post.date)) {
            throw new Error('The Date should be exactly 10 characters - "02.02.2021"');
        };
        if (!/^(http(s?)):\/\//i.test(post.imageUrl)) {
            throw new Error('The Wildlife Image should start with http:// or https://');
        };
        if (post.description.length < 8) {
            throw new Error('The description should be at least 8 characters long')
        };

        await updatePost(id, post);
        res.redirect(`/wild-life/${id}/details`);
    } catch (error) {
        res.render('edit', {
            pageTitle: 'Edit Page',
            errors: parseError(error),
            post
        });
    }
});

module.exports = actionController;

