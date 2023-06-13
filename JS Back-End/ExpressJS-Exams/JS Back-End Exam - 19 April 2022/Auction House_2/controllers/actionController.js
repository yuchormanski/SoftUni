const { placeBid } = require('../services/auctionService.js');

const actionController = require('express').Router();

actionController.post('/bid/:id', async (req,res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const bid = req.body.bid;
        console.log(bid);
        await placeBid(id, userId);
        res.redirect(`/auctions/details/${id}`)
    } catch (error) {
        res.redirect('/404');
    }
})

module.exports = actionController;