const { getHomeArticles, search } = require('../services/articleService.js');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {

    const criteria = req.query.search;
    const homeArticles = [];
    let renderThis = 'home';

    try {
        if (criteria) {
            renderThis = 'search-results';
            const searchResult = await search(criteria).lean();
            searchResult.forEach(x => homeArticles.push(x));
        } else {

            const lastThree = await getHomeArticles().lean();

            lastThree.forEach(x => {
                const current = {};
                current.title = x.title;
                current._id = x._id;
                current.content = x.content.split(' ').slice(0, 49).join(' ');
                homeArticles.push(current);
            }
            )
        }

        res.render(renderThis, {
            user: req.user,
            homeArticles,
            criteria
        });
    } catch (error) {
        res.redirect('404');
        res.status(404);
    }
});

module.exports = homeController;
