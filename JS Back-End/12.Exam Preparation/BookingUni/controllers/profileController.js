const User = require('../models/User.js');

const profileController = require('express').Router();



profileController.get('/', async (req,res) => {
    const user = await User.findById(req.user._id).lean();
    res.render('profile', {user})
});

module.exports = profileController;