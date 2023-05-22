const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home', 
        user: req.user 
    });
});

module.exports = homeController;
