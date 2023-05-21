const { getAll } = require('../services/addsService.js');
const { parseError } = require('../util/parser.js');

const addsController = require('express').Router();

addsController.get('/', async (req, res) => {
    const allAdds = await getAll();

    console.log(allAdds);
    try {
        res.render('all-ads', {
            title: 'All-Ads Page',
            user: req.user,
            allAdds

        })
    } catch (error) {
        res.status(404);
        res.render('all-ads', {
            title: "All-Ads Page",
            user: req.user,
            errors: parseError(error)
        })
    }
});


module.exports = addsController;