const gameController = require('express').Router();
const { allGames, createGame, oneGame } = require('../services/gameService.js');
const { hasUser } = require('../middlewares/guards.js');
const { parseError } = require('../util/parser.js');

//CATALOG
gameController.get('/catalog', async (req, res) => {
    const games = await allGames();

    try {
        res.render('catalog', {
            user: req.user,
            title: 'Catalog Page - Gaming Team',
            games
        });
    } catch (error) {
        res.render('404', {
            user: req.user,
            title: 'Catalog Page - Gamers Team',

        })
    }
});

//CREATE
gameController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        user: req.user,
        title: 'Create Page - Gaming Team',
    })
});

gameController.post('/create', async (req, res) => {
    const game = {
        platform: req.body.platform,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        genre: req.body.genre,
        description: req.body.description,
    }
    try {
        if (Object.values(game).some(v => v == '')) {
            throw new Error('All fields are required!');
        }
        if (game.platform == '-------') {
            throw new Error('You must select genre!')
        }

        game.owner = req.user._id;
        await createGame(game);

        res.redirect('/games/catalog');
    } catch (error) {
        res.render('create', {
            user: req.user,
            title: 'Create Page - Gaming Team',
            errors: parseError(error),
            game
        })
    }
});

//DETAILS
gameController.get('/details/:gameId', async (req, res) => {
    const game = await oneGame(req.params.gameId);

    try {
        if(req.user && game.owner == req.user._id){
            game.isOwner = true;
        }
        if(game.boughtBy.find(x => x==req.user._id)){
            game.hasBought = true;
        }
        res.render('details', {
            user: req.user,
            title:'Details Page',
            game
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title:'Details Page',
        });
        res.status(404);
    }
});


module.exports = gameController;