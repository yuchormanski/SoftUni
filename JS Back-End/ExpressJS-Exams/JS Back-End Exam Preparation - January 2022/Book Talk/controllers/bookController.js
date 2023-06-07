const { hasUser } = require('../middlewares/guards.js');
const { getAll, createBook, getOne } = require('../services/bookService.js');
const { parseError } = require('../util/parser.js');

const bookController = require('express').Router();

//catalog
bookController.get('/catalog', async (req, res) => {
    try {
        const books = await getAll().lean();
        res.render('catalog', {
            pageTitle: 'Catalog Page',
            books,
        })
    } catch (error) {
        res.redirect('/404');
    }

});

//create
bookController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        pageTitle: 'Create Page',
    })
});

bookController.post('/create', hasUser(), async (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        review: req.body.review,
        genre: req.body.genre,
        stars: Number(req.body.stars),
        owner: req.user._id,
    }
    console.log(book);
    try {
        if (Object.values(book).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        if (/(http(s?)):\/\//i.test(book.imageUrl) === false) {
            throw new Error('The Image should start with http:// or https://!');
        }
        await createBook(book);
        res.redirect('/books/catalog')
    } catch (error) {
        res.render('create', {
            pageTitle: 'Create Page',
            errors: parseError(error),
            book
        })
    }
});

//details
bookController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    // const userId = req.user._id;

    try {
        const book = await getOne(id).lean();

        if (req.user && book.owner.toString() === req.user._id) {
            book.isOwner = true;
        }
        if (req.user && JSON.parse(JSON.stringify(book.wishingList)).includes(req.user._id)) {
            book.isWished = true;
        }
        res.render('details', {
            pageTitle: 'Details Page',
            book,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = bookController;