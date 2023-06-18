const { hasUser } = require('../middlewares/guards.js');
const { getAll, createAnimal, getOne, searchAnimals } = require('../services/animalService.js');
const { parseError } = require('../util/parser.js');

const animalsController = require('express').Router();

//catalog
animalsController.get('/catalog', async (req, res) => {
    try {
        const animals = await getAll().lean();
        res.render('dashboard', {
            pageTitle: 'Dashboard Page',
            animals,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//create
animalsController.get('/create', hasUser(), (reg, res) => {
    res.render('create', {
        pageTitle: 'Create Page',

    })
});

animalsController.post('/create', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const animal = { ...req.body };

    try {
        if (Object.values(animal).some(x => x == '')) {
            throw new Error('All fields are required!');
        };
        animal.years = Number(animal.years);
        animal.owner = userId;

        await createAnimal(animal);
        res.redirect('/animals/catalog');
    } catch (error) {
        res.render('create', {
            pageTitle: 'Create Page',
            animal,
            errors: parseError(error),
        })
    }
});

//details
animalsController.get('/:id/details', async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id;
    try {
        const animal = await getOne(id).lean();
        if (userId === animal.owner.toString()) {
            animal.isOwner = true;
        };
        if (JSON.parse(JSON.stringify(animal.donations)).includes(userId)) {
            animal.isDonated = true;
        }

        res.render('details', {
            pageTitle: 'Details Page',
            animal,

        })
    } catch (error) {

    }
});

//search
animalsController.get('/search', async (req, res) => {
    const query = req.query.search;
    let animals;
    try {

        if (!!query) {
            animals = await searchAnimals(query).lean();
        } else {
            animals = await getAll().lean();
        }

        
        res.render('search', {
            pageTitle: 'Search Page',
            animals,
        })
    } catch (error) {
        res.redirect('/404');
    }
});


module.exports = animalsController;
