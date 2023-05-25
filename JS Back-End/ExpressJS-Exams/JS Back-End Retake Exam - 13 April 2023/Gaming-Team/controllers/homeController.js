const homeController = require('express').Router();


//TODO: replace with real controller by assignment
homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page - Gaming Team',
        user: req.user 
    });
});

module.exports = homeController;
