const { getOne, donateAnimal, deleteAnimal, editAnimal } = require('../services/animalService.js');
const { parseError } = require('../util/parser.js');

const actionsController = require('express').Router();


//donate
actionsController.get('/:id/donate', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const animal = await getOne(id);
        if (userId === animal.owner.toString()) {
            return res.redirect('/404');
        };
        if(JSON.parse(JSON.stringify(animal.donations)).includes(userId)){
            return res.redirect('/404');
        }
        await donateAnimal(id, userId);
        res.redirect(`/animals/${id}/details`);
    } catch (error) {
        res.redirect('/404');
    }
});

//delete
actionsController.get('/:id/delete', async (req,res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const animal = await getOne(id);
        if (userId !== animal.owner.toString()) {
            return res.redirect('/404');
        }
        await deleteAnimal(id);
        res.redirect(`/animals/catalog`);
    } catch (error) {
        res.redirect('/404');
    }
});

//edit
actionsController.get('/:id/edit', async (req,res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const animal = await getOne(id).lean();
        if (userId !== animal.owner.toString()) {
            return res.redirect('/404');
        }
        res.render(`edit`, {
            pageTitle: 'Edit Page',
            animal,
        });
    } catch (error) {
        res.redirect('/404');
    }
});

actionsController.post('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const animal = { ...req.body };

    try {
        if (Object.values(animal).some(x => x == '')) {
            throw new Error('All fields are required!');
        };
        if(!isNaN(animal.years)){
            animal.years = Number(animal.years);
        }else{
            throw new Error('Years should be a number!')
        }

        await editAnimal(id, animal);
        res.redirect(`/animals/${id}/details`);
    } catch (error) {
        res.render('edit', {
            pageTitle: 'Edit Page',
            animal,
            errors: parseError(error),
        })
    }
});

module.exports = actionsController;