const hotelController = require('express').Router();
const { getById } = require('../services/hotelService.js');



hotelController.get('/details', async (req, res) => {

    const id = req.params;
    console.log(req.url);
    // const hotel = await getById();

    res.render('details', {
        title: 'Hotel details',
        // hotel
    });
});

module.exports = hotelController;
