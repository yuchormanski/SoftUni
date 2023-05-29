const { getOne, deletePost } = require('../services/postService.js');
const { parseError } = require('../util/parser.js');

const actionController = require('express').Router();


//delete
actionController.get('/delete/:id', async (req, res) => {
    const post = await getOne(req.params.id).lean();
    try {
        if(post.author._id != req.user._id) {
            throw Error;
        }
        await deletePost(req.params.id);
        res.redirect('/posts/catalog')
    } catch (error) {
        res.render('404', {
            user:req.user,
            errors: parseError(error)
        });
        res.status(401);
    }

});

module.exports = actionController;