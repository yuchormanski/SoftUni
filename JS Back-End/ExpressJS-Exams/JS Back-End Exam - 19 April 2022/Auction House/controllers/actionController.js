const Auction = require('../models/Auction.js');
const { createAuction, deleteEntry, getOne } = require('../services/auctionService.js');
const { parseError } = require('../util/parser.js');

const actionController = require('express').Router();

//CREATE
actionController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Publish Auction',  //if needed
        user: req.user       //if needed
    });
});

actionController.post('/create', async (req, res) => {
    const creation = {
        auctionTitle: req.body.auctionTitle,
        category: req.body.category,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        author: req.user._id
    }

    try {

        if (Object.values(creation).some(v => v == '')) {
            throw new Error('All fields are required!');
        }
        if (creation.auctionTitle.length < 4) {
            throw new Error('The title should be a minimum of 4 characters long!');
        }
        if (creation.description.length > 200) {
            throw new Error('The description should be a maximum of 200 characters long!');
        }

        const auction = await createAuction(creation);
        res.redirect('/catalog');

    } catch (error) {
        res.render('create', {
            title: 'Publish Auction',  //if needed
            user: req.user,     //if needed
            errors: parseError(error)
        });
    }
});
//END CREATE

//EDIT
actionController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const item = await getOne(id);

    try {
        if (item.author != req.user._id) {
            throw new Error('You are not the owner of this item!')
        }
        res.render('edit', {
            title: 'Edit Auction',
            user: req.user
        });
    } catch (error) {
        res.render('404', {
            title: 'No rights for editing!',
            errors: parseError(error),
            user: req.user
        });
    }

});


//END EDIT

//DELETE 
actionController.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const item = await getOne(id);

    try {
        if (item.author != req.user._id) {
            throw new Error('You are not the owner of this item!')
        }
        await deleteEntry(id);
        res.redirect('/catalog');
    } catch (error) {
        res.render('404', {
            title: 'No rights for deletion!',
            errors: parseError(error),
            user: req.user
        });
    }
});
//END DELETE



module.exports = actionController;