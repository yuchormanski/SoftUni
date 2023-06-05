const { getThree } = require('../services/housesService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    try {
        const lastThree = await getThree().lean();
        console.log(lastThree);
        res.render('home', {
            pageTitle: 'Home page',  
            user: req.user,
            lastThree  
        });
    } catch (error) {
        res.redirect('/404');
    }

});

module.exports = homeController;
