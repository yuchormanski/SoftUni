const { hasUser } = require('../middlewares/guards.js');
const { createHouse, getAll, getOne, searchHouses } = require('../services/housesService.js');
const { parseError } = require('../util/parser.js');

const housesController = require('express').Router();



//catalog
housesController.get('/catalog', async (req, res) => {
    try {
        const allHouses = await getAll().lean();
        res.render('aprt-for-recent', {
            user: req.user,
            pageTitle: 'Catalog',
            allHouses
        })
    } catch (error) {
        res.redirect('404');
    }

});

//create
housesController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        pageTitle: 'Create Page',
        user: req.user,
    })
});

housesController.post('/create', async (req, res) => {
    const house = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        available: Number(req.body.available),
        owner: req.user._id
    };
    try {
        if (Object.values(house).some(x => x == '')) {
            throw new Error("All fields are required!");
        }
        if (/(http(s?)):\/\//i.test(house.imageUrl) === false) {
            throw new Error('Invalid image URL!')
        }
        await createHouse(house);

        res.redirect('/houses/catalog');
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            pageTitle: 'Create Page',
            user: req.user,
            house
        })
    }
});

//details
housesController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const house = await getOne(id).populate('rented').lean();

        if (house.owner == req.user._id) {
            house.isOwner = true;
        };
        if (house.available > 0) {
            house.isAvailable = true;
        };

        if (JSON.parse(JSON.stringify(house.rented)).some(x => x._id == req.user._id)) {
            house.isRented = true;
        }
        house.names = house.rented.map(x => x.name).join(', ');

        res.render('details', {
            user: req.user,
            pageTitle: ' Details Page',
            house,
        })
    } catch (error) {
        res.redirect('404');
    }
});

//search
housesController.get('/search', async (req, res) => {
    let result = null;
    let initial = true;
    try {
        const query = req.query.search;
        if (query) {
            const string = query.substring(0, 1).toUpperCase() + query.substring(1).toLowerCase();
            result = await searchHouses(string).lean();
            initial = false;
        }
        res.render('search', {
            user: req.user,
            pageTitle: 'Search Page',
            result,
            initial,
        })
    } catch (error) {
        res.redirect('404')
    }

});

module.exports = housesController;