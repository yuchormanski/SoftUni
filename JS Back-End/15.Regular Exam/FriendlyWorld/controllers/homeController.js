const { lastThree } = require('../services/animalService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {

    try {
        const animals = await lastThree().lean();
        res.render('home', {
            pageTitle: 'Home Page',  //if needed
            user: req.user,      //if needed
            animals
        });
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = homeController;
