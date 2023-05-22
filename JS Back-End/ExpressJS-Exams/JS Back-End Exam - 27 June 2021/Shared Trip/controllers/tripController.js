const { hasUser } = require('../middlewares/guards.js');
const { createTrip } = require('../services/tripService.js');
const { parseError } = require('../util/parser.js');

const tripController = require('express').Router();

// CATALOG
tripController.get('/catalog', (req, res) => {
    res.render('shared-trips', {
        user: req.user
    });
});
//END CATALOG


// CREATE TRIP
tripController.get('/create', (req, res) => {
    res.render('trip-create', {
        user: req.user
    });
});

tripController.post('/create', hasUser(), async (req, res) => {
    const id = req.user._id;

    const tripForm = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description
    }
    try {
        if (Object.values(tripForm).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        tripForm.creator = id;

        await createTrip(tripForm);
        res.redirect('/trips/catalog');

    } catch (error) {
        res.render('trip-create', {
            user: req.user,
            errors: parseError(error),
            title: 'Create',
            tripForm
        });
    }
});

//END CREATE TRIP



module.exports = tripController;