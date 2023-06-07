const { createPet, getAll, getPet } = require('../services/petService.js');
const { parseError } = require('../util/parser.js');

const petController = require('express').Router();

//catalog
petController.get('/catalog', async (req, res) => {
    try {
        const pets = await getAll().populate('owner').lean();
        res.render('catalog', {
            pets,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

//create
petController.get('/add-photo', (req, res) => {
    res.render('create', {})
});

petController.post('/add-photo', async (req, res) => {
    const pet = {
        name: req.body.name,
        age: Number(req.body.age),
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl,
        owner: req.user._id,
    };
    try {
        if (Object.values(pet).some(x => x = '')) {
            throw new Error('All fields are required')
        };
        if (/(http(s?)):\/\//i.test(pet.imageUrl) === false) {
            throw new Error('The photo image should start with http:// or https://')
        }
        await createPet(pet);
        res.redirect('/pets/catalog');
    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            pet,
        })
    }
});

//details
petController.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        const pet = await getPet(id).populate('owner').populate('comments.userId').lean();
        if(req.user && pet.owner._id.toString() === req.user._id){
            pet.isOwner = true;
        }
        
        res.render('details', {
            pet,
        })
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = petController;