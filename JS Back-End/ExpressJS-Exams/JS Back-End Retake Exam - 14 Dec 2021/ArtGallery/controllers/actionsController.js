const { hasUser } = require('../middlewares/guards.js');
const { getOne, deleteArt, editArt } = require('../services/publicationService.js');
const { parseError } = require('../util/parser.js');
const validUrl = require('valid-url');

const actionsController = require('express').Router();

//delete
actionsController.get('/delete/:id', hasUser(), async (req, res) => {

    try {
        const art = await getOne(req.params.id).populate('author').lean();
        if (req?.user._id != art.author._id) {
            throw new Error(' You are not authorized to delete this art!')
        }
        await deleteArt(req.params.id);
        res.redirect('/art/catalog')

    } catch (error) {
        res.redirect('/')
    }
});

//edit
actionsController.get('/edit/:id', hasUser(), async (req, res) => {

    try {
        const art = await getOne(req.params.id).populate('author').lean();
        if (req?.user._id != art.author._id) {
            throw new Error(' You are not authorized to delete this art!')
        }
        res.render('edit', {
            user: req.user,
            art,
            pageTitle: 'Edit Page',
        })

    } catch (error) {
        res.redirect('/')
    }
});

actionsController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const art = {
        title: req.body.title,
        technique: req.body.technique,
        imageUrl: req.body.imageUrl,
        certificate: req.body.certificate,
    }
    try {
        if (Object.values(art).some(x => x == '')) {
            throw new Error('All fields are required!')
        }
        if (!art.imageUrl.startsWith('http://') && !art.imageUrl.startsWith('https://')) {
            throw new Error('The Art picture should start with http:// or https://')
        }
        await editArt(id, art);
        res.redirect(`/art/details/${id}`)
    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            user: req.user,
            art,
        })
    }
});

module.exports = actionsController;