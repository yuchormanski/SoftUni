const gameController = require('express').Router();
const { allGames, createGame, oneGame, buyGame, deleteGame, updateGame, searchGames } = require('../services/gameService.js');

const { hasUser } = require('../middlewares/guards.js');
const { parseError } = require('../util/parser.js');
const platformSelect = require('../util/platformSelect.js');

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
        if (req.user && game.owner == req.user._id) {
            game.isOwner = true;
        }
        if (game.boughtBy.find(x => x == req.user._id)) {
            game.hasBought = true;
        }

        res.render('details', {
            user: req.user,
            title: 'Details Page',
            game
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Details Page',
        });
        res.status(404);
    }
});

//BOUGHT GAME
gameController.get('/buy/:gameId', hasUser(), async (req, res) => {
    const gameId = req.params.gameId;
    await buyGame(req.user._id, gameId);
    try {
        res.redirect(`/games/details/${gameId}`)
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Details Page',
        });
        res.status(404);
    }
});

//DELETE 
gameController.get('/delete/:gameId', hasUser(), async (req, res) => {
    const gameId = req.params.gameId;
    const game = await oneGame(gameId);

    try {
        if (req.user._id != game.owner) {
            throw new Error('You are not allowed to delete this game!')
        }
        await deleteGame(gameId);
        res.redirect(`/games/catalog`)
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Details Page',
        });
        res.status(404);
    }
});

//EDIT
gameController.get('/edit/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    const game = await oneGame(gameId);
    const platform = platformSelect(game.platform);

    try {
        res.render('edit', {
            user: req.user,
            game,
            title: 'Edit Page -  Gamers Team',
            platform
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            title: 'Details Page',
        });
        res.status(404);
    }
});

gameController.post('/edit/:gameId', async (req, res) => {
    const gameId = req.params.gameId
    const game = {
        platform: req.body.platform,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        genre: req.body.genre,
        description: req.body.description,
    }
    try {
        const forEdit = await oneGame(gameId);
        if (Object.values(game).some(v => v == '')) {
            throw new Error('All fields are required!');
        }
        if (forEdit.owner != req.user._id) {
            throw new Error('You are not permitted to edit!')
        }
        await updateGame(gameId, game);

        res.redirect(`/games/details/${gameId}`);
    } catch (error) {
        res.render('edit', {
            user: req.user,
            title: 'Edit Page - Gaming Team',
            errors: parseError(error),
            game
        })
    }
});

//SEARCH
gameController.get('/search', async (req, res) => {
    let all;
    let search = false;
    const name = req.query.search;
    const platform = req.query.platform;

    try {
        if (name || platform) {
            all = await searchGames(name, platform);
            search = true;
        } else {
            all = await allGames();
        }

        res.render('search', {
            user: req.user,
            title: 'Search Page - Gamers Team',
            all,
            search
        })
    } catch (error) {
        res.render('404', {
            user: req.user,
            title: 'Search Page - Gamers Team',
        })
    }

});


module.exports = gameController;