const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page - Gaming Team',
        user: req.user 
    });
});

module.exports = homeController;
