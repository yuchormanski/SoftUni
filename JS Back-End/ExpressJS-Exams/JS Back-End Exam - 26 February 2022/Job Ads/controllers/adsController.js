const { getAll, createAd } = require('../services/adsService.js');
const { parseError } = require('../util/parser.js');

const adsController = require('express').Router();

adsController.get('/', async (req, res) => {
    const allAds = await getAll();
    try {
        res.render('all-ads', {
            title: 'All-Ads Page',
            user: req.user,
            allAds

        })
    } catch (error) {
        res.status(404);
        res.render('all-ads', {
            title: "All-Ads Page",
            user: req.user,
            errors: parseError(error)
        })
    }
});

adsController.get('/details/:id', async (req, res) => {

});

adsController.get('/create', (req, res) => {
    res.render('create', {
        user: req.user,
        title: 'Create Page',
    })
});

adsController.post('/create', async (req, res) => {
    const userId = req.user._id;
    const theAd = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.companyName,
        description: req.body.companyDescription,
        author: userId
    }
    try {
        if (Object.values(theAd).some(value => value == '')) {
            throw new Error('All fields are required!');
        }
        if (theAd.headline.length < 4) {
            throw new Error('The Headline should be a minimum of 4 characters long!')
        }
        if (theAd.location.length < 8) {
            throw new Error('The location should be a minimum of 8 characters long!')
        }
        if (theAd.name.length < 3) {
            throw new Error('The Company name should be a minimum of 3 characters long!')
        }
        if (theAd.description.length < 40) {
            throw new Error('The description should be a maximum of 40 characters long!')
        }
        const newAd = createAd(theAd)
        res.render('create', {
            user: req.user,
            title: 'Create Page',
        })
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            title: 'Create Page',
        })
    }

});

module.exports = adsController;