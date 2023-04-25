const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('createAccessory');
});

module.exports = router;