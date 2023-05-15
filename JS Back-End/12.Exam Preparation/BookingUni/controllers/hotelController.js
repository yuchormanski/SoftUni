const hotelController = require('express').Router();
const { getById } = require('../services/hotelService.js');
const { parseError } = require('../util/parser.js');



hotelController.get('/:_id', async (req, res) => {


    try {
        const id = req.params._id;
        const hotel = await getById(id);
        let isOwner = false;
        if(req.user._id == hotel.owner){
            isOwner = true;
        }

        res.render('details', {
            title: 'Hotel details',
            user: req.user,
            hotel,
            isOwner
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

module.exports = hotelController;
