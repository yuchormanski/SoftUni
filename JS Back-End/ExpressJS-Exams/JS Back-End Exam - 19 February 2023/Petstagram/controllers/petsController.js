const { hasUser } = require('../middlewares/guards.js');
const { addPhoto, getAll, getOne, makeComment, deletePet, editPet } = require('../services/petsService.js');
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
    const petData = await getOne(req.params.petId);
    try {
        if (req.user && req.user._id == petData.owner._id) {
            petData.isOwner = true;
        }
        res.render('details', {
            user: req.user,
            petData
        })
    } catch (error) {
        res.render('404', {
            user: req.user,
            errors: parseError(error),
            photoData,
        })
    }
});
//END DETAILS

//POST COMMENT
petsController.post('/details/:petId', hasUser(), async (req, res) => {
    const petId = req.params.petId;
    const comment = {
        username: req.user.username,
        comment: req.body.comment
    }
    try {
        if (comment.comment == '') {
            throw new Error('You can\'t post empty comment!')
        }
        await makeComment(petId, comment)
        res.redirect(`/pets/details/${petId}`)
    } catch (error) {
        res.render('404', {
            user: req.user,
            errors: parseError(error),
        })
    }
});
//END POST COMMENT

//DELETE
petsController.get('/delete/:id', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const petId = req.params.id
    const pet = await getOne(petId)

    try {
        if (pet.owner._id != userId) {
            throw new Error('You are not allowed to delete')
        }
        await deletePet(petId);
        res.redirect('/pets/catalog');
    } catch (error) {
        res.redirect('/404');
    }
});
//END DELETE

//EDIT
petsController.get('/edit/:id', hasUser(), async (req, res) => {
    const userId = req.user._id;
    const petId = req.params.id
    const pet = await getOne(petId)

    try {
        if (pet.owner._id != userId) {
            throw new Error('You are not allowed to edit')
        }
        res.render('edit', {
            pet,
            user: req.user,
            title: 'Petstagram'

        });
    } catch (error) {
        res.redirect('/404');
    }
});

petsController.post('/edit/:id', async (req, res) => {
    const petId = req.params.id

    const pet = {
        name: req.body.name,
        age: req.body.age,
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl
    }
    try {
        if (Object.values(pet).some(v => v == '')) {
            throw new Error('All fields are required!');
        }
        if (isNaN(pet.age)) {
            throw new Error('The age should be number');
        }
        if (pet.age < 1) {
            throw new Error('The age should be positive number');
        }
        if (pet.age.length > 100) {
            throw new Error('The age should be no longer than 100 characters');
        }
        if (pet.name.length > 100) {
            throw new Error('The age should be at least 2 characters!');
        }
        if (pet.description.length > 50) {
            throw new Error('The description is should be no longer than 50 characters.');
        }
        if (pet.description.length < 5) {
            throw new Error('The description should be at least 5 characters.');
        }
        if (pet.location.length > 50) {
            throw new Error('The location is should be no longer than 50 characters.');
        }
        if (pet.location.length < 5) {
            throw new Error('The location should be at least 5 characters.');
        }

        await editPet(petId, pet);

        res.redirect(`/pets/details/${petId}`);

    } catch (error) {
        res.render('edit', {
            user: req.user,
            errors: parseError(error),
            pet,
        })
    }
});
//END EDIT



module.exports = petsController;