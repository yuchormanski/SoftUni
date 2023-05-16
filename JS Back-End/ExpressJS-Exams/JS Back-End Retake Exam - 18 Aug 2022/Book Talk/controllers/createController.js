const createController = require('express').Router();

createController.get('/add-review', (req,res)=>{
    res.render('create', {
        title: 'Add review',
        user: req.user
    });
});


createController.post('/add-review', async (req,res) => {
    const bookReview = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        stars: req.body.stars,
        imageUrl: req.body.imageUrl,
        review: req.body.review,

    }
    console.log(bookReview);
});





module.exports = createController;