const router = require('express').Router();

const Accessory = require('../models/Accessory.js');

router.get('/create', (req, res) => {
    res.render('createAccessory');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl} = req.body;

    await Accessory.create({ name, description, imageUrl});

    res.redirect('/');
});

module.exports = router;