const homeController = require('express').Router();


homeController.get('/', (req, res) => {

    const homeOption = req.user ? 'user-home' : 'guest-home';

    res.render(homeOption, {
        pageTitle: 'Home Page',
        user: req.user,
    });
});

module.exports = homeController;
