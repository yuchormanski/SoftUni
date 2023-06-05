const { hasUser } = require('../middlewares/guards.js');
const { rentHouse, getOne, deleteHouse, editHouse } = require('../services/housesService.js');
const { parseError } = require('../util/parser.js');

const actionsController = require('express').Router();

//rent
actionsController.get('/rent/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id
    try {
        await rentHouse(id, userId);
        res.redirect(`/houses/details/${id}`);
    } catch (error) {
        res.redirect('404');
    }
});

//delete
actionsController.get('/delete/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;


    try {
        const house = await getOne(id);
        if (house.owner.toString() !== userId) {
            res.redirect('404');
        }

        await deleteHouse(id);
        res.redirect('/houses/catalog');
    } catch (error) {

    }
});


//edit
actionsController.get('/edit/:id', hasUser(),async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    const house = await getOne(id).lean();
    try {
        if (house.owner.toString() !== userId) {
            res.redirect('404');
        }
        res.render('edit', {
            user: req.user,
            pageTitle: 'Edit Page',
            house
        })
    } catch (error) {
        res.render('edit', {
            user: req.user,
            pageTitle: 'Edit Page',
            house,
            errors: parseError(error),
        })
    }
})

actionsController.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const house = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        available: Number(req.body.available),
    };
    try {
        if (Object.values(house).some(x => x == '')) {
            throw new Error("All fields are required!");
        }
        if(/(http(s?)):\/\//i.test(house.imageUrl) === false){
            throw new Error('Invalid image URL!')
        }

        await editHouse(id, house);

        res.redirect(`/houses/details/${id}`);

    } catch (error) {
        res.render('create', {
            errors: parseError(error),
            pageTitle: 'Create Page',
            user: req.user,
            house
        })
    }
})


module.exports = actionsController;