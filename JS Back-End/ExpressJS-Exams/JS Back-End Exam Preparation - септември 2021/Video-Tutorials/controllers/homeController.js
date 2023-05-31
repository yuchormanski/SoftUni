const { getAll } = require('../services/courseService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    const loaded = await getAll().lean();
    // let loaded = []
    res.render('home', {
        pageTitle: 'Home Page',  //if needed
        user: req.user,       //if needed
        loaded
    });
});

module.exports = homeController;
