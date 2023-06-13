const { hasRights } = require('../middlewares/guards.js');
const { placeBid, getOne, getCurrentPrice, deleteAuction, editAuction, closeAuction } = require('../services/auctionService.js');
const { levels, parseError } = require('../util/parser.js');

const actionController = require('express').Router();


//bid
actionController.post('/bid/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const bid = Number(req.body.bid);
        const { price } = await getCurrentPrice(id);

        //bid should be higher
        if (price >= bid) {
            throw new Error('The bid can\'t be lower or equal to the current price');
        };
        await placeBid(id, userId, bid);

        res.redirect(`/auctions/details/${id}`)
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionController.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const auction = await getOne(id);
        if (userId !== auction.author.toString()) {
            throw new Error('Unauthorized!')
        }
        await deleteAuction(id);
        res.redirect('/auctions/catalog');
    } catch (error) {
        res.redirect('/404');
    }
});

//edit
actionController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {

        const auction = await getOne(id).lean();
        if (userId !== auction.author.toString()) {
            return res.redirect('/404');
        }
        auction.bidder ? auction.hasBidder = true : null;
        auction.dropDown = levels(auction.category);
        res.render('edit', {
            pageTitle: 'Edit Auction',
            auction,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

actionController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    const edited = {
        title: req.body.title,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
    }
    try {
        if (Object.values(edited).some(x => x == '')) {
            throw new Error('All fields are required');
        };
        if (/(http(s?)):\/\//i.test(edited.imageUrl) === false) {
            throw new Error('Invalid image URL!')
        };

        await editAuction(id, edited);
        res.redirect(`/auctions/details/${id}`);
    } catch (error) {
        res.render('create', {
            pageTitle: 'Publish Auction',
            errors: parseError(error),
            edited
        })
    }
});

//close
actionController.get('/close/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        
        const auction = await getOne(id).lean();
        if (userId !== auction.author.toString()) {
            return res.redirect('/404');
        }
        await closeAuction(id);
        res.redirect('/auctions/closed')
    } catch (error) {
        
    }
});




module.exports = actionController;