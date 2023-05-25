const { hasUser } = require('../middlewares/guards.js');
const { addPhoto, getAll, getOne } = require('../services/petsService.js');
const { parseError } = require('../util/parser.js');

const petsController = require('express').Router();

//CATALOG
petsController.get('/catalog', async (req, res) => {

    const data = await getAll();
    try {

        res.render('catalog', {
            user: req.user,
            title: 'Petstagram',
            data
        })
    } catch (error) {
        res.render('404', {
            title: "Page Not Found!",
            user: req.user
        })
    }
});
//END CATALOG

//ADD-PHOTO
petsController.get('/add-photo', hasUser(), (req, res) => {

    res.render('create', {
        user: req.user,
        title: 'Petstagram',

    })
});

petsController.post('/add-photo', async (req, res) => {

    const userId = req.user._id;
    const photoData = {
        name: req.body.name,
        age: req.body.age,
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl
    }
    try {
        if (Object.values(photoData).some(v => v == '')) {
            throw new Error('All fields are required!');
        }
        if (isNaN(photoData.age)) {
            throw new Error('The age should be number');
        }
        if (photoData.age < 1) {
            throw new Error('The age should be positive number');
        }
        if (photoData.age.length > 100) {
            throw new Error('The age should be no longer than 100 characters');
        }
        if (photoData.name.length > 100) {
            throw new Error('The age should be at least 2 characters!');
        }
        if (photoData.description.length > 50) {
            throw new Error('The description is should be no longer than 50 characters.');
        }
        if (photoData.description.length < 5) {
            throw new Error('The description should be at least 5 characters.');
        }
        if (photoData.location.length > 50) {
            throw new Error('The location is should be no longer than 50 characters.');
        }
        if (photoData.location.length < 5) {
            throw new Error('The location should be at least 5 characters.');
        }
        photoData.owner = userId;

        await addPhoto(photoData);

        res.redirect('/pets/catalog');

    } catch (error) {
        res.render('create', {
            user: req.user,
            errors: parseError(error),
            photoData,
        })
    }
});
//END ADD-PHOTO

//DETAILS
petsController.get('/details/:petId', async (req, res) => {
    const petData = getOne(req.params.petId);
    console.log(petData);
    res.render('details', {
        user: req.user,
    })
});
//END DETAILS

module.exports = petsController;