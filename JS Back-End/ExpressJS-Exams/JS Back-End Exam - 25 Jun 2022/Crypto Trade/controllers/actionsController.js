const { getOne, deleteCrypto, buyCrypto, updateCrypto } = require('../services/cryptoService.js');
const { levels, parseError } = require('../util/parser.js');

const actionController = require('express').Router();

//delete
actionController.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const crypto = await getOne(id).lean();
        if (crypto.owner.toString() !== userId) {
            return res.redirect('/404');
        }
        await deleteCrypto(id);
        res.redirect('/cryptos/catalog');
    } catch (error) {
        res.redirect('/404');
    }

});

//buy
actionController.get('/buy/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const crypto = await getOne(id);
        if (crypto.owner.toString() === userId) {
            return res.redirect('/404');
        }
        await buyCrypto(id, userId);
        res.redirect(`/cryptos/details/${id}`);
    } catch (error) {
        res.redirect('/404');

    }
});

//edit
actionController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    try {
        const crypto = await getOne(id).lean();
        if (crypto.owner.toString() !== userId) {
            return res.redirect('/404');
        }
        crypto.result = levels(crypto.payment)
        res.render('edit', {
            pageTitle: '',
            crypto
        })

    } catch (error) {
        res.redirect('/404');
    }
});

actionController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;
    const crypto = {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        payment: req.body.payment,
    }
    try {
        const forCheck = await getOne(id);
        if (forCheck.owner.toString() !== userId) {
            return res.redirect('/404');
        }
        if (Object.values(crypto).some(x => x == '')) {
            throw new Error('All fields are required!')
        }
        if (/(http(s?)):\/\//i.test(crypto.imageUrl) === false) {
            throw new Error('Invalid image URL!')
        }
        if (crypto.price < 0) {
            throw new Error('The Price should be a positive number')
        }
        await updateCrypto(id, crypto);
        res.redirect(`/cryptos/details/${id}`);
    } catch (error) {
        res.render('edit', {
            errors: parseError(error),
            crypto,
        })
    }
});


module.exports = actionController;