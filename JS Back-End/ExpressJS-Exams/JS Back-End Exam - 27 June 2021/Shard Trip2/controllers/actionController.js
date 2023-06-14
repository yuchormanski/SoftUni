const { getOwner, deleteTrip, joinTrip, getOne, updateTrip } = require('../services/tripService.js');
const { parseError } = require('../util/parser.js');

const actionController = require('express').Router();

//join
actionController.get('/join/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await joinTrip(id, req.user._id);

        res.redirect(`/trips/details/${id}`)
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionController.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const trip = await getOwner(id);
        if (userId !== trip.owner.toString()) {
            return res.redirect('/');
        }
        await deleteTrip(id);
        res.redirect(`/trips/shared`)
    } catch (error) {
        res.redirect('/404');
    }
});

//edit
actionController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const trip = await getOne(id).lean();
        if (req.user._id !== trip.owner.toString()) {
            return res.redirect('/');
        }

        res.render('edit', {
            pageTitle: 'Edit Trip',
            trip
        })
    } catch (error) {
        res.redirect('/404');
    }
});

actionController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const trip = { ...req.body };
    trip.seats = Number(trip.seats);
    trip.price = Number(trip.price);

    try {
        if (Object.values(trip).some(x => x == '')) {
            throw new Error('All fields are required')
        };
        if (new Date() > new Date(trip.date)) {
            throw new Error('Can\'t set date back in time');
        };

        await updateTrip(id, trip);
        res.redirect(`/trips/details/${id}`)
    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            pageTitle: 'Edit Trip',
            trip
        })
    }


})

module.exports = actionController;