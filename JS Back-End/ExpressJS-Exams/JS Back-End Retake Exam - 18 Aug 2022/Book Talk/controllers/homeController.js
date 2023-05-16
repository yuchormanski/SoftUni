const homeController = require('express').Router();
const catalogController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page',  //if needed
        user: req.user       //if needed
    });
});

catalogController.get('/', (req, res) => {
    res.render('catalog', {
        title: 'Catalog page',  //if needed
        user: req.user       //if needed
    });
});

module.exports = {
    homeController,
    catalogController
};
