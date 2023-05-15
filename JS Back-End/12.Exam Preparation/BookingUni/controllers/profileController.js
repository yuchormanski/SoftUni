const User = require('../models/User.js');

const profileController = require('express').Router();



profileController.get('/', async (req,res) => {
    const user = await User.findById(req.user._id).populate('bookings').lean();
    const hotelNames = [];
    user.bookings.filter(hotel => hotelNames.push(hotel.name));
    const hotels = hotelNames.join(', ');
    res.render('profile', {user, hotels})
});

module.exports = profileController;