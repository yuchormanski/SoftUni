const router = require('express').Router();

router.get('/search', (req, res) => {

    res.render('search/search', { req });
});

module.exports = router;