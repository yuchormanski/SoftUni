const { getPet, deletePet, editPet, addComment } = require('../services/petService.js');

const actionsController = require('express').Router();

//delete
actionsController.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pet = await getPet(id);
        if (pet.owner.toString() !== req.user._id) {
            throw Error;
        }
        await deletePet(id);
        res.redirect('/pets/catalog')
    } catch (error) {
        res.redirect('/404')
    }
});

//edit
actionsController.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pet = await getPet(id).lean();
        
        if (pet.owner.toString() !== req.user._id) {
            throw new Error('You are not authorized to edit pet!');
        }
        res.render('edit', { pet })
    } catch (error) {
        res.redirect('/404')
    }
});

actionsController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const pet = {
        name: req.body.name,
        age: Number(req.body.age),
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl,
    };
    console.log(pet);
    try {
        if (Object.values(pet).some(x => x = '')) {
            throw new Error('All fields are required')
        };
        if (/(http(s?)):\/\//i.test(pet.imageUrl) === false) {
            throw new Error('The photo image should start with http:// or https://')
        }
        await editPet(id, pet);

        res.redirect(`/pets/details/${id}`);

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            pet,
        })
    }
});

//comments
actionsController.post('/comment/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const currentComment = {
            userId: req.user._id,
            comment: req.body.comment
        }

        await addComment(id, currentComment.userId, currentComment.comment);
        res.redirect(`/pets/details/${id}`);
    } catch (error) {
        res.redirect(`/404`);
    }
});

module.exports = actionsController;