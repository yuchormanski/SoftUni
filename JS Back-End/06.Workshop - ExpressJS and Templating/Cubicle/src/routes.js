
// --- MODULAR ROUTE ---
// const express = require('express');
// const Router = express.Router;
// const router = Router();

// same as above
const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');


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
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
module.exports = router;