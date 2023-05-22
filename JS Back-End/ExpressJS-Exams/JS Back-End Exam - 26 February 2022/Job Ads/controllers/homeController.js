const { getAll } = require('../services/adsService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    const firstThree = (await getAll()).slice(0, 3);
    const candidates = firstThree.map(x => x.usersApplied.length);
    firstThree.forEach((x, i) => x.candidates = candidates[i]);

    res.render('home', {
        title: 'Home page',
        user: req.user,
        firstThree
    });
});

module.exports = homeController;
