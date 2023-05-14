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

        await cryptoService.create(name, imageUrl, description, price, paymentMethod, ownerId);
        res.redirect('/catalog');
    } catch (error) {
        res.status(404).render('catalog/create', { error });
    }
});




router.get('/details/:coinId', async (req, res) => {
    const coin = await Crypto.findById(req.params.coinId).lean();

    try {
        const user = req.user;
        let isOwner = false;

        if (user) {
            const userId = res.locals.user._id;
            const userCoins = await User.findById(userId).populate('cryptos').lean();
            const bought = userCoins.cryptos.some(coin => coin == req.params.coinId);
            if(coin.ownerId == userId){
                isOwner = true;
            }

            return res.render('catalog/details', { coin, user, isOwner, bought });
        }

        res.render('catalog/details', { coin });
    }
    catch (error) {
        return res.status(404).render('home/404')
    }

});

module.exports = router;
