const router = require('express').Router();
const { homePage, errorPage } = require('./controllers/pageController.js');

//GET
router.get('/', homePage);
// router.get('/about', homeController.getAboutPage);
// router.get('/create', cubeController.getCreateCube);
// router.get('/details/:cubeId', cubeController.getCubeDetails);
router.get('/404', errorPage);
//POST
// router.post('/create', cubeController.postCreateCube);

module.exports = router;