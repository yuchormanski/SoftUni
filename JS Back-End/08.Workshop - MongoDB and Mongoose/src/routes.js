
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

router.get('/create', cubeController.getCreateCube);
router.get('/details/:cubeId', cubeController.getCubeDetails);
router.post('/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);

// all requests starting with /accessory
router.use('/accessory', accessoryController);

module.exports = router;