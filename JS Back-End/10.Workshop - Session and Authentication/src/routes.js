
// --- MODULAR ROUTE ---
// const express = require('express');
// const Router = express.Router;
// const router = Router();

// same as above
const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');


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

router.get('/cubes/create', cubeController.getCreateCube);
router.post('/cubes/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details/', cubeController.getCubeDetails);
router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory);

// all requests starting with /accessory
router.use('/accessories', accessoryController);

module.exports = router;