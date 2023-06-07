const { hasUser } = require('../middlewares/guards.js');
const { getUser, allUserPets, getOtherUser } = require('../services/petService.js');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Petstagram',  //if needed
        user: req.user,      //if needed

    });
});

homeController.get('/profile/:id', hasUser(), async (req, res) => {
    const userId = req.params.id;

    try {
        const currentUser = await getUser(userId).lean();
        const allPets = await allUserPets(userId).lean();

        res.render('profile', {
            currentUser,
            allPets
        })
    } catch (error) {
        res.redirect('/404')
    }
});


module.exports = homeController;
