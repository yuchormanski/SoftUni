const router = require('express').Router();

router.get('/catalog', async (req, res) => {



    res.render('catalog/catalog', { req });
});




router.get('/create', (req, res) => {
    res.render('catalog/create', { req });
});
router.post('/create', (req, res) => {
    const { name, imageUrl, description, price, paymentMethod } = req.body;
    console.log(name, imageUrl, description, price, paymentMethod);
});

module.exports = router;

//2;51