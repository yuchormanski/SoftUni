const createController = require('express').Router();
const { parseError } = require('../util/parser.js');
const {create} = require('../services/hotelService.js');

createController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Add new hotel',
        user: req.user,
        body: {
            name: req.body.name,
            city: req.body.name,
            rooms: req.body.rooms,
            imgUrl: req.body.imgUrl,
        }
    });
});

createController.post('/create', async (req, res) => {
console.log(req.user._id);
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
        await create(hotel)
        res.redirect('/');

    } catch (error) {
        const errors = parseError(error);

        res.render('create', {
            title: 'Add new hotel',
            errors,
            body: {
                name: req.body.name,
                city: req.body.name,
                rooms: req.body.rooms,
                imgUrl: req.body.imgUrl,
            }
        });
    }

});

module.exports = createController;