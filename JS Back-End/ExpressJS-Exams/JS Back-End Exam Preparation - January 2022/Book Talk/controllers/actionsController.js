const { hasUser } = require('../middlewares/guards.js');
const { wishBook, getOne, deleteBook } = require('../services/bookService.js');
const { parseError } = require('../util/parser.js');

const actionsController = require('express').Router();

//wish
actionsController.get('/wish/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        await wishBook(id, userId);
        res.redirect(`/books/details/${id}`);
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionsController.get('/delete/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const book = await getOne(id);
        if (book.owner.toString() !== userId) {
            throw Error
        }
        await deleteBook(id);
        res.redirect(`/books/catalog`);
    } catch (error) {
        res.redirect('/404');
    }
});

//edit
actionsController.get('/edit/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const book = await getOne(id).lean();
        if (book.owner.toString() !== userId) {
            throw Error;
        };
        res.render('edit', {
            pageTitle: 'Edit Page',
            book
        })
    } catch (error) {
        res.render('edit', {
            pageTitle: 'Edit Page',
            book,
            errors: parseError(error),
        })
    }
});

module.exports = actionsController;