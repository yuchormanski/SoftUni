const { getAll, getOne, getSearched } = require('../services/cryptoService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page - Crypto Web',  //if needed
        user: req.user,      //if needed
    });
});

homeController.get('/search', async (req, res) => {
    const searched = req.query;
    let hasSearch = false;
    try {
        if (searched.search !== undefined || searched.payment !== undefined) {
            hasSearch = true;
        }
        
        const cryptos = hasSearch ? await getSearched(searched.search, searched.payment).lean() : await getAll().lean();
        res.render('search', {
            pageTitle: 'Search Page',
            cryptos,
        })
    } catch (error) {

    }
});

module.exports = homeController;
