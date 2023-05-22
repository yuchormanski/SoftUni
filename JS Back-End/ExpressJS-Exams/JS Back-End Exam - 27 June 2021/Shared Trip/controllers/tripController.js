const { hasUser } = require('../middlewares/guards.js');
const { createTrip, getAll, getOne, joinRide } = require('../services/tripService.js');
const { parseError } = require('../util/parser.js');

const tripController = require('express').Router();

// CATALOG
tripController.get('/catalog', async (req, res) => {
    try {
        const tripData = await getAll();

        res.render('shared-trips', {
            user: req.user,
            tripData
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Error',
        })
    }

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

//DETAILS
tripController.get('/details/:tripId', async (req, res) => {
    const tripId = req.params.tripId
    try {
        const trip = await getOne(tripId);

        if(req.user && req.user._id == trip.creator._id){
            trip.isAuthor = true;
        }
        if(trip.buddies.length > 0){
            trip.hasBuddies = true;
            trip.buddiesNames = trip.buddies.map(e => e.email).join(', ')
        }
        if(trip.buddies.some(x => x._id == req.user._id)){
            trip.alreadyJoined = true;
        }
        if(trip.seats > 0){
            trip.hasSeats = true;
        }

        res.render('trip-details', {
            user: req.user,
            title: 'Details',
            ...trip
        })

    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Error',
        })
    }
});
//END DETAILS

//JOIN
tripController.get('/join/:tripId', async (req, res) => {
    const userId = req.user._id;
    const tripId = req.params.tripId;
    try {
        await joinRide(userId, tripId);
        res.redirect('/trips/catalog')
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Error',
        })
    }

});
//END JOIN



module.exports = tripController;