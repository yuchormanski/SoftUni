const { hasUser } = require('../middlewares/guards.js');
const { createPublication, getAll, getOne, shareArt } = require('../services/publicationService.js');
const { parseError } = require('../util/parser.js');

const publicationController = require('express').Router();

//gallery
publicationController.get('/catalog', async (req, res) => {
    try {
        const publications = await getAll().lean();
        res.render('gallery', {
            user: req.user,
            pageTitle: 'Gallery Page',
            publications
        })
    } catch (error) {
        res.render('404', {
            user: req.user,
            errors: parseError(error),
            pageTitle: 'Gallery Page',

        })
    }
});

//create
publicationController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        user: req.user,
        pageTitle: 'Create Page',
    })
});

publicationController.post('/create', async (req, res) => {
    const art = {
        title: req.body.title,
        technique: req.body.technique,
        imageUrl: req.body.imageUrl,
        certificate: req.body.certificate,
        author: req.user._id,
    }

    try {
        if (Object.values(art).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        await createPublication(art);
        res.redirect('/art/catalog')
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            pageTitle: 'Create Page',
            art
        })

    }
});

//details
publicationController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    // const userId = req?.user._id;
    try {
        const art = await getOne(id).populate('author').lean();
        if (req.user && req.user._id == art.author._id) {
            art.isOwner = true;
        }
        if (req.user && JSON.parse(JSON.stringify(art.shared)).includes(req.user._id)) {
        // if (art.shared.includes(userId)) {
            art.isShared = true;
        }
        res.render('details', {
            user: req.user,
            pageTitle: 'Details Page',
            art,
        })
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            pageTitle: 'Details Page',
            art,
        })
    }
});

//sharing 
publicationController.get('/share/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const userId = req.user._id;
        await shareArt(id, userId);
        res.redirect('/');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            user: req.user,
            pageTitle: 'Details Page',
        })
    }
});


module.exports = publicationController;