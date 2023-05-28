const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home page',
        user: req.user     
    });
});

module.exports = homeController;
