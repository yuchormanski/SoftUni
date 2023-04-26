const router = require('express').Router();

const Accessory = require('../models/Accessory.js');


// URL: /accessory/create    /accessory is striped from  .use() method
router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl} = req.body;

    try {
        await Accessory.create({ name, description, imageUrl});
    } catch (error) {
        console.log(error.message);
        return res.redirect('/404');
    }
    
    res.redirect('/');
});

module.exports = router;