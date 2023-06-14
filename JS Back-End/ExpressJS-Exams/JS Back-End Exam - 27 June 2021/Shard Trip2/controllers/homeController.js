const { getTrips } = require('../services/tripService.js');
const { getUserData } = require('../services/userService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page',  //if needed
        user: req.user,      //if needed

    });
});

homeController.get('/profile', async (req, res) => {
    const user = req.user;
    try {
        user.gender === 'male' ? user.isMale = true : null;
        user.userTrips = await getTrips(user._id).lean();

        res.render('profile', {
            pageTitle: 'Profile Trip',
            user,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = homeController;
