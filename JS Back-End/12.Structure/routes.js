const router = require('express').Router();
const homeController = require('./controllers/homeController.js');

router.use(homeController);




module.exports = router;