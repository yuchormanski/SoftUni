const postController = require('express').Router();

postController.get('/catalog', async (req, res) => {


    res.render('catalog', {
        
    })
});


module.exports = postController;