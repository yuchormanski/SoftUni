const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/index');
});

module.exports = router;