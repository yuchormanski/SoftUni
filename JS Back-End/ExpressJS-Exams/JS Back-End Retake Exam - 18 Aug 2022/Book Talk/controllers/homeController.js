const homeController = require('express').Router();


//TODO: replace with real controller by assignment
homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page',  //if needed
        user: req.user       //if needed
    });
});

module.exports = homeController;
