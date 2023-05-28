const homeController = require('express').Router();
const { getAllTheaters, getAllTheatersSorted, getAllTheatersSortedByLikes, getThreeTheaters } = require('../services/theatersService.js');




homeController.get('/', async (req, res) => {
    let theaters;
    if (req.user) {
        theaters = await getAllTheaters();
        theaters.hasUser = true;
    } else {
        theaters = await getThreeTheaters();
    }
    try {
        res.render('home', {
            pageTitle: 'Home page',  //if needed
            user: req.user,   //if needed
            theaters
        });
    } catch (error) {
        res.redirect('404');
    }
});

homeController.get('/sort-by-date', async (req, res) => {

    const theaters = await getAllTheatersSorted();
    if (req.user) {
        theaters.hasUser = true;
    }
    try {
        res.render('home', {
            pageTitle: 'Home page',  //if needed
            user: req.user,   //if needed
            theaters
        });
    } catch (error) {
        res.redirect('404');
    }
});

homeController.get('/sort-by-likes', async (req, res) => {
    const theaters = await getAllTheatersSortedByLikes();
    if (req.user) {
        theaters.hasUser = true;
    }
    try {
        res.render('home', {
            pageTitle: 'Home page',  //if needed
            user: req.user,   //if needed
            theaters
        });
    } catch (error) {
        res.redirect('404');
    }
});

module.exports = homeController;
