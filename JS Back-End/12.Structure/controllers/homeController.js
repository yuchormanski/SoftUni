const router = require('express').Router();

router.get('/', (req, res) => {

    res.render('home/index', { req });
});

module.exports = router;