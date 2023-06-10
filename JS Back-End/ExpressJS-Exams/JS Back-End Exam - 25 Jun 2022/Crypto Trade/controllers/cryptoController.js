const { createCrypto, getAll, getOne } = require('../services/cryptoService.js');
const { parseError } = require('../util/parser.js');

const cryptoController = require('express').Router();

//create
cryptoController.get('/create', (req, res) => {
    res.render('create', {
        pageTitle: 'Create Page - Crypto Web'
    })
});

cryptoController.post('/create', async (req, res) => {
    const crypto = {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        payment: req.body.payment,
        owner: req.user._id
    }
    try {

        if (Object.values(crypto).some(x => x == '')) {
            throw new Error('All fields are required!')
        }
        if (/(http(s?)):\/\//i.test(crypto.imageUrl) === false) {
            throw new Error('Invalid image URL!')
        }
        if (crypto.price < 0) {
            throw new Error('The Price should be a positive number')
        }
        await createCrypto(crypto);
        res.redirect('/cryptos/catalog');
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            crypto,
        })
    }
});

//catalog
cryptoController.get('/catalog', async (req, res) => {
    try {
        const allCryptos = await getAll().lean();
        res.render('catalog', {
            pageTitle: 'Catalog Page - Crypto Web',
            allCryptos
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//details
cryptoController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;
    try {
        const crypto = await getOne(id).lean();
        if(crypto.owner.toString() === req.user?._id){
            crypto.isOwner = true;
        };
        if(JSON.parse(JSON.stringify(crypto.buy)).includes(req.user?._id)){
            crypto.isBought = true;
        }
        res.render('details' , {
            pageTitle: 'Details Page',
            crypto,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = cryptoController;