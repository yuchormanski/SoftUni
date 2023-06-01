const articleController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const { createArticle } = require('../services/articleService.js');
const { parseError } = require('../util/parser.js');

//create
articleController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        user: req.user,
    })
});

articleController.post('/create', async (req, res) => {
    const article = {
        title: req.body.title,
        content: req.body.content,
        author: req.user._id,
    }
    try {
        if (Object.values(article).some(x => x == '')) {
            throw new Error('All fields are required!');
        }
        await createArticle(article);
        res.redirect('/');

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            user: req.user,
            article,

        })
    }
});




module.exports = articleController;