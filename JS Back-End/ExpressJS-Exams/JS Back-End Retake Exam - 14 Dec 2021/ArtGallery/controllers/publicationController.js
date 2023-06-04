const { createPublication, getAll } = require('../services/publicationService.js');
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
        })
    }
});

//create
publicationController.get('/create', (req, res) => {
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
        })

    }
});


module.exports = publicationController;