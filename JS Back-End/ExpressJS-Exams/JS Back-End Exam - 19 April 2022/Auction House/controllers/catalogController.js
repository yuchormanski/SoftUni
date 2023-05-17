const { getAll, getOne } = require('../services/auctionService.js');
const { parseError } = require('../util/parser.js');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {

    const catalog = await getAll();

    try {
        res.render('browse', {
            title: 'Browse Auction',
            user: req.user,
            catalog
        })
    } catch (error) {
        res.render('404', {
            body: {
                email: req.user.email,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
            },
            errors: parseError(error)
        })
    }
});
//end catalog

//details
catalogController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const element = await getOne(id);

    try {

        let target = 'details';
        if (req.user && req.user._id == element.author) {
            target = 'details-owner'
        }

        const options = {
            element,
            title: 'Details',
            user: req.user,
        }
        res.render(target, options);
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Page Not Found',
            user: req.user
        })
    }
});


module.exports = catalogController;