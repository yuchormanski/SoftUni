const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Petstagram',
        user: req.user 
    });
});

module.exports = homeController;
