const gameController = require('express').Router();

gameController.get('/catalog', async(req, res) => {
    res.render('catalog', {
        user:req.user,
        title: 'Catalog Page - Gaming Team',
    });
});


module.exports = gameController;