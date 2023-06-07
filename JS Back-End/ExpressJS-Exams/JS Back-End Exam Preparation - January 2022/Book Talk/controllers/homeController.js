const { getUser, getWished } = require('../services/bookService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home page',  //if needed
        user: req.user       //if needed
    });
});

//profile
homeController.get('/profile', async (req, res) => {
    const userId = req.user._id;

    try {
        const userData = await getUser(userId).lean();
        const wished = await getWished(userId).lean()
        console.log(wished);
        res.render('profile', {
            pageTitle: 'Profile Page',
            userData,
            wished
        })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = homeController;
