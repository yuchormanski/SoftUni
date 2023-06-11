const { createHotel, getOne } = require('../services/hotelService.js');
const { parseError } = require('../util/parser.js');

const hotelController = require('express').Router();

//create
hotelController.get('/create', (req, res) => {
    try {
        res.render('create', {})
    } catch (error) {
        res.redirect('/404');
    }
});

hotelController.post('/create', async (req, res) => {
    const userId = req.user._id;
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
        _owner: userId,
    }
    try {
        if (Object.values(hotel).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        if (/(http(s?)):\/\//i.test(hotel.imageUrl) === false) {
            throw new Error('The imageUrl should starts with http or https')
        };
        if (isNaN(hotel.rooms)) {
            throw new Error('The room value must be a number and should be between 1 and 100')
        }
        await createHotel(hotel);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            hotel,
        })
    }
});

//details
hotelController.get('/details/:id', async (req, res) => {
    try {
        const hotel = await getOne(req.params.id).lean();
        if(hotel._owner.toString() === req.user._id){
            hotel.isOwner = true;
        }
        if(JSON.parse(JSON.stringify(hotel.booked)).includes(req.user._id)){
            hotel.isBooked = true;
        };
        if(hotel.rooms === 0){
            hotel.noRooms = true;
        }
        res.render('details', { hotel })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = hotelController;