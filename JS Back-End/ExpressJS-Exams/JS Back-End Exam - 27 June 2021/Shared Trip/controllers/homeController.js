const { hasUser } = require('../middlewares/guards.js');
const User = require('../models/User.js');
const { profileInfo } = require('../services/tripService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        user: req.user
    });
});

homeController.get('/profile', hasUser(), async (req, res) => {
    let isMale = false;
    let counts = 0;

    const userId = req.user._id;
    const gender = (await User.findById(userId).lean()).gender;

    if (gender == 'male') { isMale = true };
    
    const userProfile = await profileInfo(userId);
    if(userProfile.length > 0){
        counts = userProfile.length
    }

    res.render('profile', {
        user: req.user,
        userProfile,
        isMale,
        counts
    })
});

module.exports = homeController;
