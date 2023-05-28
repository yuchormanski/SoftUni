const homeController = require('express').Router();
const { getAllTheaters } = require('../services/theatersController.js');



homeController.get('/', async (req, res) => {
    const theaters = await getAllTheaters();
    try {
        res.render('home', {
            title: 'Home page',  //if needed
            user: req.user,   //if needed
            theaters
        });
    } catch (error) {
        res.redirect('404');
    }
});

module.exports = homeController;
