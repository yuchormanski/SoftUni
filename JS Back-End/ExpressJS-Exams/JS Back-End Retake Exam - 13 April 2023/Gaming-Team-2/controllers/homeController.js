const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page - Gaming Team',  //if needed
        user: req.user,      //if needed
    });
});

module.exports = homeController;
