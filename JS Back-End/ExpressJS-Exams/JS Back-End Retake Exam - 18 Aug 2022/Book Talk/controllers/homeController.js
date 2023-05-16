const { getAll, getOneById } = require('../services/bookService.js');

const homeController = require('express').Router();
const catalogController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page',  //if needed
        user: req.user       //if needed
    });
});

catalogController.get('/', async (req, res) => {
    const catalog = await getAll();
    res.render('catalog', {
        title: 'Catalog page',
        user: req.user,
        catalog,
    });
});

catalogController.get('/:_id/details', async (req, res) => {
    const book = await getOneById(req.params._id);
    console.log(book);

    res.render('details', {
        title: 'Details page',
        user: req.user,
        book,
    });
});

module.exports = {
    homeController,
    catalogController
};
