const Crypto = require('../models/Crypto.js');
const User = require('../models/User.js');
const router = require('express').Router();
const cryptoService = require('../services/cryptoService.js');


router.get('/edit/:coinId', async (req, res) => {
    const coin = await Crypto.findById(req.params.coinId).lean();

    if (!coin) {
        console.log('not found');
    }
    res.render('edit/edit', { coin });
});

router.post('/edit/:coinId', async (req, res) => {
    const id = req.params.coinId;
    const { name, imageUrl, description, price, paymentMethod, ownerId } = req.body;
    await cryptoService.edit(id, name, imageUrl, description, price, paymentMethod, ownerId);
    const coin = await Crypto.findById(id).lean();
    res.render('catalog/details', { coin });
});

router.get('/delete/:coinId', async (req, res) => {
    const coin = await Crypto.findById(req.params.coinId);
    console.log(coin._id);

    if (!coin) {
        console.log('not found');
    }
    await Crypto.deleteOne({ _id: coin._id })
    res.redirect('/');
    res.render('edit/edit', { coin });

});

router.get('/buy/:coinId', async (req, res) => {
    const user = await User.findById(req.user._id);
    user.cryptos.push(req.params.coinId);
    await user.save();
    res.redirect('/catalog')
});

module.exports = router;
