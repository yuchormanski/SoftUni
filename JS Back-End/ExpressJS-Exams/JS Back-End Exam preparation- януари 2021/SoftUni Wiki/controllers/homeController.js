const { getHomeArticles } = require('../services/articleService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    const homeArticles = [];

    try {
        const lastThree = await getHomeArticles().lean();
        lastThree.forEach(x => {
            const current = {};
            current.title = x.title;
            current._id = x._id;
            current.content = x.content.split(' ').slice(0, 49).join(' ');
            homeArticles.push(current);
        }
        )
        res.render('home', {
            pageTitle: 'Home page',  //if needed
            user: req.user,       //if needed
            homeArticles
        });
    } catch (error) {
        res.redirect('404');
        res.status(404);
    }
});

module.exports = homeController;
