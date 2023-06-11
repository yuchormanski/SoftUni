const { getAllHome, getBooked } = require('../services/hotelService.js');
const { getUser } = require('../services/userService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    try {
        const hotels = await getAllHome().lean();
        if (req.user) {
            hotels.hasUser = true;
        }
        res.render('home', {
            pageTitle: 'Home Page',  //if needed
            user: req.user,      //if needed
            hotels,
        });
    } catch (error) {
        res.redirect('/404');
    }
});

homeController.get('/profile', async (req, res) => {
    const userId = req.user._id;
    try {
        const person = await getUser(userId).lean();
        const bookedHotels = (await getBooked(userId)).map(x => x.name);
        person.bookedHotels = bookedHotels;

        res.render('profile', {
            person,
        })
    } catch (error) {
        res.redirect('/404');
    }
})

module.exports = homeController;
