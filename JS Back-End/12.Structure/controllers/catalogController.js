const router = require('express').Router();
const cryptoService = require('../services/cryptoService.js');
const Crypto = require('../models/Crypto.js');
const User = require('../models/User.js');

router.get('/catalog', async (req, res) => {
    const data = await Crypto.find().lean();
    res.render('catalog/catalog', { data });
});




router.get('/create', (req, res) => {
    res.render('catalog/create', { req });
});

router.post('/create', async (req, res) => {
    try {
        const ownerId = req.user._id;
        const { name, imageUrl, description, price, paymentMethod } = req.body;
        // console.log(name, imageUrl, description, price, paymentMethod, ownerId);

        await cryptoService.create(name, imageUrl, description, price, paymentMethod, ownerId);
        res.redirect('/catalog');
    } catch (error) {
        res.status(404).render('catalog/create', { error });
    }
});




router.get('/details/:coinId', async (req, res) => {

    try {
        const coin = await Crypto.findById(req.params.coinId).lean();
        const user = req.user;

        if (user) {
            const userId = res.locals.user._id;
            const userCoins = await User.findById(userId).populate('cryptos').lean();

            owner = userCoins.cryptos.some(coin => coin == req.params.coinId);

            res.render('catalog/details', { coin, user, owner });
        };
    } catch (error) {
       return res.status(404).render('home/404')
    }
});

module.exports = router;
