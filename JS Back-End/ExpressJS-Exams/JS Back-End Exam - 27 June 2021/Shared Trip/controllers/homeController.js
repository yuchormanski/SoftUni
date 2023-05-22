const homeController = require('express').Router();


//TODO: replace with real controller by assignment
homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page', 
        user: req.user 
    });
});

module.exports = homeController;
