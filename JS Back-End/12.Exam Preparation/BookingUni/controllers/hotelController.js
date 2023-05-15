const hotelController = require('express').Router();
const Hotel = require('../models/Hotel.js');
const User = require('../models/User.js');
const { getById, bookHotel } = require('../services/hotelService.js');
const { parseError } = require('../util/parser.js');



hotelController.get('/:_id', async (req, res) => {

    try {
        const user = await User.findById(req.user._id);
        const id = req.params._id;
        const hotel = await getById(id);
        let isOwner = false;
        let isBooked = false;
        if (req.user._id == hotel.owner) {
            isOwner = true;
        };
        if (user.bookings.find(x => x.hotelId == id)) {
            isBooked = true;
        }

        res.render('details', {
            title: 'Hotel details',
            user: req.user,
            hotel,
            isOwner,
            isBooked
        });

    } catch (error) {
        const errors = parseError(error);

        res.render('404', {
            title: 'Hotel details',
            // errors,
            user: req.user,

        });
    }

});

hotelController.get('/book/:_id', async (req, res) => {

    const id = req.user._id;
    const hotelId = req.params._id
    const hotel = await Hotel.findById(hotelId).lean();
    const hotelData = {
        name: hotel.name,
        hotelId: hotel._id
    }
    const booked = await bookHotel(id, hotelData);
    res.redirect(`/details/${hotelId}`)
});

module.exports = hotelController;
