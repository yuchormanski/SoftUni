const { hasUser } = require('../middlewares/guards.js');
const { wishBook, getOne, deleteBook, editBook } = require('../services/bookService.js');
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

actionsController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const book = {
        title: req.body.title,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        review: req.body.review,
        genre: req.body.genre,
        stars: Number(req.body.stars),
    }
    try {
        if (Object.values(book).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        if (/(http(s?)):\/\//i.test(book.imageUrl) === false) {
            throw new Error('The Image should start with http:// or https://!');
        }
        await editBook(id, book);
        res.redirect(`/books/edit/${id}`)
    } catch (error) {
        res.render('edit', {
            pageTitle: 'Edit Page',
            errors: parseError(error),
            book
        })
    }
});

module.exports = actionsController;