const homeController = require('express').Router();
const pageTitle = require('../util/consts.js');


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle,
        user: req.user,
        heading: 'Welcome to Messenger'       //if needed
    });
});

module.exports = homeController;
