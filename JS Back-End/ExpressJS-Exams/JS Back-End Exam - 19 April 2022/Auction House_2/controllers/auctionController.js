const { hasUser } = require('../middlewares/guards.js');
const { getAll, createAuction, getOne, getAllClosed } = require('../services/auctionService.js');
const { parseError } = require('../util/parser.js');

const auctionController = require('express').Router();

//catalog
auctionController.get('/catalog', async (req, res) => {

    try {
        const auctions = await getAll().lean();
        res.render('browse', {
            pageTitle: 'Browse Auctions',
            auctions,

        })
    } catch (error) {
        res.redirect('/404');
    }
});

//create
auctionController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        pageTitle: 'Publish Auction',
    })
});

auctionController.post('/create', async (req, res) => {
    const auction = {
        title: req.body.title,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        price: Number(req.body.price),
        author: req.user._id
    }
    try {

        if (Object.values(auction).some(x => x == '')) {
            throw new Error('All fields are required');
        };
        if (/(http(s?)):\/\//i.test(auction.imageUrl) === false) {
            throw new Error('Invalid image URL!')
        };

        await createAuction(auction);
        res.redirect('/auctions/catalog');
    } catch (error) {
        res.render('create', {
            pageTitle: 'Publish Auction',
            errors: parseError(error),
            auction
        })
    }
});

//details
auctionController.get('/details/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const auction = await getOne(id).populate('author').populate('bidder').lean();

        const categoryName = {
            estate: 'Real Estate',
            vehicles: 'Vehicles',
            furniture: 'Furniture',
            electronics: 'Electronics',
            other: 'Other'
        }

        auction.categoryValue = categoryName[auction.category];
        auction.authorFullName = `${auction.author.firstName} ${auction.author.lastName}`; 

        
        if (req.user?._id === auction.author._id.toString()) {
            auction.isOwner = true;
        };
        if(auction.bidder){
            auction.hasBidder = true;
            if (req.user?._id === auction.bidder._id.toString()) {
                auction.isBidder = true;
            };
            auction.bidderFullName = `${auction.bidder.firstName} ${auction.bidder.lastName}`;
        }
        
        
        res.render('details', {
            pageTitle: 'Auction Details',
            auction
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//closed
auctionController.get('/closed', async (req, res) => {
    const userId = req.user._id;
    try {
        const allClosed = await getAllClosed(userId).lean();
        res.render('closed-auctions', {
            allClosed,
            pageTitle: 'Closed Auctions'
        })
    } catch (error) {
        res.redirect('/404');
    }
});


module.exports = auctionController;