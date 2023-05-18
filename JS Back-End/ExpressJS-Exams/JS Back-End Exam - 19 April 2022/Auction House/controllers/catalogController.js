const { getAll, getOne, createBid, getName } = require('../services/auctionService.js');
const { parseError } = require('../util/parser.js');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {

    const catalog = (await getAll()).filter(x => x.isClosed === false);
    
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
//END CATALOG

//DETAILS
catalogController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const element = await getOne(id);

    try {

        let target = 'details';
        if (req.user && req.user._id == element.author) {
            target = 'details-owner'
        }
        if (element.bidder == req.user._id) {
            element.isBidder = true;
        }
        if (element.bidder) {
            element.bidderName = await getName(element.bidder);
        }
        element.authorName = await getName(element.author);

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
//END DETAILS


//BID
catalogController.post('/details/:id', async (req, res) => {
    const auctionId = req.params.id;
    const element = await getOne(auctionId);
    const userId = req.user._id;
    const currentBid = Number(req.body.bid);

    try {
        if (req.user._id == element.author) {
            throw new Error('Can\'t bid on your own auction!')
        }
        if (req.user._id == element.bidder) {
            throw new Error('You are currently the highest bidder for this auction!')
        }

        if (element.price >= currentBid) {
            throw new Error('The bid you place should be bigger than the auction price!')
        }


        const doBid = await createBid(auctionId, userId, currentBid);

        res.redirect(`/catalog/details/${auctionId}`);

    } catch (error) {
        res.render('details', {
            errors: parseError(error),
            title: 'Details',
            user: req.user,
            element
        });
    }

});
//END BID

module.exports = catalogController;