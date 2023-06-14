const { hasUser } = require('../middlewares/guards.js');
const { createTrip, getAll, getOne, getBuddies } = require('../services/tripService.js');
const { parseError } = require('../util/parser.js');

const tripController = require('express').Router();

//create
tripController.get('/create', hasUser(), (req, res) => {
    // console.log(Date(2023-06-28));
    res.render('create', {
        pageTitle: 'Offer Trip'
    })
});

tripController.post('/create', hasUser(), async (req, res) => {
    const trip = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description,
        owner: req.user._id,
    }

    try {
        if (Object.values(trip).some(x => x == '')) {
            throw new Error('All fields are required!');
        };
        if (new Date() > new Date(trip.date)) {
            throw new Error('Can\'t set date back in time');
        };

        await createTrip(trip);
        res.redirect('/trips/shared');
    } catch (error) {
        res.render('create', {
            trip,
            pageTitle: 'Offer Trip',
            errors: parseError(error),
        })
    }
});

//shared
tripController.get('/shared', async (req, res) => {
    try {
        const trips = await getAll().lean();
        res.render('shared', {
            trips,
            pageTitle: 'Shared Trips',
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//details
tripController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const trip = await getOne(id).populate('owner').lean();

        if (req.user?._id === trip.owner._id.toString()) {
            trip.isOwner = true;
        };

        if (req.user && JSON.parse(JSON.stringify(trip.buddies)).includes(req.user._id)) {
            trip.isJoined = true;
        }

        if (trip.seats > 0) {
            trip.hasSeats = true;
        }

        const buddies = await getBuddies(id).populate('buddies');
        trip.persons = buddies[0].buddies.map(x => x.email);
        
        res.render('details', {
            pageTitle: 'Details Trip',
            trip
        })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = tripController;