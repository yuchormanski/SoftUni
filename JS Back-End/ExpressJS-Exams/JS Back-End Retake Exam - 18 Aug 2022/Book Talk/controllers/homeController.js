const { hasUser } = require('../middlewares/guards.js');
const Book = require('../models/Book.js');
const { getAll, getOneById, wishBook, deleteBook, getAllWishing, editBook } = require('../services/bookService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();
const catalogController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page',  //if needed
        user: req.user       //if needed
    });
});

catalogController.get('/', async (req, res) => {
    const catalog = await getAll();
    try {
        res.render('catalog', {
            title: 'Catalog page',
            user: req.user,
            catalog,
        });
    } catch (error) {
        res.redirect('/404', {
            title: 'Error page',
            errors: parseError(error)
        })
    }

});

catalogController.get('/:_id/details', async (req, res) => {
    const book = await getOneById(req.params._id);
    try {
        if (book.owner == req.user._id) {
            book.isOwner = true;
        } else if (book.wishing.map(b => b.toString()).includes(req.user._id.toString())) {
            book.isWished = true;
        }

        res.render('details', {
            title: 'Details page',
            user: req.user,
            book,
        });

    } catch (error) {
        res.render('404', {
            title: 'Error page',
            errors: parseError(error)
        })
    }
});

catalogController.get('/:_id/wish', hasUser(), async (req, res) => {
    const book = await wishBook(req.params._id, req.user._id);
    try {
        res.redirect(`/catalog/${req.params._id}/details`);
    } catch (error) {
        res.render('404', {
            title: 'Error page',
            errors: parseError(error)
        })
    }
});

catalogController.get('/:_id/delete', hasUser(), async (req, res) => {
    const book = await getOneById(req.params._id);

    try {
        if (book.owner != req.user._id) {
            throw new Error('You are not the owner in this book')
        }

        await deleteBook(req.params._id);
        res.redirect('/catalog');

    } catch (error) {
        res.render('404', {
            title: 'Error page',
            errors: parseError(error)

        });
    }
});

catalogController.get('/:_id/edit', hasUser(), async (req, res) => {
    const bookId = req.params._id;
    const book = await getOneById(bookId);

    try {
        if (book.owner != req.user._id) {
            throw new Error('You are not the owner in this book')
        }

        res.render('edit', {
            title: 'Edit Book Page',
            user: req.user,
            book
        });

    } catch (error) {
        res.render('404', {
            title: 'Error page',
            errors: parseError(error)

        });
    }
});

catalogController.post('/:_id/edit', hasUser(), async (req, res) => {
    const bookId = req.params._id;
    const book = await Book.findById(bookId).lean();


    const edited = {
        reviewTitle: req.body.reviewTitle,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        review: req.body.review,
        genre: req.body.genre,
        stars: Number(req.body.stars)
    };


    try {
        if(book.owner != req.user._id){
            res.clearCookie('token');
            res.redirect('/auth/login')
        }
        if (Object.values(edited).some(x => x == '')) {
            throw new Error('All fields are required!')
        }

        await editBook(bookId, edited);
        res.redirect(`/catalog/${bookId}/details`);

    } catch (error) {
        res.render('edit', {
            title: 'Edit Book Page',
            errors: parseError(error),
            user: req.user,
            book
        });
    }
});

catalogController.get('/profile', hasUser(), async (req, res) => {
    const userWishes = await getAllWishing(req.user._id);
    try {

        res.render('profile', {
            title: 'Profile page',
            user: req.user,
            userWishes
        })
    } catch (error) {
        res.render('404', {
            title: 'Error page',
            errors: parseError(error)
        });
    }

});


module.exports = {
    homeController,
    catalogController
};
