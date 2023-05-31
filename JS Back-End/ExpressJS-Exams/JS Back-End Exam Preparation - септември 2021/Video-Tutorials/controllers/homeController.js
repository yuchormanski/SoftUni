const { getAll, getUser, getAllEnrolled } = require('../services/courseService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    const loaded = await getAll().lean();
    // let loaded = []
    res.render('home', {
        pageTitle: 'Home Page',  //if needed
        user: req.user,       //if needed
        loaded
    });
});

homeController.get('/profile', async (req, res) => {
    try {
        const getCurrentUser = await getUser(req.user._id).lean();
        const courses = await getAllEnrolled(getCurrentUser._id);
        getCurrentUser.titles = courses.map(x => x.title).join(', ');

        res.render('profile', {
            user: req.user,
            pageTitle: 'Profile Page',
            getCurrentUser
        })

    } catch (error) {
        // res.redirect('/404');
    }

})

module.exports = homeController;
