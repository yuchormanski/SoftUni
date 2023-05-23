const { hasUser } = require('../middlewares/guards.js');
const { getOne, deleteRide, editTrip } = require('../services/tripService.js');
const { parseError } = require('../util/parser.js');

const adminController = require('express').Router();

//DELETE
adminController.get('/delete/:tripId', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const tripId = req.params.tripId;
    try {
        const owner = await getOne(tripId);

        if (owner.creator._id != userId) {
            return res.redirect('/error');
        }
        await deleteRide(tripId);
        res.redirect('/trips/catalog')
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Error',
        })
    }
});
//END DELETE

//EDIT
adminController.get('/edit/:tripId', hasUser(), async (req, res) => {
    const id = req.params.tripId;
    try {
        const trip = await getOne(id);
        if (trip.creator._id != req.user._id) {
            return res.redirect('/error');
        }
        res.render('trip-edit', {
            user: req.user,
            title: 'Edit',
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

adminController.post('/edit/:tripId', hasUser(), async (req, res) => {
    const id = req.params.tripId;
    const userId = req.user._id
    const edited = await getOne(id);
    if (edited.creator._id != userId) {
        return res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Error',
        })
    }
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

        await editTrip(id, tripForm);
        res.redirect('/trips/catalog');

    } catch (error) {
        res.render('trip-create', {
            user: req.user,
            errors: parseError(error),
            title: 'Edit',
            tripForm
        });
    }
});
//END EDIT



module.exports = adminController;