
// --- MODULAR ROUTE ---
// const express = require('express');
// const Router = express.Router;
// const router = Router();

// same as above
const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');
const authController = require('./controllers/authController.js');

const { isAuthenticated } = require('./middlewares/authMiddleware.js'); // ще се зарежда като middleware на страниците, които изискват регистриран потребител


// router.get('/', (req, res) => {
//     res.render('index');
// });


// router.get('/about', (req, res) => {
//     res.render('about');
// })

// router.get('/create', (req, res) => {
//     res.render('create');
// });

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);  // достъп само за регистрирани
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:cubeId/details/', cubeController.getCubeDetails);
router.get('/cubes/:cubeId/attach', isAuthenticated, cubeController.getAttachAccessory);  // достъп само за регистрирани
router.post('/cubes/:cubeId/attach', isAuthenticated, cubeController.postAttachAccessory);

// all requests starting with /accessory
router.use('/accessories', accessoryController);

router.use('/', authController);

module.exports = router;