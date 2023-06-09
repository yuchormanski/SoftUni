const { getHomeTuts, getGuestHomeTuts, getSearched } = require('../services/courseService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {

    const homeOption = req.user ? 'user-home' : 'guest-home';
    let homeTutorials;
    try {
        const result = req.query
        
        if (req.user) {
            if (result.search !== undefined) {
                homeTutorials = await getSearched(result.search).lean();
            } else {
                homeTutorials = await getHomeTuts().lean()
            }
        } else {
            homeTutorials = await getGuestHomeTuts().lean()
        };

        homeTutorials.map(x => {
            x.date = x.createdAt.toString().split(' GMT')[0];
        })

        res.render(homeOption, {
            pageTitle: 'Home Page',
            user: req.user,
            homeTutorials
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            homeTutorials
        })
    }
});

module.exports = homeController;
