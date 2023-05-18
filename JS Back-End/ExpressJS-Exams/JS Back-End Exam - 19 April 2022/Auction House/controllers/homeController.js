const { closing, getAll, getOneUser } = require('../services/auctionService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Auction House',  //if needed
        user: req.user       //if needed
    });
});

homeController.get('/closed', async (req, res) => {
    const closedCatalog = (await getAll()).filter(x => x.isClosed === true);
    try {
        closedCatalog.map(async n => {
            const current = await getOneUser(n.bidder);
            n.fullName = `${current.firstName} ${current.lastName}`;
        });

        res.render('closed-auctions', {
            title: 'Closed Auctions',
            user: req.user,
            closedCatalog
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Error',
            user: req.user,
        });
    }
});

homeController.get('/closed/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await closing(id);
        res.redirect('/closed')
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Error',
            user: req.user,
        });
    }
});

module.exports = homeController;
