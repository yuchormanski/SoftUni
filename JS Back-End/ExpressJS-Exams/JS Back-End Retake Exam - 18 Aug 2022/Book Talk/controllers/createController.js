const { createReview } = require('../services/bookService.js');
const { parseError } = require('../util/parser.js');

const createController = require('express').Router();

createController.get('/add-review', (req, res) => {
    res.render('create', {
        title: 'Add review',
        user: req.user
    });
});


createController.post('/add-review', async (req, res) => {
    const bookReview = {
        reviewTitle: req.body.reviewTitle,
        author: req.body.author,
        genre: req.body.genre,
        stars: Number(req.body.stars),
        imageUrl: req.body.imageUrl,
        review: req.body.review,
        owner: req.user._id
    }
    try {
        await createReview(bookReview);
        res.redirect('/catalog');
    } catch (error) {
        res.render('create', {
            title: 'Add review',
            errors: parseError(error),
            user: req.user,
            bookReview
        })
    }
});





module.exports = createController;