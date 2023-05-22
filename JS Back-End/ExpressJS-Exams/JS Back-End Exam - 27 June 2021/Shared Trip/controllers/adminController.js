const { getOne, deleteRide, editTrip } = require('../services/tripService.js');
const { parseError } = require('../util/parser.js');

const adminController = require('express').Router();

//DELETE
adminController.get('/delete/:tripId', async (req, res) => {
    const userId = req.user._id;
    const tripId = req.params.tripId;
    try {
        const owner = await getOne(tripId);

        if (owner.creator._id != userId) {
            res.redirect('/error');
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
adminController.get('/edit/:tripId', async (req, res) => {
    const id = req.params.tripId;
    try {
        const trip = await getOne(id);
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

adminController.post('/edit/:tripId', async (req,res) => {
    const id = req.params.tripId;
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