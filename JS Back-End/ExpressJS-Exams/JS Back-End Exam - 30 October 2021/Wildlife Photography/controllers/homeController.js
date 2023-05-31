const { hasUser } = require('../middlewares/guards.js');
const { getUser, loadPersonPosts } = require('../services/postService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home page',
        user: req.user
    });
});

homeController.get('/profile', hasUser(), async (req, res) => {
    const posts = await loadPersonPosts(req.user._id).lean();
    // const posts = []

    try {

        res.render('my-posts', {
            posts,
            user: req.user
        })
    } catch (error) {

    }

});

module.exports = homeController;

//TODO unfinished profile page; 
// missing user data