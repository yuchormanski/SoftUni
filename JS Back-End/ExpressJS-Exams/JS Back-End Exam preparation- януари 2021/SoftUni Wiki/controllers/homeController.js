const { getHomeArticles } = require('../services/articleService.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    const lastThree = await getHomeArticles().lean();
    const homeArticles = []
    lastThree.forEach(x => {
        const current = {};
        current.title = x.title;
        current.content = x.content.split(' ').slice(0,49).join(' ');
        homeArticles.push(current);
    }   
    )

    console.log(homeArticles);
    res.render('home', {
        pageTitle: 'Home page',  //if needed
        user: req.user,       //if needed
        homeArticles
    });
});

module.exports = homeController;
