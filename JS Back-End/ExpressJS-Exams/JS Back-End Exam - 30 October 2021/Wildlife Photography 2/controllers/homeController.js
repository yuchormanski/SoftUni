const { hasUser } = require('../middlewares/guards.js');
const { getAll, getUserPosts } = require('../services/postService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page',  //if needed
        user: req.user,      //if needed

    });
});

//profile
homeController.get('/profile', hasUser(), async (req, res) => {
    try {
        const posts = await getUserPosts(req.user._id).populate('author').lean();
        console.log(posts);
        res.render('my-posts', {
posts
        })
    } catch (error) {
        res.redirect('/404')
    }
});

module.exports = homeController;
