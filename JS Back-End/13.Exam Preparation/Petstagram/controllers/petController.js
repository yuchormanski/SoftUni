const petController = require('express').Router();

//catalog
petController.get('/catalog', async (req, res) => {
    try {
        res.render('catalog', {

        })
    } catch (error) {
        res.redirect('/404');
    }
});

//create
petController.get('/add-photo', (req, res) => {
    res.render('create', {

    })
});

module.exports = petController;