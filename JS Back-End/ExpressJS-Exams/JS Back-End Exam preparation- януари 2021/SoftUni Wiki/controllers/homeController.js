const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home page',  //if needed
        user: req.user       //if needed
    });
});

module.exports = homeController;
