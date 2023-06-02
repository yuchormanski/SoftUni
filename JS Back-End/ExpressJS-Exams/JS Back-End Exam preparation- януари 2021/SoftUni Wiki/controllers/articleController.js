const articleController = require('express').Router();
const { hasUser } = require('../middlewares/guards.js');
const { createArticle, getAll, getOne, deleteOne, editContent } = require('../services/articleService.js');
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

//all articles
articleController.get('/all-articles', async (req, res) => {
    try {
        const all = await getAll().lean();
        res.render('all-articles', {
            user: req.user,
            all,
        })
    } catch (error) {
        res.redirect('404');
        res.status(404);
    }


});

//details
articleController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const one = await getOne(id).lean();
        const paragraphs = one.content.split('\r\n');
        one.content = paragraphs;
        if (req.user && one.author == req.user._id) {
            one.IsOwner = true;
        }

        res.render('article', {
            user: req.user,
            one,
        })
    } catch (error) {
        res.redirect('404');
        res.status(404);
    }
});

//delete
articleController.get('/delete/:id', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const articleId = req.params.id;
    const toBeDeleted = await getOne(articleId).lean();

    try {
        if (userId != toBeDeleted.author) {
            throw new Error('Unauthorized!')
        }
        await deleteOne(articleId);
        res.redirect('/');
    } catch (error) {
        res.redirect('/404');
        res.status(401);
    }
});

//edit
articleController.get('/edit/:id', hasUser(), async (req, res) => {
    const userId = req.user._id;
    try {
        const article = await getOne(req.params.id).lean();

        res.render('edit', {
            user: req.user,
            article
        })
    } catch (error) {
        res.render(`/edit/${req.params.id}`, {
            errors: parseError(error),
            article,
        })

    }
});

articleController.post('/edit/:id', async (req, res) => {
    const content = req.body.content;
    const article = await getOne(req.params.id).lean();
    try {
        if (content == '') {
            throw new Error('Content is required!');
        }
        if (content == article.content) {
            throw new Error('Make changes!')
        }

        await editContent(req.params.id, content)
        res.redirect(`/articles/details/${req.params.id}`);
    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            user: req.user,
            article
        })
    }

});


module.exports = articleController;