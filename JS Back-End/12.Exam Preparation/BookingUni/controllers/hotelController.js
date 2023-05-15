const hotelController = require('express').Router();
const Hotel = require('../models/Hotel.js');
const User = require('../models/User.js');
const { getById, bookHotel, deleteHotel, editHotel } = require('../services/hotelService.js');
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

hotelController.get('/edit/:_id', async (req, res) => {
    const id = req.params._id;
    const hotel = await getById(id);
    res.render('edit', {
        title: 'Edit hotel',
        hotel,
        user: req.user
    })
});

hotelController.post('/edit/:_id', async (req, res) => {
    const id = req.params._id;

    const hotel = {
        name: req.body.hotel,
        city: req.body.city,
        rooms: Number(req.body.rooms),
        imgUrl: req.body.imgUrl,
        owner: req.user._id
    }
    try {
        if (hotel.name == '' ||
            hotel.city == '' ||
            hotel.rooms == '' ||
            hotel.imgUrl == '') {
            throw new Error('All fields are required!');
        }

        const edited = await editHotel(id, hotel)
        res.redirect(`/details/${id}`);

    } catch (error) {
        const errors = parseError(error);

        res.render(`details`, {
            errors,
            title: 'Details page',
            user: req.user,
        });
    }
});




hotelController.get('/delete/:_id', async (req, res) => {
    const id = req.params._id;
    await deleteHotel(id);
    res.redirect('/');
});

module.exports = hotelController;
