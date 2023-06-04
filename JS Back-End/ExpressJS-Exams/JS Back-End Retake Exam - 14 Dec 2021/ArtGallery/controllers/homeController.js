const { hasUser } = require('../middlewares/guards.js');
const { getAll, getUserInfo, findShared, findCreated } = require('../services/publicationService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    try {
        const all = await getAll().lean();
        res.render('home', {
            pageTitle: 'Home Page',
            user: req.user,
            all
        });
    } catch (error) {
        res.render('404', {
            pageTitle: 'Error Page',
            user: req.user,
            errors: parseError(error),
        });
    }

});

homeController.get('/profile', hasUser(), async (req, res) => {
    const id = req.user._id
    const person = await getUserInfo(id).lean();
    const shared = await findShared(id);
    const created = await findCreated(id);

    try {
        if(shared.length > 0){
            person.hasShares = true;
        }
        if(created.length > 0){
            person.hasCreations = true;
        }
        person.shared = shared.map(x => x.title).join(", ");
        person.creations = created.map(x => x.title).join(", ");
        console.log(person);
        res.render('profile', {
            user: req.user,
            person,
            pageTitle: 'Profile Page'
        })
    } catch (error) {

    }
});

module.exports = homeController;
