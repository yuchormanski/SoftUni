const { hasUser } = require('../middlewares/guards.js');
const { createGame, getAll, getOne, buyGame, deleteGame, editGame, searchGames } = require('../services/gameService.js');
const levels = require('../util/dropDown.js');
const { parseError } = require('../util/parser.js');

const gameController = require('express').Router();

//catalog
gameController.get('/catalog', async (req, res) => {
    try {
        const games = await getAll().lean();
        res.render('catalog', {
            pageTitle: 'Catalog Page - Gaming Team',
            games,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//create
gameController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        pageTitle: 'Create Page - Gaming Team',
    })
});

gameController.post('/create', async (req, res) => {
    const game = { ...req.body };
    game._owner = req.user._id;
    game.price = Number(game.price);
    try {
        if (Object.values(game).some(x => x == '')) {
            throw new Error('All fields are required');
        }
        await createGame(game);
        res.redirect('/games/catalog');
    } catch (error) {
        res.render('create', {
            pageTitle: 'Create Page - Gaming Team',
            errors: parseError(error),
            game
        })
    }
});

//details
gameController.get('/:id/details', async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;

    try {
        const game = await getOne(id).lean();

        if (userId === game._owner._id.toString()) {
            game.isOwner = true;
        }
        if (JSON.parse(JSON.stringify(game.boughtBy)).includes(userId)) {
            game.hasBought = true;
        }
        res.render('details', {
            pageTitle: 'Details Page',
            game,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//buy
gameController.get('/:id/buy', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;
    try {
        await buyGame(id, userId);
        res.redirect(`/games/${id}/details`)

    } catch (error) {
        res.redirect('/404');
    }
});

//delete
gameController.get('/:id/delete', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;
    try {
        const game = await getOne(id);

        if (userId !== game._owner.toString()) {
            return res.redirect('/404');
        };

        await deleteGame(id);
        res.redirect('/games/catalog');
    } catch (error) {
        res.redirect('/404');

    }
});

//edit
gameController.get('/:id/edit', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;
    try {

        const game = await getOne(id).lean();

        if (userId !== game._owner._id.toString()) {
            return res.redirect('/404');
        };

        game.dropDown = levels(game.platform);

        res.render('edit', {
            pageTitle: 'Edit Page - Gaming Team',
            game,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

gameController.post('/:id/edit', hasUser(), async (req, res) => {
    const id = req.params.id;
    const editedGame = { ...req.body };
    try {
        if (Object.values(editedGame).some(x => x == '')) {
            throw new Error('All fields are required')
        }
        if (isNaN(editedGame.price)) {
            throw new Error('Price should be a positive number')
        }
        editedGame.price = Number(editedGame.price);
        console.log(editedGame);
        await editGame(id, editedGame);

        res.redirect(`/games/${id}/details`);

    } catch (error) {
        res.render('edit', {
            pageTitle: 'Edit Page - Gaming Team',
            editedGame,
            errors: parseError(error),
        })
    }
});

//search
gameController.get('/search', async (req, res) => {
    const result = { ...req.query };
    let games;
    
    try {

        if (!!result.search || !!result.platform) {
            games = await searchGames(result.search, result.platform).lean();
        } else {
            games = await getAll().lean()
        }
        res.render('search', {
            pageTitle: 'Search - Gaming Team',
            games
        });
    } catch (error) {
        res.redirect('/404')
    }
});


module.exports = gameController;